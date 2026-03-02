'use client';
import Link from 'next/link';
import { voiceEssays } from '../data/autistic-voices';


export default function VoicesPageClient() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISTIC VOICES</span>
          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 16px' }}>
            First-Person Essays
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.55)', maxWidth: 640, lineHeight: 1.7 }}>
            Essays written from autistic perspectives. Not about autistic people. By them. On masking, burnout, late diagnosis, sensory experience, community, and identity.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {voiceEssays.map(essay => (
            <Link key={essay.slug} href={`/voices/${essay.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)', padding: '28px 24px', height: '100%', transition: 'border-color 0.2s', display: 'flex', flexDirection: 'column', gap: 12 }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.1)')}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {essay.tags.slice(0,2).map(tag => (
                    <span key={tag} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', padding: '3px 8px', background: 'rgba(184,232,135,0.1)', color: 'var(--lime)', border: '1px solid rgba(184,232,135,0.2)' }}>
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
                <h2 style={{ fontSize: 17, fontWeight: 800, color: 'var(--cream)', lineHeight: 1.4, margin: 0 }}>{essay.title}</h2>
                <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.5)', lineHeight: 1.6, margin: 0, flex: 1 }}>{essay.summary}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'rgba(250,250,248,0.3)' }}>{essay.byline} — {essay.readTime}</span>
                  <span style={{ fontSize: 13, color: 'var(--lime)', fontWeight: 700 }}>Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
