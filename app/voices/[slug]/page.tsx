import type { Metadata } from 'next';
import Link from 'next/link';
import { voiceEssays } from '../../data/autistic-voices';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return voiceEssays.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const essay = voiceEssays.find(e => e.slug === slug);
  if (!essay) return {};
  return {
    title: `${essay.title} | WeBearish`,
    description: essay.summary,
    alternates: { canonical: `https://webearish.com/voices/${slug}` },
  };
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essay = voiceEssays.find(e => e.slug === slug);
  if (!essay) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: essay.title,
    description: essay.summary,
    author: { '@type': 'Person', name: essay.byline },
    publisher: { '@type': 'Organization', name: 'WeBearish', url: 'https://webearish.com' },
    url: `https://webearish.com/voices/${slug}`,
  };

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/voices" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Autistic Voices
        </Link>

        <div style={{ marginTop: 32, marginBottom: 48 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            {essay.tags.map(tag => (
              <span key={tag} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', padding: '3px 10px', background: 'rgba(184,232,135,0.1)', color: 'var(--lime)', border: '1px solid rgba(184,232,135,0.2)' }}>
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.15, marginBottom: 20 }}>
            {essay.title}
          </h1>
          <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 40 }}>
            <span>{essay.byline}</span>
            <span>—</span>
            <span>{essay.readTime}</span>
          </div>
          <p style={{ fontSize: 18, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, fontStyle: 'italic', borderLeft: '3px solid var(--lime)', paddingLeft: 20 }}>
            {essay.summary}
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.15)', paddingTop: 40 }}>
          {essay.content.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(250,250,248,0.8)', marginBottom: 28 }}>
              {para}
            </p>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 32, marginTop: 16 }}>
          <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.3)', marginBottom: 20 }}>Written from an autistic perspective for the WeBearish community.</div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/voices" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>More Essays →</Link>
            <Link href="/glossary" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism Glossary →</Link>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
