"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError(res.error === "CredentialsSignin" ? "Invalid email or password." : "Something went wrong.");
        } else {
            router.push('/app');
            router.refresh();
        }
    };

    return (
        <main className="section hero mt-3">
            <div className="container" style={{maxWidth: '500px'}}>
                <div className="glass-card animate-on-scroll visible text-center">
                    <h1 className="mb-1">Sign <span className="gradient-text">In</span></h1>
                    <p className="text-dim mb-3">Welcome back to EmailArmor.</p>
                    
                    {error && <div style={{color: '#ff4444', marginBottom: '1rem', padding: '10px', background: 'rgba(255,0,0,0.1)', borderRadius: '8px'}}>{error}</div>}

                    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-100" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            style={{padding: '12px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-card)', color: 'white'}}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-100" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            style={{padding: '12px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-card)', color: 'white'}}
                        />
                        <button type="submit" className="btn btn-primary w-100 mt-1" style={{padding: '12px'}}>Sign In</button>
                    </form>

                    <div style={{margin: '2rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                        <hr style={{width: '30%', borderColor: 'var(--glass-border)'}}/>
                        <span className="text-dim" style={{fontSize: '0.9rem'}}>OR</span>
                        <hr style={{width: '30%', borderColor: 'var(--glass-border)'}}/>
                    </div>

                    <button 
                        onClick={() => signIn('google', { callbackUrl: '/app' })} 
                        className="btn w-100 flex align-center justify-center gap-1"
                        style={{ background: 'white', color: '#3c4043', border: '1px solid #dadce0', borderRadius: '12px', fontWeight: '500', padding: '12px', transition: 'background 0.2s', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                        onMouseOver={(e) => e.target.style.background = '#f8f9fa'}
                        onMouseOut={(e) => e.target.style.background = 'white'}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Continue with Google
                    </button>

                    <p className="text-dim mt-3" style={{fontSize: '0.9rem'}}>
                        Don't have an account? <a href="/register" style={{color: 'var(--primary)', textDecoration: 'none'}}>Sign Up</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
