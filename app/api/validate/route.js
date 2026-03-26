import { NextResponse } from 'next/server';
import dns, { promises as dnsPromises } from 'dns';

// Simple in-memory rate limiter per IP address
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 500;

function checkRateLimit(ip) {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    // Initial Request
    if (!record) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return true;
    }

    // Reset window if 15 minutes have passed
    if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return true;
    }

    // Block if exceeded 100 requests
    if (record.count >= MAX_REQUESTS) {
        return false;
    }

    // Increment request count
    record.count += 1;
    return true;
}

// Using system default DNS servers for better reliability across environments
const dnsResolver = dnsPromises;

export async function POST(req) {
    try {
        // Track IP Address for rate limiting
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
        
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { valid: false, reason: 'Rate limit exceeded. You can only validate 500 emails every 15 minutes per IP.' },
                { status: 429 }
            );
        }

        const body = await req.json();
        const email = body.email;

        if (!email || !email.includes('@')) {
            return NextResponse.json({ valid: false, reason: 'Invalid syntax' }, { status: 400 });
        }

        const domain = email.split('@')[1];

        // Ensure domain format is broadly correct before dns queries
        if (!domain.includes('.')) {
            return NextResponse.json({ valid: false, reason: 'Invalid domain syntax' }, { status: 400 });
        }

        let mxRecords = [];
        try {
            // Try standard Node DNS first
            mxRecords = await dnsResolver.resolveMx(domain);
        } catch (dnsError) {
            console.warn(`Standard DNS failed for ${domain}, attempting DNS-over-HTTPS...`);
            
            try {
                // Fallback: Google DNS-over-HTTPS (Bypasses Port 53 blocking/firewalls)
                const dohResponse = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`);
                const dohData = await dohResponse.json();
                
                if (dohData.Answer && dohData.Answer.length > 0) {
                    mxRecords = dohData.Answer.map(rec => {
                        // Google DoH returns data in a string format like "10 aspmx.l.google.com."
                        const parts = rec.data.split(' ');
                        return {
                            priority: parseInt(parts[0]),
                            exchange: parts[1].replace(/\.$/, '')
                        };
                    });
                } else {
                    // One last check: Does the domain even exist?
                    try {
                        const lookup = await dnsResolver.lookup(domain);
                        if (lookup.address) {
                            return NextResponse.json({ 
                                valid: true, 
                                reason: 'Verified via A-Record (No MX found)',
                                mx: domain 
                            });
                        }
                    } catch (lastErr) {
                        return NextResponse.json({ valid: false, reason: 'Domain not found or unreachable' });
                    }
                }
            } catch (dohError) {
                console.error("DNS-over-HTTPS Error:", dohError);
                return NextResponse.json({ valid: false, reason: 'Critical DNS infrastructure blocked locally' });
            }
        }

        if (!mxRecords || mxRecords.length === 0) {
            return NextResponse.json({ valid: false, reason: 'No mail servers (MX) found for this domain' });
        }

        // Connect to highest priority MX server
        mxRecords.sort((a, b) => a.priority - b.priority);
        const bestMx = mxRecords[0].exchange;

        return NextResponse.json({ 
            valid: true, 
            reason: null,
            mx: bestMx 
        });

    } catch (error) {
        console.error("Validation Error:", error);
        return NextResponse.json({ valid: false, reason: 'Unknown server error' }, { status: 500 });
    }
}
