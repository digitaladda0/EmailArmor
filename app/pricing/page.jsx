export default function Pricing() {
    return (
        <main>
            <section className="section hero">
                <div className="container">
                    <div className="text-center mb-4">
                        <h1 className="mb-1 animate-on-scroll visible">Transparent <span className="gradient-text">Pricing</span></h1>
                        <p className="text-dim animate-on-scroll visible" style={{fontSize: '1.25rem'}}>Choose the plan that fits your growth. No hidden fees, no setup costs.</p>
                    </div>
    
                    <div className="grid grid-3">
                        {/* Basic */}
                        <div className="glass-card pricing-card">
                            <h3>Starter</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.9rem'}}>For small senders</p>
                            <div className="price">$0<span>/mo</span></div>
                            <ul className="pricing-features">
                                <li><span className="check">✔</span> 100 Free Credits /mo</li>
                                <li><span className="check">✔</span> Real-time API Access</li>
                                <li><span className="check">✔</span> Syntax & Domain Check</li>
                                <li><span className="check">✔</span> Community Support</li>
                            </ul>
                            <a href="/app" className="btn glass-card" style={{textAlign: 'center', width: '100%'}}>Get Started</a>
                        </div>
                        {/* Pro */}
                        <div className="glass-card pricing-card featured">
                            <div className="featured-label">MOST POPULAR</div>
                            <h3>Pro</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.9rem'}}>For scaling businesses</p>
                            <div className="price">$49<span>/mo</span></div>
                            <ul className="pricing-features">
                                <li><span className="check">✔</span> 10,000 Credits /mo</li>
                                <li><span className="check">✔</span> All Starter Features</li>
                                <li><span className="check">✔</span> Spam Trap Detection</li>
                                <li><span className="check">✔</span> Priority Email Support</li>
                                <li><span className="check">✔</span> Bulk List Cleaning</li>
                            </ul>
                            <a href="/app" className="btn btn-primary" style={{textAlign: 'center', width: '100%'}}>Upgrade to Pro</a>
                        </div>
                        {/* Enterprise */}
                        <div className="glass-card pricing-card">
                            <h3>Enterprise</h3>
                            <p style={{color: 'var(--text-dim)', fontSize: '0.9rem'}}>For high-volume needs</p>
                            <div className="price">Custom</div>
                            <ul className="pricing-features">
                                <li><span className="check">✔</span> Unlimited Credits</li>
                                <li><span className="check">✔</span> Dedicated Infrastructure</li>
                                <li><span className="check">✔</span> 24/7 Phone Support</li>
                                <li><span className="check">✔</span> Custom Retries & Timeouts</li>
                                <li><span className="check">✔</span> SLA Guarantee</li>
                            </ul>
                            <a href="/contact" className="btn glass-card" style={{textAlign: 'center', width: '100%'}}>Contact Sales</a>
                        </div>
                    </div>
                </div>
            </section>
    
            {/* FAQ Section */}
            <section className="section" style={{background: 'var(--bg-dark)'}}>
                <div className="container" style={{maxWidth: '800px'}}>
                    <h2 className="text-center mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
                    <div className="flex-column gap-2">
                        <div className="glass-card animate-on-scroll visible">
                            <h4 className="mb-1">How do credits work?</h4>
                            <p className="text-dim">One credit is consumed for every email address verified. Unused credits don't roll over on monthly plans, but stay forever on "Pay-As-You-Go" top-ups.</p>
                        </div>
                        <div className="glass-card animate-on-scroll visible">
                            <h4 className="mb-1">Is my data secure?</h4>
                            <p className="text-dim">Absolutely. We use 256-bit encryption for all data transfers and are fully GDPR/SOC2 compliant. We never store the actual email list content after processing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
