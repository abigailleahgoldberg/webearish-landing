'use client';
import Link from 'next/link';
import { stateResources } from '../../data/state-resources';


export default function StateIndexPageClient() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
            ← Resource Library
          </Link>
          <div style={{ marginTop: 28 }}>
            <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>STATE RESOURCES</span>
            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 16px' }}>
              Autism Resources by State
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.55)', maxWidth: 620, lineHeight: 1.7 }}>
              Medicaid waivers, insurance mandates, autism society chapters, and support organizations for all 50 states.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8 }}>
          {stateResources.map(s => (
            <Link key={s.slug} href={`/resources/by-state/${s.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.1)')}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--cream)' }}>{s.name}</span>
                <span style={{ fontSize: 12, color: 'var(--lime)', fontWeight: 900 }}>{s.abbreviation}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
