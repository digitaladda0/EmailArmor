const net = require('net');
const dnsSync = require('dns');
dnsSync.setServers(['8.8.8.8', '1.1.1.1']);
const dns = dnsSync.promises;

async function diagnose(domain, email) {
    console.log(`--- Diagnosing ${domain} (${email}) ---`);
    try {
        const mxRecords = await dns.resolveMx(domain);
        if (!mxRecords || mxRecords.length === 0) {
            console.log(`No MX records for ${domain}`);
            return;
        }
        mxRecords.sort((a, b) => a.priority - b.priority);
        const bestMx = mxRecords[0].exchange;
        console.log(`Using MX: ${bestMx}`);

        return new Promise((resolve) => {
            const socket = net.createConnection(25, bestMx);
            let step = 0;
            socket.setTimeout(10000);

            socket.on('data', (data) => {
                const response = data.toString();
                console.log(`S: ${response.trim().replace(/\n/g, '\nS: ')}`);
                
                if (step === 0 && response.includes('220')) {
                    console.log(`C: EHLO emailarmor.ai`);
                    socket.write(`EHLO emailarmor.ai\r\n`);
                    step++;
                } else if (step === 1 && (response.includes('250'))) {
                    // EHLO might return multiple lines, wait for the last one (usually space after 250)
                    if (response.split('\n').some(line => line.startsWith('250 '))) {
                        console.log(`C: MAIL FROM:<verify@emailarmor.ai>`);
                        socket.write(`MAIL FROM:<verify@emailarmor.ai>\r\n`);
                        step++;
                    }
                } else if (step === 2 && response.includes('250')) {
                    console.log(`C: RCPT TO:<${email}>`);
                    socket.write(`RCPT TO:<${email}>\r\n`);
                    step++;
                } else if (step === 3) {
                    console.log(`C: QUIT`);
                    socket.write(`QUIT\r\n`);
                    socket.end();
                    resolve();
                }
            });

            socket.on('error', (err) => {
                console.log(`Socket Error: ${err.message}`);
                resolve();
            });
            socket.on('timeout', () => {
                console.log(`Socket Timeout`);
                socket.destroy();
                resolve();
            });
        });
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

async function run() {
    await diagnose('totallyworthit.com', 'info@totallyworthit.com');
    await diagnose('gmail.com', 'nonexistent_test_12345@gmail.com');
}

run();
