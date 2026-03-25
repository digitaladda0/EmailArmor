export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="section" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Background Glows */}
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%)', filter: 'blur(100px)', zIndex: '-1' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 60%)', filter: 'blur(100px)', zIndex: '-1' }}></div>

                <div className="container grid grid-2 align-center">
                    {/* Left Copy */}
                    <div className="hero-content animate-on-scroll visible">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1.2rem', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '30px', color: 'white', fontSize: '0.9rem', marginBottom: '2rem', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}></span>
                            Next-Generation Email Intelligence v2.0
                        </div>
                        <h1 className="mb-2" style={{ fontSize: 'clamp(3.5rem, 5vw, 5.5rem)', lineHeight: '1.05', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            Never Send to a <br/><span className="gradient-text">Dead Email</span> Again.
                        </h1>
                        <p className="text-dim mb-3" style={{ fontSize: '1.25rem', maxWidth: '95%', lineHeight: '1.6' }}>
                            Protect your sender reputation effortlessly. Our military-grade verification engine detects spam traps, soft bounces, and dead MX records in milliseconds.
                        </p>
                        <div className="flex gap-1 align-center">
                            <a href="/register" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem', borderRadius: '14px' }}>Start Validating Free</a>
                            <a href="/features" className="btn btn-outline" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem', borderRadius: '14px' }}>Watch Demo</a>
                        </div>
                        
                        <div className="mt-3 flex gap-2 align-center">
                            <div className="flex align-center gap-1">
                                <span style={{ fontSize: '1.5rem', color: 'var(--success)', textShadow: '0 0 10px var(--success)' }}>✓</span>
                                <span className="text-dim" style={{ fontSize: '0.95rem' }}>99.99% Accuracy</span>
                            </div>
                            <div className="flex align-center gap-1">
                                <span style={{ fontSize: '1.5rem', color: 'var(--success)', textShadow: '0 0 10px var(--success)' }}>✓</span>
                                <span className="text-dim" style={{ fontSize: '0.95rem' }}>SOC2 Certified</span>
                            </div>
                            <div className="flex align-center gap-1">
                                <span style={{ fontSize: '1.5rem', color: 'var(--success)', textShadow: '0 0 10px var(--success)' }}>✓</span>
                                <span className="text-dim" style={{ fontSize: '0.95rem' }}>Next.js Powered</span>
                            </div>
                        </div>

                        <div className="mt-2" style={{ padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'inline-block' }}>
                            <div className="text-dim" style={{fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem'}}>Active Registry</div>
                            <div style={{color: 'white', fontWeight: '800', fontSize: '1.3rem'}}>Monitoring <span className="gradient-text">5.4M+</span> Domains</div>
                        </div>
                    </div>
                    
                    {/* Right Visuals */}
                    <div className="hero-image animate-on-scroll visible" style={{ position: 'relative', paddingLeft: '2rem' }}>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)', zIndex: '-1', filter: 'blur(50px)' }}></div>
                        
                        {/* Main Glass Mockup */}
                        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(20,20,30,0.6)', transform: 'rotateY(-5deg) rotateX(5deg) scale(1.05)', transformStyle: 'preserve-3d', perspective: '1000px', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
                            {/* Fake macOS Header */}
                            <div className="flex align-center gap-1" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--glass-border)' }}>
                                <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444'}}></div>
                                <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b'}}></div>
                                <div style={{width: '12px', height: '12px', borderRadius: '50%', background: '#10b981'}}></div>
                                <div style={{marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'monospace'}}>emailarmor-api-stream.sh</div>
                            </div>
                            
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {/* Animated rows */}
                                <div className="flex justify-between align-center" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--glass-border)' }}>
                                    <div className="flex align-center gap-1">
                                        <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)'}}>OK</div>
                                        <span style={{ color: 'white', fontSize: '0.95rem', fontFamily: 'monospace' }}>ceo@microsoft.com</span>
                                    </div>
                                    <span className="status-valid" style={{ fontSize: '0.75rem' }}>VALID • MX PASSED</span>
                                </div>

                                <div className="flex justify-between align-center" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--glass-border)' }}>
                                    <div className="flex align-center gap-1">
                                        <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--danger)'}}>NO</div>
                                        <span style={{ color: 'white', fontSize: '0.95rem', fontFamily: 'monospace' }}>sales@temp-throwaway.net</span>
                                    </div>
                                    <span className="status-invalid" style={{ fontSize: '0.75rem' }}>INVALID • SPAM TRAP</span>
                                </div>

                                <div className="flex justify-between align-center" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--glass-border)' }}>
                                    <div className="flex align-center gap-1">
                                        <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)'}}>OK</div>
                                        <span style={{ color: 'white', fontSize: '0.95rem', fontFamily: 'monospace' }}>engineering@vercel.com</span>
                                    </div>
                                    <span className="status-valid" style={{ fontSize: '0.75rem' }}>VALID • MX PASSED</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Social Proof / Trusted By */}
            <section className="section" style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', padding: '4rem 0' }}>
                <div className="container text-center">
                    <p className="text-dim mb-2" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: '600' }}>Trusted by forward-thinking marketing teams</p>
                    <div className="flex justify-center align-center gap-3" style={{ flexWrap: 'wrap', opacity: '0.5', filter: 'grayscale(100%)' }}>
                        <h3 style={{ margin: '0 1rem', display: 'flex', alignItems: 'center', gap: '5px' }}>Acme Corp</h3>
                        <h3 style={{ margin: '0 1rem', display: 'flex', alignItems: 'center', gap: '5px' }}>GlobalTech</h3>
                        <h3 style={{ margin: '0 1rem', display: 'flex', alignItems: 'center', gap: '5px' }}>Nexus Dynamics</h3>
                        <h3 style={{ margin: '0 1rem', display: 'flex', alignItems: 'center', gap: '5px' }}>Stark Industries</h3>
                    </div>
                </div>
            </section>

            {/* Data & Trust Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-3">
                        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '20px', color: 'var(--success)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            Data-Driven Accuracy
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Eliminate <span className="gradient-text">99% of Bounces</span> Instantly</h2>
                        <p className="text-dim mt-1" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Sending marketing campaigns to dead or toxic emails destroys your domain reputation. EmailArmor uses real-time SMTP handshakes to verify inbox existence without ever sending an email.
                        </p>
                    </div>

                    <div className="grid grid-3">
                        <div className="glass-card text-center animate-on-scroll visible">
                            <div style={{ width: '60px', height: '60px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--danger)', fontSize: '1.5rem' }}>🛑</div>
                            <h3 className="mb-1">Spam Trap Detection</h3>
                            <p className="text-dim" style={{ fontSize: '0.95rem' }}>We cross-reference against heavily guarded databases of known spam traps and honeypots to definitively keep you off global blacklists.</p>
                        </div>
                        <div className="glass-card text-center animate-on-scroll visible">
                            <div style={{ width: '60px', height: '60px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--warning)', fontSize: '1.5rem' }}>🗑️</div>
                            <h3 className="mb-1">Disposable Burners</h3>
                            <p className="text-dim" style={{ fontSize: '0.95rem' }}>Automatically detect and block temporary, throwaway, and toxic email addresses commonly used by dead end leads and bots.</p>
                        </div>
                        <div className="glass-card text-center animate-on-scroll visible">
                            <div style={{ width: '60px', height: '60px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', color: 'var(--success)', fontSize: '1.5rem' }}>⚡</div>
                            <h3 className="mb-1">Live Verification</h3>
                            <p className="text-dim" style={{ fontSize: '0.95rem' }}>We mathematically ping the recipient's exact mail server in real-time to identically confirm the specific inbox exists and can receive mail.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial / Social Proof */}
            <section className="section" style={{ background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)' }}>
                <div className="container text-center">
                    <h2 className="mb-3" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>What our customers say</h2>
                    <div className="glass-card animate-on-scroll visible" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '10px', left: '20px', fontSize: '4rem', color: 'rgba(255,255,255,0.05)', fontFamily: 'serif' }}>"</span>
                        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8', position: 'relative', zIndex: '1' }}>
                            "Before EmailArmor, our B2B cold outreach campaigns were hitting 15% hard bounce rates. We got blacklisted by Google Workspace twice. Since integrating their validation API, our bounce rate is consistently under 0.5%, and our open rates have skyrocketed to 45%."
                        </p>
                        <div className="flex align-center justify-center gap-1">
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}></div>
                            <div style={{ textAlign: 'left' }}>
                                <h4 style={{ margin: 0 }}>Sarah Jenkins</h4>
                                <p className="text-dim" style={{ fontSize: '0.85rem', margin: 0 }}>VP of Marketing, GlobalTech Software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ paddingBottom: '8rem' }}>
                <div className="container text-center">
                    <div className="glass-card animate-on-scroll visible" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.15))', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <h2 className="mb-1" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>Ready to clean your email list?</h2>
                        <p className="text-dim mb-3" style={{ fontSize: '1.1rem' }}>Join 10,000+ businesses protecting their domain reputation today. No credit card required.</p>
                        <a href="/register" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderRadius: '14px' }}>Create Free Account</a>
                    </div>
                </div>
            </section>

        </main>
    );
}
