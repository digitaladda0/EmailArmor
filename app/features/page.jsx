export default function Features() {
    return (
        <main>
            <section className="section hero">
                <div className="container">
                    <div className="text-center mb-4">
                        <h1 className="mb-1 animate-on-scroll visible">Powerful <span className="gradient-text">Verification</span> Stack</h1>
                        <p className="text-dim animate-on-scroll visible" style={{fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto'}}>
                            We go beyond simple syntax checks. Our multi-layered approach ensures the highest accuracy in the industry.
                        </p>
                    </div>
    
                    <div className="grid grid-3">
                        <div className="glass-card">
                            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🛡️</div>
                            <h3>SMTP Verification</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '1rem'}}>
                                Directly pinging mail servers to confirm mailbox existence without sending actual emails.
                            </p>
                        </div>
                        <div className="glass-card">
                            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🕵️</div>
                            <h3>Domain Validation</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '1rem'}}>
                                Real-time DNS & MX record lookup to ensure the destination server is configured to receive mail.
                            </p>
                        </div>
                        <div className="glass-card">
                            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🚫</div>
                            <h3>Spam Trap Detection</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '1rem'}}>
                                Identifying 'honeypot' addresses that exist solely to catch and black-list spammers.
                            </p>
                        </div>
                        <div className="glass-card">
                            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>⚡</div>
                            <h3>Syntax Analytics</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '1rem'}}>
                                Rigorous RFC compliance checking to catch malformatted emails before they leave your system.
                            </p>
                        </div>
                        <div className="glass-card">
                            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🗂️</div>
                            <h3>Role-Based Detection</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '1rem'}}>
                                Filtering out admin@, support@, and info@ addresses that lead to poor engagement rates.
                            </p>
                        </div>
                        <div className="glass-card">
                            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🗑️</div>
                            <h3>Disposable filtering</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '1rem'}}>
                                Instantly detecting temporary, burner, and throwaway email accounts from 5,000+ providers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    
            {/* Technical Deep Dive */}
            <section className="section" style={{background: 'var(--bg-dark)'}}>
                <div className="container grid grid-2 align-center">
                    <div className="deep-dive-image animate-on-scroll visible">
                        <img src="/hero.png" alt="EmailArmor core engine visualization" />
                    </div>
                    <div className="deep-dive-content animate-on-scroll visible">
                        <h2 className="mb-1">How EmailArmor <span className="gradient-text">Protects</span> Your IP</h2>
                        <p className="text-dim mb-2">
                            Sending to invalid addresses triggers ISP filters. Too many bounces can land your IP on a global blacklist, tanking your marketing ROI forever. 
                        </p>
                        <ul style={{color: 'var(--text-light)'}}>
                            <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                <span style={{color: 'var(--primary)'}}>✔</span> Reduce bounce rates by up to 98%
                            </li>
                            <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                <span style={{color: 'var(--primary)'}}>✔</span> Protect sender reputation and IP health
                            </li>
                            <li style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                <span style={{color: 'var(--primary)'}}>✔</span> Maximize email marketing deliverability
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
