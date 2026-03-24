export default function Contact() {
    return (
        <main>
            <section className="section hero">
                <div className="container">
                    <div className="text-center mb-4">
                        <h1 className="mb-1 animate-on-scroll visible">Let's <span className="gradient-text">Connect</span></h1>
                        <p className="text-dim animate-on-scroll visible" style={{fontSize: '1.15rem'}}>Have questions about our API or custom enterprise plans? We're here to help.</p>
                    </div>
    
                    <div className="grid grid-2 gap-3 mt-3">
                        <div className="contact-info">
                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div>
                                    <h4 style={{marginBottom: '0.3rem'}}>Visit Us</h4>
                                    <p style={{color: 'var(--text-dim)', fontSize: '0.95rem'}}>123 Cyber Plaza, Suite 404<br/>San Francisco, CA 94105</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">📧</div>
                                <div>
                                    <h4 style={{marginBottom: '0.3rem'}}>Email Us</h4>
                                    <p style={{color: 'var(--text-dim)', fontSize: '0.95rem'}}>hello@emailarmor.ai<br/>support@emailarmor.ai</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div>
                                    <h4 style={{marginBottom: '0.3rem'}}>Call Us</h4>
                                    <p style={{color: 'var(--text-dim)', fontSize: '0.95rem'}}>+1 (555) 012-3456<br/>Mon-Fri, 9am - 6pm PST</p>
                                </div>
                            </div>
                        </div>
    
                        <div className="contact-form-container">
                            <form className="glass-card animate-on-scroll visible">
                                <div className="grid grid-2">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="John" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Work Email</label>
                                    <input type="email" id="email" name="email" placeholder="john@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Inquiry about Enterprise Plan" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Tell us more about your needs..." required></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" style={{width: '100%', borderRadius: '16px'}}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
