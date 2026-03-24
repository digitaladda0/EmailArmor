import { NextResponse } from 'next/server';
import dnsSync from 'dns';

// Simple in-memory rate limiter per IP address
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

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

try {
    dnsSync.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
    console.warn("Could not set dns servers", e);
}

const dns = dnsSync.promises;

export async function POST(req) {
    try {
        // Track IP Address for rate limiting
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
        
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { valid: false, reason: 'Rate limit exceeded. You can only validate 100 emails every 15 minutes per IP.' },
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

        let mxRecords;
        try {
            mxRecords = await dns.resolveMx(domain);
        } catch (dnsError) {
            console.error("DNS Error:", dnsError);
            return NextResponse.json({ valid: false, reason: 'No MX records found' });
        }

        if (!mxRecords || mxRecords.length === 0) {
            return NextResponse.json({ valid: false, reason: 'No MX records found' });
        }

        // Connect to highest priority MX server
        mxRecords.sort((a, b) => a.priority - b.priority);
        const bestMx = mxRecords[0].exchange;

        // Note: Direct SMTP Ping over Port 25 is removed because it is heavily blocked by 
        // Vercel, AWS, GCP, etc. MX Validation is used instead as the primary check.
        // If exact mailbox ping is needed, usually a third-party API or proxy VPS is needed.

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
