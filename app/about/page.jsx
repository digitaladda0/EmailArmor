export default function About() {
    return (
        <main>
            {/* About Hero */}
            <section className="section hero text-center">
                <div className="container">
                    <div style={{maxWidth: '800px', margin: '0 auto'}}>
                        <h1 className="mb-1 animate-on-scroll visible">Mission: Eliminate <span className="gradient-text">Communication</span> Barriers.</h1>
                        <p className="text-dim animate-on-scroll visible" style={{fontSize: '1.25rem'}}>
                            Founded in 2024, EmailArmor was born out of a simple frustration: seeing valid businesses throttled by ISPs due to outdated or dirty email lists. We built the armor every marketer needs to protect their reputation.
                        </p>
                    </div>
                </div>
            </section>
    
            {/* Vision/Values */}
            <section className="section" style={{background: 'var(--bg-dark)'}}>
                <div className="container grid grid-3">
                    <div className="glass-card text-center animate-on-scroll visible">
                        <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>🎯</div>
                        <h3>Integrity First</h3>
                        <p className="text-dim mt-1">We provide transparent, honest data. If we aren't 99.9% sure, we tell you.</p>
                    </div>
                    <div className="glass-card text-center animate-on-scroll visible">
                        <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>🚀</div>
                        <h3>Speed at Scale</h3>
                        <p className="text-dim mt-1">Our infrastructure handles billions of checks without breaking a sweat.</p>
                    </div>
                    <div className="glass-card text-center animate-on-scroll visible">
                        <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>🔒</div>
                        <h3>Privacy Centric</h3>
                        <p className="text-dim mt-1">Data privacy isn't a feature; it's our core foundation.</p>
                    </div>
                </div>
            </section>
    
            {/* The Team */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-4">Meet the <span className="gradient-text">Architects</span></h2>
                    <div className="grid grid-3">
                        <div className="glass-card p-0 text-center team-member animate-on-scroll visible" style={{padding: 0, overflow: 'hidden'}}>
                            <img src="/hero.png" alt="Founder" style={{filter: 'grayscale(0.5)'}} />
                            <div style={{padding: '1.5rem'}}>
                                <h4>Alex Sterling</h4>
                                <p style={{color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600}}>CEO & Founder</p>
                            </div>
                        </div>
                        <div className="glass-card p-0 text-center team-member animate-on-scroll visible" style={{padding: 0, overflow: 'hidden'}}>
                            <img src="/hero.png" alt="CTO" style={{filter: 'hue-rotate(90deg) grayscale(0.2)'}} />
                            <div style={{padding: '1.5rem'}}>
                                <h4>Sarah Chen</h4>
                                <p style={{color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600}}>Chief Architect</p>
                            </div>
                        </div>
                        <div className="glass-card p-0 text-center team-member animate-on-scroll visible" style={{padding: 0, overflow: 'hidden'}}>
                            <img src="/hero.png" alt="COO" style={{filter: 'hue-rotate(180deg) grayscale(0.2)'}} />
                            <div style={{padding: '1.5rem'}}>
                                <h4>Marcus Vane</h4>
                                <p style={{color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600}}>Operations Lead</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
