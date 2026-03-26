const dns = require('dns').promises;

async function test() {
    const domains = ['google.com', 'godaddy.com', 'outlook.com'];
    for (const domain of domains) {
        try {
            console.log(`Testing ${domain}...`);
            const mx = await dns.resolveMx(domain);
            console.log(`[PASS] ${domain} MX:`, mx.length, "records found.");
        } catch (e) {
            console.log(`[FAIL] ${domain} MX Error:`, e.code, e.message);
            try {
                const a = await dns.resolve4(domain);
                console.log(`[PASS] ${domain} A:`, a.length, "records found.");
            } catch (aE) {
                console.log(`[FAIL] ${domain} A Error:`, aE.code, aE.message);
            }
        }
    }
}

test();
