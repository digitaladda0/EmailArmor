"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="nav-links flex align-center">
                <Link href="/features">Features</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/about">Platform</Link>
                <Link href="/login" style={{color: 'var(--text-light)', fontWeight: 600}}>Sign In</Link>
                <Link href="/app" className="btn btn-primary" style={{padding: '0.6rem 1.2rem', marginLeft: '1rem'}}>Go to App</Link>
            </nav>

            {/* Mobile Hamburger Toggle */}
            <button 
                className="mobile-toggle" 
                onClick={() => setIsOpen(!isOpen)} 
                style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.8rem', cursor: 'pointer', display: 'none', padding: '0.5rem' }}
                aria-label="Toggle Navigation"
            >
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="mobile-menu glass-card">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/features" onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>Platform</Link>
                    <Link href="/login" onClick={() => setIsOpen(false)} style={{color: 'var(--primary)', fontWeight: 600}}>Sign In</Link>
                    <Link href="/app" onClick={() => setIsOpen(false)} className="btn btn-primary text-center mt-1" style={{borderBottom: 'none'}}>Go to App</Link>
                </div>
            )}
        </>
    );
}
