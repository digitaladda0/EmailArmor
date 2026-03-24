import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: 'EmailArmor | Premium Email Validation & Verification Service',
  description: 'Protect your sender reputation with EmailArmor. Real-time email validation, syntax checking, and deliverability optimization for modern businesses.',
  keywords: 'email validation, verify email, email list cleaning, deliverability, bounce rate reduction, email verification API, spam trap detection',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-eval' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval';" />
        <link rel="canonical" href="https://emailarmor.ai/index.html" />
        <meta property="og:title" content="EmailArmor | Premium Email Validation Service" />
        <meta property="og:description" content="Protect your sender reputation with precision email validation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emailarmor.ai" />
        <meta property="og:image" content="hero.png" />
      </head>
      <body>
        <header>
            <div className="container">
                <nav>
                    <a href="/" className="logo-container">
                        <img src="/logo.png" alt="EmailArmor Logo" />
                        <span className="brand" style={{fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px'}}>EmailArmor</span>
                    </a>
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/features">Features</a>
                        <a href="/pricing">Pricing</a>
                        <a href="/about">About</a>
                        <a href="/app" className="btn btn-primary" aria-label="Get Started with EmailArmor">Get Started</a>
                    </div>
                    <div className="menu-toggle">
                        <span></span><span></span><span></span>
                    </div>
                </nav>
            </div>
        </header>
        {children}
        <SpeedInsights />
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-logo">
                        <div className="logo-container" style={{marginBottom: '1rem'}}>
                            <img src="/logo.png" alt="EmailArmor Logo" style={{height: '30px'}} />
                            <span className="brand" style={{fontSize: '1.2rem', fontWeight: 700}}>EmailArmor</span>
                        </div>
                        <p>The gold standard in email validation and deliverability intelligence.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Product</h4>
                        <a href="/features">Features</a>
                        <a href="/pricing">Pricing</a>
                        <a href="#">API Docs</a>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <a href="/about">About Us</a>
                        <a href="#">Security</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="footer-links">
                        <h4>Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">GDPR</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 EmailArmor Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
      </body>
    </html>
  );
}
