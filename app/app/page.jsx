"use client";

import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

export default function App() {
    const { data: session, status } = useSession();
    const [emailsText, setEmailsText] = useState('');
    const [processing, setProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [results, setResults] = useState([]);
    const [validEmails, setValidEmails] = useState([]);

    const handleValidate = async () => {
        if (processing) return;
        
        setProcessingError(''); // Clear any previous errors

        const text = emailsText.trim();
        if (!text) return;

        let emails = text.split(/[\n,]/).map(e => e.trim()).filter(e => e !== "");
        
        if (emails.length > 500) {
            setProcessingError('You can only validate up to 500 emails at a time! Please split your list.');
            setProcessing(false);
            return;
        }

        setProcessing(true);
        setResults([]);
        setValidEmails([]);
        setProgress(0);

        let currentValid = [];
        let currentResults = [];

        for (let i = 0; i < emails.length; i++) {
            const email = emails[i];
            const currentProgress = ((i + 1) / emails.length) * 100;
            setProgress(currentProgress);

            try {
                // Determine API URL based on environment (Localhost vs Vercel Production)
                const apiUrl = '/api/validate';

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });

                const data = await response.json();

                const newResult = {
                    email,
                    valid: data.valid,
                    detail: data.valid ? `MX: ${data.mx}` : data.reason
                };

                currentResults = [newResult, ...currentResults];
                setResults(currentResults);

                if (data.valid) {
                    currentValid = [...currentValid, email];
                    setValidEmails(currentValid);
                }

            } catch (error) {
                console.error("API Error:", error);
                
                const errorResult = {
                    email,
                    valid: false,
                    isError: true,
                    detail: "Connection failed"
                };

                currentResults = [errorResult, ...currentResults];
                setResults(currentResults);
            }
        }

        setProcessing(false);
    };

    const handleDownload = () => {
        const csvContent = "data:text/csv;charset=utf-8,Email\n" + validEmails.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "valid_emails_report.csv");
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const validCount = validEmails.length;
    const invalidCount = results.length - validCount;

    if (status === "loading") {
        return (
            <main className="app-container section hero mt-3">
                <div className="container" style={{maxWidth: '900px', textAlign: 'center'}}>
                    <p className="text-dim">Loading session...</p>
                </div>
            </main>
        );
    }

    if (status === "unauthenticated") {
        return (
            <main className="app-container section hero mt-3">
                <div className="container" style={{maxWidth: '900px'}}>
                    <div className="validator-box animate-on-scroll visible text-center">
                        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔒</div>
                        <h1 className="mb-1">Authentication <span className="gradient-text">Required</span></h1>
                        <p className="text-dim mb-2 text-md">
                            You must be signed in to access the Enterprise Batch Validator.
                        </p>
                        <button 
                            onClick={() => signIn('google')} 
                            className="btn btn-primary mt-2"
                        >
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="app-container section hero mt-3">
            <div className="container" style={{maxWidth: '900px'}}>
                <div className="validator-box animate-on-scroll visible">
                    <div className="flex" style={{justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                        <h1 className="mb-1" style={{margin: 0}}>Batch <span className="gradient-text">Validator</span></h1>
                        <div className="flex gap-1 align-center">
                            <img 
                                src={session.user?.image || '/logo.png'} 
                                alt="User Avatar" 
                                style={{width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--glass-border)'}} 
                            />
                            <span className="text-dim" style={{fontSize: '0.9rem'}}>{session.user?.name}</span>
                            <button 
                                onClick={() => signOut()} 
                                className="btn glass-card" 
                                style={{padding: '0.4rem 0.8rem', fontSize: '0.8rem'}}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                    <p className="text-dim mb-2">Paste up to 500 emails to verify (one per line or comma separated).</p>
                    
                    <textarea 
                        value={emailsText}
                        onChange={(e) => setEmailsText(e.target.value)}
                        placeholder="user1@example.com&#10;user2@gmail.com..."
                        style={{
                            width: '100%', height: '200px', background: 'rgba(0,0,0,0.2)',
                            border: '1px solid var(--glass-border)', borderRadius: '12px',
                            color: 'white', padding: '1.5rem', fontFamily: 'inherit',
                            marginBottom: '2rem', resize: 'none'
                        }}
                    />
                    
                    {processing && (
                        <div className="progress-container" style={{display: 'block'}}>
                            <div className="progress-bar" style={{width: `${progress}%`}}></div>
                        </div>
                    )}

                    <div className="flex" style={{gap: '1rem', alignItems: 'center'}}>
                        <button 
                            onClick={handleValidate} 
                            disabled={processing}
                            className="btn btn-primary" 
                            style={{flex: 1, borderRadius: '16px'}}
                        >
                            {processing ? 'Processing...' : 'Start Deep Validation'}
                        </button>
                        {!processing && validEmails.length > 0 && (
                            <button 
                                onClick={handleDownload}
                                className="btn glass-card" 
                                style={{borderRadius: '16px'}}
                            >
                                Download Valid CSV
                            </button>
                        )}
                    </div>
                </div>

                {results.length > 0 && (
                    <div id="resultsSection">
                        <div className="grid grid-2 mt-3">
                            <div className="glass-card text-center">
                                <h4 className="text-dim">VALID</h4>
                                <div style={{fontSize: '3.5rem', fontWeight: 800, color: '#4ade80'}}>
                                    {validCount}
                                </div>
                            </div>
                            <div className="glass-card text-center">
                                <h4 className="text-dim">INVALID</h4>
                                <div style={{fontSize: '3.5rem', fontWeight: 800, color: '#f87171'}}>
                                    {invalidCount}
                                </div>
                            </div>
                        </div>

                        <div className="glass-card mt-2 p-0" style={{padding: 0, overflow: 'hidden'}}>
                            <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
                                <thead style={{background: 'rgba(255,255,255,0.02)'}}>
                                    <tr style={{borderBottom: '1px solid var(--glass-border)'}}>
                                        <th style={{padding: '1.5rem 1rem'}}>Email</th>
                                        <th style={{padding: '1.5rem 1rem'}}>Status</th>
                                        <th style={{padding: '1.5rem 1rem'}}>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((res, index) => (
                                        <tr key={index} style={{borderBottom: '1px solid var(--glass-border)'}}>
                                            <td style={{padding: '1rem'}}>{res.email}</td>
                                            <td style={{padding: '1rem'}}>
                                                {res.valid ? (
                                                    <span className="status-badge status-valid">VALID</span>
                                                ) : res.isError ? (
                                                    <span className="status-badge status-invalid">ERROR</span>
                                                ) : (
                                                    <span className="status-badge status-invalid">INVALID</span>
                                                )}
                                            </td>
                                            <td style={{padding: '1rem', color: 'var(--text-dim)', fontSize: '0.85rem'}}>
                                                {res.detail}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            {/* Adding inline styles that were present in app.html */}
            <style dangerouslySetInnerHTML={{__html: `
                .status-badge {
                    padding: 0.3rem 0.8rem;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: 700;
                }
                .status-valid { background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); }
                .status-invalid { background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }
                .progress-container {
                    height: 8px;
                    background: rgba(0,0,0,0.3);
                    border-radius: 4px;
                    margin-bottom: 2rem;
                    overflow: hidden;
                    border: 1px solid var(--glass-border);
                }
                .progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, var(--primary), var(--secondary));
                    transition: width 0.3s ease;
                    box-shadow: 0 0 10px var(--primary);
                }
            `}} />
        </main>
    );
}
