document.addEventListener('DOMContentLoaded', () => {
    const validateBtn = document.getElementById('validateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const emailInput = document.getElementById('emailInput');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const resultsSection = document.getElementById('resultsSection');
    const resultsTable = document.getElementById('resultsTable');
    const validCountEl = document.getElementById('validCount');
    const invalidCountEl = document.getElementById('invalidCount');

    let validEmails = [];
    let processing = false;

    validateBtn.addEventListener('click', async () => {
        if (processing) return;
        
        const text = emailInput.value.trim();
        if (!text) return;

        // Parse emails
        let emails = text.split(/[\n,]/).map(e => e.trim()).filter(e => e !== "");
        
        // 100 Limit Check
        if (emails.length > 100) {
            alert("Limit exceeded! You can only validate up to 100 emails at a time.");
            emails = emails.slice(0, 100);
        }

        processing = true;
        validateBtn.disabled = true;
        validateBtn.innerText = "Processing...";
        progressContainer.style.display = "block";
        resultsSection.style.display = "block";
        resultsTable.innerHTML = "";
        validEmails = [];
        let validCount = 0;
        let invalidCount = 0;

        for (let i = 0; i < emails.length; i++) {
            const email = emails[i];
            const progress = ((i + 1) / emails.length) * 100;
            progressBar.style.width = `${progress}%`;

            try {
                // Determine API URL based on environment (Localhost vs Vercel Production)
                const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                    ? 'http://localhost:3000/api/validate' 
                    : '/api/validate';

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });

                const data = await response.json();

                const row = document.createElement('tr');
                row.style.borderBottom = "1px solid var(--glass-border)";
                
                const statusHtml = data.valid 
                    ? `<span class="status-badge status-valid">VALID</span>`
                    : `<span class="status-badge status-invalid">INVALID</span>`;
                
                const detail = data.valid ? `MX: ${data.mx}` : data.reason;

                row.innerHTML = `
                    <td style="padding: 1rem;">${email}</td>
                    <td style="padding: 1rem;">${statusHtml}</td>
                    <td style="padding: 1rem; color: var(--text-dim); font-size: 0.85rem;">${detail}</td>
                `;
                resultsTable.prepend(row);

                if (data.valid) {
                    validCount++;
                    validEmails.push(email);
                    validCountEl.innerText = validCount;
                } else {
                    invalidCount++;
                    invalidCountEl.innerText = invalidCount;
                }

            } catch (error) {
                console.error("API Error:", error);
                // Handle offline or server error
            }
        }

        processing = false;
        validateBtn.disabled = false;
        validateBtn.innerText = "Start Deep Validation";
        if (validEmails.length > 0) {
            downloadBtn.style.display = "block";
        }
    });

    downloadBtn.addEventListener('click', () => {
        const csvContent = "data:text/csv;charset=utf-8,Email\n" + validEmails.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "valid_emails_report.csv");
        document.body.appendChild(link);
        link.click();
    });
});
