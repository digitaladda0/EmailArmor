const http = require('http');
const dns = require('dns').promises;
const net = require('net');

const PORT = 3000;

// Basic SMTP Handshake logic
async function checkSMTP(mxHost, email) {
    return new Promise((resolve) => {
        const socket = net.createConnection(25, mxHost);
        let step = 0;
        let result = false;

        socket.setTimeout(5000);

        socket.on('data', (data) => {
            const response = data.toString();
            if (step === 0 && response.startsWith('220')) {
                socket.write(`HELO emailarmor.ai\r\n`);
                step++;
            } else if (step === 1 && response.startsWith('250')) {
                socket.write(`MAIL FROM:<verify@emailarmor.ai>\r\n`);
                step++;
            } else if (step === 2 && response.startsWith('250')) {
                socket.write(`RCPT TO:<${email}>\r\n`);
                step++;
            } else if (step === 3) {
                if (response.startsWith('250')) {
                    result = true;
                }
                socket.write(`QUIT\r\n`);
                socket.end();
            }
        });

        socket.on('error', () => { socket.destroy(); resolve(false); });
        socket.on('timeout', () => { socket.destroy(); resolve(false); });
        socket.on('end', () => { resolve(result); });
    });
}

const server = http.createServer(async (req, res) => {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/api/validate') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                const { email } = JSON.parse(body);
                if (!email || !email.includes('@')) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ valid: false, reason: 'Invalid syntax' }));
                    return;
                }

                const domain = email.split('@')[1];
                const mxRecords = await dns.resolveMx(domain);
                if (!mxRecords || mxRecords.length === 0) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ valid: false, reason: 'No MX records found' }));
                    return;
                }

                mxRecords.sort((a, b) => a.priority - b.priority);
                const bestMx = mxRecords[0].exchange;
                const smtpValid = await checkSMTP(bestMx, email);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                    valid: smtpValid, 
                    reason: smtpValid ? null : 'Recipient rejected by server',
                    mx: bestMx 
                }));

            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ valid: false, reason: 'DNS or connection error' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`EmailArmor Validator Backend (Zero-Dep) running on http://localhost:${PORT}`);
});
