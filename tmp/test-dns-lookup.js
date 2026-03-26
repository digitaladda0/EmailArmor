const dns = require('dns').promises;

async function test() {
    console.log("Testing dns.lookup (System Native)...");
    try {
        const result = await dns.lookup('google.com');
        console.log("[PASS] google.com Lookup:", result.address);
    } catch (e) {
        console.log("[FAIL] google.com Lookup Error:", e.code, e.message);
    }
}

test();
