'use client';
import Link from 'next/link';
import { conditions } from '../data/conditions';


export default function ConditionsPageClient() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>CO-OCCURRING CONDITIONS</span>
          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 16px' }}>
            Conditions That Frequently Co-occur with Autism
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(250,250,248,0.6)', maxWidth: 660, lineHeight: 1.7 }}>
            Most autistic people have at least one co-occurring condition. Understanding each condition separately from autism leads to better, more targeted support.
          </p>
          <div style={{ marginTop: 20, padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6, maxWidth: 680 }}>
            This page is for informational purposes only. It is not medical or diagnostic advice. Please consult a licensed professional for evaluation and diagnosis.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
          {conditions.map(c => (
            <Link key={c.slug} href={`/conditions/${c.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)', padding: '24px 24px', height: '100%', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.1)')}>
                <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--cream)', marginBottom: 10 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: 'var(--lime)', fontWeight: 700, marginBottom: 12 }}>
                  {c.prevalenceWithAutism.split('.')[0]}.
                </div>
                <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.5)', lineHeight: 1.6, margin: 0 }}>
                  {c.description.slice(0, 120)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
