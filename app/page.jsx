export default function Home() {
    return (
      <main>
          {/* Hero Section */}
          <section className="hero section">
              <div className="container grid grid-2 hero-container align-center">
                  <div className="hero-content">
                      <h1 className="animate-on-scroll visible">
                          Secure Your <span className="gradient-text">Deliverability</span> with Precision.
                      </h1>
                      <p className="animate-on-scroll visible">
                          EmailArmor filters out invalid, risky, and disposable addresses in real-time. Ensure your messages reach real humans, every time.
                      </p>
                      <div className="hero-cta flex gap-2 animate-on-scroll mt-2 visible">
                          <a href="/app" className="btn btn-primary">Start Free Trial</a>
                          <a href="/features" className="btn glass-card">Explore Features</a>
                      </div>
                  </div>
                  <div className="hero-image animate-on-scroll visible">
                      <img src="/hero.png" alt="EmailArmor Dashboard Visualization" />
                  </div>
              </div>
          </section>
  
          {/* Stats Section */}
          <section className="stats section" style={{background: 'var(--bg-dark)'}}>
              <div className="container grid grid-4 stats-grid">
                  <div className="stat-card glass-card">
                      <h3>99.9%</h3>
                      <p>Accuracy Rate</p>
                  </div>
                  <div className="stat-card glass-card">
                      <h3>2B+</h3>
                      <p>Emails Verified</p>
                  </div>
                  <div className="stat-card glass-card">
                      <h3>{'< 100ms'}</h3>
                      <p>API Latency</p>
                  </div>
                  <div className="stat-card glass-card">
                      <h3>15k+</h3>
                      <p>Happy Clients</p>
                  </div>
              </div>
          </section>
  
          {/* Validation Context */}
          <section className="section">
              <div className="container grid grid-2 align-center">
                  <div className="animate-on-scroll visible">
                      <h2 className="mb-1">The True Cost of <span className="gradient-text">Bad Data</span></h2>
                      <p className="text-dim mb-2 text-md">
                          Every invalid email you send damages your sender reputation. ISPs and spam filters heavily penalize high bounce rates, which can tank your open rates across your entire list.
                      </p>
                      <p className="text-dim text-md">
                          EmailArmor intercepts these threats before you hit send, ensuring your actual customers always see your messages.
                      </p>
                  </div>
                  <div className="grid grid-2 animate-on-scroll visible">
                      <div className="glass-card" style={{padding: '1.5rem'}}>
                          <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🚫</div>
                          <h4 className="mb-1">Hard Bounces</h4>
                          <p className="text-dim" style={{fontSize: '0.9rem'}}>Non-existent mailboxes that ruin deliverability.</p>
                      </div>
                      <div className="glass-card" style={{padding: '1.5rem'}}>
                          <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🗑️</div>
                          <h4 className="mb-1">Spam Traps</h4>
                          <p className="text-dim" style={{fontSize: '0.9rem'}}>Honeypots designed to catch and blacklist senders.</p>
                      </div>
                      <div className="glass-card" style={{padding: '1.5rem'}}>
                          <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>⏱️</div>
                          <h4 className="mb-1">Disposables</h4>
                          <p className="text-dim" style={{fontSize: '0.9rem'}}>Temporary addresses that lead to zero engagement.</p>
                      </div>
                      <div className="glass-card" style={{padding: '1.5rem'}}>
                          <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🗂️</div>
                          <h4 className="mb-1">Role-Based</h4>
                          <p className="text-dim" style={{fontSize: '0.9rem'}}>admin@ or support@ emails that don't buy products.</p>
                      </div>
                  </div>
              </div>
          </section>
  
          {/* Enterprise Security */}
          <section className="section" style={{background: 'var(--bg-dark)'}}>
              <div className="container">
                  <div className="text-center mb-4 animate-on-scroll visible">
                      <h2 className="mb-1">Enterprise-Grade <span className="gradient-text">Security</span></h2>
                      <p className="text-dim" style={{fontSize: '1.1rem'}}>Your data privacy and compliance is our core foundation, not an afterthought.</p>
                  </div>
                  <div className="grid grid-3">
                      <div className="glass-card animate-on-scroll text-center visible">
                          <div style={{fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem'}}>🛡️</div>
                          <h4 className="mb-1">GDPR Compliant</h4>
                          <p className="text-dim" style={{fontSize: '0.95rem'}}>Fully compliant with the strict European Union data protection regulations.</p>
                      </div>
                      <div className="glass-card animate-on-scroll text-center visible">
                          <div style={{fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem'}}>📑</div>
                          <h4 className="mb-1">SOC 2 Type II</h4>
                          <p className="text-dim" style={{fontSize: '0.95rem'}}>Rigorous third-party auditing guarantees our infrastructure is deeply secure.</p>
                      </div>
                      <div className="glass-card animate-on-scroll text-center visible">
                          <div style={{fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem'}}>👻</div>
                          <h4 className="mb-1">Zero Data Retention</h4>
                          <p className="text-dim" style={{fontSize: '0.95rem'}}>We hash, process, and immediately discard your lists. We never store them.</p>
                      </div>
                  </div>
              </div>
          </section>
  
          {/* Trust Section */}
          <section className="trust section">
              <div className="container">
                  <p className="text-center text-dim mb-3" style={{textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600}}>Trusted by industry leaders</p>
                  <div className="logos flex-center" style={{gap: '4rem', opacity: 0.5, filter: 'grayscale(1)', transition: 'opacity 0.3s', cursor: 'default'}}>
                      <span style={{fontSize: '1.5rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif"}}>TECHCORP</span>
                      <span style={{fontSize: '1.5rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif"}}>DATAFLOW</span>
                      <span style={{fontSize: '1.5rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif"}}>NEXUS</span>
                      <span style={{fontSize: '1.5rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif"}}>CLOUDLY</span>
                  </div>
              </div>
          </section>
  
          {/* Social Proof / Testimonials */}
          <section className="section" style={{paddingTop: 0}}>
              <div className="container">
                  <div className="text-center mb-4 animate-on-scroll visible">
                      <h2 className="mb-1">Trusted by Leading <span className="gradient-text">Marketers</span></h2>
                  </div>
                  <div className="grid grid-2">
                      <div className="glass-card animate-on-scroll visible">
                          <div className="flex gap-1 align-center mb-2">
                              <div style={{width: '50px', height: '50px', background: 'rgba(0, 242, 254, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--primary)'}}>JL</div>
                              <div>
                                  <h4 style={{marginBottom: 0}}>Jessica L.</h4>
                                  <p style={{fontSize: '0.85rem', color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 600}}>VP of Marketing</p>
                              </div>
                          </div>
                          <p className="text-dim" style={{fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.6}}>
                              "Since implementing EmailArmor into our lead ingestion flow, our open rates jumped by 35% and we haven't hit a single spam trap block in 8 months. Highly recommend!"
                          </p>
                      </div>
                      <div className="glass-card animate-on-scroll visible">
                          <div className="flex gap-1 align-center mb-2">
                              <div style={{width: '50px', height: '50px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#6366f1'}}>MR</div>
                              <div>
                                  <h4 style={{marginBottom: 0}}>Michael R.</h4>
                                  <p style={{fontSize: '0.85rem', color: '#6366f1', textTransform: 'uppercase', fontWeight: 600}}>Growth Lead</p>
                              </div>
                          </div>
                          <p className="text-dim" style={{fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.6}}>
                              "The API literally takes under 100ms. We validate users right at the signup form so bad data never even touches our CRM. It's an absolute game changer."
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    );
  }
