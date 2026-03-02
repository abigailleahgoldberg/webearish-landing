'use client';
import Link from 'next/link';
const SPOKES = [
  { href: '/diagnosis/early-signs', title: 'Early Signs of Autism', desc: 'What to look for at ages 0-2, 2-5, and 5-12. A reference for parents who have questions.' },
  { href: '/diagnosis/evaluation-process', title: 'The Evaluation Process', desc: 'What happens during an autism evaluation, who is involved, and what to expect.' },
  { href: '/diagnosis/dsm-5-criteria', title: 'DSM-5 Criteria Explained', desc: 'The diagnostic criteria in plain language, without clinical jargon.' },
  { href: '/diagnosis/getting-assessed', title: 'How to Get Assessed', desc: 'The three main routes to evaluation: pediatrician, private neuropsychologist, school system.' },
  { href: '/diagnosis/after-diagnosis', title: 'After the Diagnosis', desc: 'A compassionate guide to the days and weeks after receiving an autism diagnosis.' },
];
export default function DiagnosisHubClient() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>DIAGNOSIS GUIDE</span>
        <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 16px' }}>
          Understanding Autism Diagnosis
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(250,250,248,0.6)', maxWidth: 640, lineHeight: 1.7, marginBottom: 16 }}>
          Whether you are a parent with questions about your child, an adult seeking evaluation, or someone who received a diagnosis recently — this guide covers the full picture.
        </p>
        <div style={{ marginBottom: 48, padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)', maxWidth: 640 }}>
          All content on this page is for informational purposes only. Autism can only be diagnosed by a licensed professional.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {SPOKES.map(s => (
            <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)', padding: '24px 20px', height: '100%', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(184,232,135,0.1)')}>
                <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--cream)', marginBottom: 10 }}>{s.title}</div>
                <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.5)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                <div style={{ marginTop: 16, fontSize: 12, color: 'var(--lime)', fontWeight: 700 }}>Read guide →</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 48, borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 32 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/glossary" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism Glossary →</Link>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
            <Link href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Is This Autism? →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
