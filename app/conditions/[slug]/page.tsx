import type { Metadata } from 'next';
import Link from 'next/link';
import { conditions } from '../../data/conditions';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return conditions.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = conditions.find(c => c.slug === slug);
  if (!c) return {};
  return {
    title: `${c.name} and Autism | WeBearish`,
    description: c.description.slice(0, 155),
    alternates: { canonical: `https://webearish.com/conditions/${slug}` },
  };
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = conditions.find(c => c.slug === slug);
  if (!c) notFound();

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/conditions" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Co-occurring Conditions
        </Link>

        <div style={{ margin: '32px 0 20px', padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>
          This page is for informational purposes only. It is not medical or diagnostic advice. Please consult a licensed professional.
        </div>

        <h1 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 8px' }}>
          {c.name}
        </h1>

        <div style={{ padding: '10px 16px', background: 'rgba(184,232,135,0.08)', border: '1px solid rgba(184,232,135,0.2)', marginBottom: 36, display: 'inline-block' }}>
          <span style={{ fontSize: 13, color: 'var(--lime)', fontWeight: 700 }}>{c.prevalenceWithAutism}</span>
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 14 }}>What It Is</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>{c.description}</p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 14 }}>How It Presents in Autistic People</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>{c.howItPresents}</p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 14 }}>Treatment and Support</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>{c.treatmentNotes}</p>
        </section>

        {c.resources.length > 0 && (
          <section style={{ marginBottom: 40, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.1)', padding: '24px 24px' }}>
            <h2 style={{ fontSize: 16, fontWeight: 900, marginBottom: 16 }}>Resources</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.resources.map(r => (
                <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: 'var(--lime)', fontWeight: 700, textDecoration: 'none' }}>
                  {r.name} →
                </a>
              ))}
            </div>
          </section>
        )}

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
            <Link href="/glossary" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism Glossary →</Link>
            <Link href="/diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Diagnosis Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
