'use client';
import { useState } from 'react';

export default function NewsletterSignup({ variant = 'inline' }: { variant?: 'inline' | 'banner' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const r = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      setStatus(r.ok ? 'done' : 'error');
    } catch { setStatus('error'); }
  };

  const isBanner = variant === 'banner';

  return (
    <div style={{ background: isBanner ? 'var(--forest)' : 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: isBanner ? '48px 32px' : '28px 24px', textAlign: isBanner ? 'center' : 'left' }}>
      <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>STAY CONNECTED</div>
      <h2 style={{ fontFamily: "'Nunito', sans-serif", fontSize: isBanner ? 32 : 20, fontWeight: 900, color: 'var(--cream)', marginBottom: 8, lineHeight: 1.15 }}>
        Monthly resources. No spam.
      </h2>
      <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', marginBottom: 20, maxWidth: isBanner ? 480 : '100%', margin: isBanner ? '0 auto 20px' : '0 0 20px' }}>
        New guides, advocacy updates, and community resources. Delivered once a month to your inbox.
      </p>
      {status === 'done' ? (
        <p style={{ color: 'var(--lime)', fontWeight: 700, fontSize: 15 }}>Thanks for subscribing! <span style={{ opacity: 0.8 }}>#AutismAcceptance</span></p>
      ) : (
        <form onSubmit={submit} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: isBanner ? 'center' : 'flex-start' }}>
          <input
            type="email" required value={email} onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{ flex: 1, minWidth: 220, padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--cream)', fontSize: 14, outline: 'none' }}
          />
          <button type="submit" disabled={status === 'loading'}
            style={{ background: 'var(--lime)', color: 'var(--dark)', fontWeight: 900, fontSize: 13, letterSpacing: '1px', padding: '12px 24px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>
            {status === 'loading' ? '...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && <p style={{ color: '#FF7B5C', fontSize: 13, marginTop: 8 }}>Something went wrong. Try again.</p>}
      <p style={{ fontSize: 11, color: 'rgba(250,250,248,0.3)', marginTop: 12 }}>We do not sell or share your email. Unsubscribe any time.</p>
    </div>
  );
}
