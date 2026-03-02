import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '../../data/glossary';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return glossaryTerms.map(t => ({ term: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ term: string }> }): Promise<Metadata> {
  const { term } = await params;
  const entry = glossaryTerms.find(t => t.slug === term);
  if (!entry) return {};
  return {
    title: `${entry.term}: Definition & Explanation | WeBearish`,
    description: entry.definition.slice(0, 155),
    alternates: { canonical: `https://webearish.com/glossary/${term}` },
  };
}

export default async function TermPage({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const entry = glossaryTerms.find(t => t.slug === term);
  if (!entry) notFound();

  const related = entry.relatedTerms.map(slug => glossaryTerms.find(t => t.slug === slug)).filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: entry.term,
    description: entry.definition,
    inDefinedTermSet: 'https://webearish.com/glossary',
    url: `https://webearish.com/glossary/${term}`,
  };

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/glossary" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Back to Glossary
        </Link>

        <div style={{ marginTop: 32, marginBottom: 48 }}>
          <span style={{ fontSize: 11, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM GLOSSARY</span>
          <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 0' }}>
            {entry.term}
          </h1>
        </div>

        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 16, fontWeight: 900, color: 'var(--lime)', letterSpacing: '1px', marginBottom: 16 }}>DEFINITION</h2>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(250,250,248,0.85)' }}>{entry.definition}</p>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.2)', padding: '24px 24px', marginBottom: 36 }}>
          <h2 style={{ fontSize: 15, fontWeight: 900, color: 'var(--lime)', letterSpacing: '1px', marginBottom: 14 }}>WHY IT MATTERS</h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(250,250,248,0.75)', margin: 0 }}>{entry.whyItMatters}</p>
        </div>

        <div style={{ marginBottom: 40, padding: '20px 24px', background: 'rgba(255,123,92,0.06)', border: '1px solid rgba(255,123,92,0.15)' }}>
          <h2 style={{ fontSize: 14, fontWeight: 900, color: 'var(--coral)', letterSpacing: '1px', marginBottom: 12 }}>COMMON MISCONCEPTION</h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(250,250,248,0.65)', margin: 0 }}>{entry.commonMisconceptions}</p>
        </div>

        {related.length > 0 && (
          <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 32 }}>
            <h3 style={{ fontSize: 14, fontWeight: 900, letterSpacing: '1.5px', color: 'rgba(250,250,248,0.4)', marginBottom: 16 }}>RELATED TERMS</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {related.map(r => r && (
                <Link key={r.slug} href={`/glossary/${r.slug}`} style={{ fontSize: 13, fontWeight: 700, color: 'var(--lime)', textDecoration: 'none', padding: '6px 14px', background: 'rgba(184,232,135,0.08)', border: '1px solid rgba(184,232,135,0.2)' }}>
                  {r.term}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginTop: 32 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
            <Link href="/diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Diagnosis Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
