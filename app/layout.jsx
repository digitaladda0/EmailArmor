import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from '../components/AuthProvider';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'EmailArmor | Premium Email Validation & Verification Service',
  description: 'Protect your sender reputation with EmailArmor. Real-time email validation, syntax checking, and deliverability optimization for modern businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https://accounts.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://lh3.googleusercontent.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://accounts.google.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://va.vercel-scripts.com;" />
      </head>
      <body>
        <header className="header">
            <div className="container nav-container" style={{position: 'relative'}}>
                <a href="/" className="logo flex align-center gap-1" style={{textDecoration: 'none'}}>
                    <div style={{width: '36px', height: '36px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px var(--primary-glow)'}}>
                        <span style={{color: 'white', fontWeight: '800', fontSize: '1.2rem', fontFamily: 'Outfit, sans-serif'}}>E</span>
                    </div>
                    <span style={{fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px'}}><span className="gradient-text">Email</span>Armor</span>
                </a>
                <Navigation />
            </div>
        </header>
        <div style={{paddingTop: '80px', minHeight: 'calc(100vh - 200px)'}}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </div>
        <SpeedInsights />
        <Analytics />
        <footer style={{borderTop: '1px solid var(--glass-border)', background: 'rgba(10, 10, 15, 0.4)', backdropFilter: 'blur(10px)', marginTop: '4rem', padding: '4rem 0 2rem 0'}}>
            <div className="container">
                <div className="grid grid-4" style={{marginBottom: '3rem'}}>
                    <div>
                        <div className="flex align-center gap-1 mb-1">
                            <div style={{width: '28px', height: '28px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <span style={{color: 'white', fontWeight: '800', fontSize: '1rem', fontFamily: 'Outfit, sans-serif'}}>E</span>
                            </div>
                            <span style={{fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif'}}>EmailArmor</span>
                        </div>
                        <p className="text-dim" style={{fontSize: '0.9rem', maxWidth: '250px'}}>The masterclass in email validation and deliverability intelligence for enterprise SaaS companies.</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                        <h4 style={{color: 'white', marginBottom: '0.5rem'}}>Product</h4>
                        <a href="/features" className="text-dim" style={{fontSize: '0.9rem'}}>Enterprise Features</a>
                        <a href="/pricing" className="text-dim" style={{fontSize: '0.9rem'}}>Pricing Plans</a>
                        <a href="/app" className="text-dim" style={{fontSize: '0.9rem'}}>Batch Validator</a>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                        <h4 style={{color: 'white', marginBottom: '0.5rem'}}>Company</h4>
                        <a href="/about" className="text-dim" style={{fontSize: '0.9rem'}}>About Us</a>
                        <a href="/contact" className="text-dim" style={{fontSize: '0.9rem'}}>Contact Sales</a>
                        <a href="#" className="text-dim" style={{fontSize: '0.9rem'}}>Security & Compliance</a>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                        <h4 style={{color: 'white', marginBottom: '0.5rem'}}>Legal</h4>
                        <a href="#" className="text-dim" style={{fontSize: '0.9rem'}}>Privacy Policy</a>
                        <a href="#" className="text-dim" style={{fontSize: '0.9rem'}}>Terms of Service</a>
                        <a href="#" className="text-dim" style={{fontSize: '0.9rem'}}>GDPR Commitment</a>
                    </div>
                </div>
                <div className="flex justify-between align-center" style={{borderTop: '1px solid var(--glass-border)', paddingTop: '2rem'}}>
                    <p className="text-dim" style={{fontSize: '0.85rem'}}>&copy; 2026 EmailArmor Inc. All rights reserved.</p>
                    <div className="flex gap-1" style={{alignItems: 'center'}}>
                        <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px var(--success)'}}></div>
                        <span className="text-dim" style={{fontSize: '0.85rem'}}>All Systems Fully Operational</span>
                    </div>
                </div>
            </div>
        </footer>
      </body>
    </html>
  );
}
