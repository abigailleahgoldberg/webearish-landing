import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism Therapies and Interventions: A Parent Guide | WeBearish',
  description: "An honest overview of therapies and interventions used with autistic children and adults — what the evidence shows and what autistic people say.",
  alternates: { canonical: 'https://webearish.com/therapies' },
};

const THERAPIES = [
  { name: 'ABA Therapy', slug: '/therapies/aba', desc: 'The most researched and most contested autism intervention. What the studies show. What autistic adults who received it say.', tag: 'Controversial' },
  { name: 'Occupational Therapy', slug: '/therapies/ot', desc: 'Sensory processing, fine motor skills, adaptive daily living. One of the most broadly supported interventions across autistic advocacy.', tag: 'Widely Supported' },
  { name: 'Speech-Language Therapy', slug: '/therapies/speech', desc: 'Communication support including AAC, articulation, social communication, and alternative communication strategies.', tag: 'Widely Supported' },
  { name: 'DIR/Floortime', slug: '/therapies/floortime', desc: 'A developmental, relationship-based model that follows the child\'s lead to build genuine engagement and communication.', tag: 'Community Positive' },
  { name: 'CBT for Autism', slug: '/therapies/cbt', desc: 'Cognitive behavioral therapy adapted for autistic people — anxiety, depression, and emotional regulation. Requires autism-informed therapists.', tag: 'Conditional' },
  { name: 'AAC', slug: '/communication/aac', desc: 'Augmentative and Alternative Communication covers everything from picture boards to speech-generating devices. A communication right, not a last resort.', tag: 'Widely Supported' },
];

export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--coral)', marginBottom: 12 }}>THERAPIES</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontFamily: "'Nunito', sans-serif", fontWeight: 900, marginBottom: 16 }}>
          Autism Therapies and Interventions
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
          No two autistic people are the same. No single therapy works for everyone. This guide covers the most common interventions — what the research shows, what autistic advocates say, and how to evaluate what is right for your family.
        </p>
        <div style={{ background: 'rgba(255,123,92,0.08)', border: '1px solid rgba(255,123,92,0.2)', padding: '16px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>
          <strong style={{ color: '#FF7B5C' }}>Our approach:</strong> WeBearish presents evidence and autistic community perspectives together. Clinical research and autistic lived experience are both valid data. You deserve both.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {THERAPIES.map((t, i) => (
            <Link key={i} href={t.slug} style={{ textDecoration: 'none', display: 'block', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(184,232,135,0.1)', padding: '20px 22px', transition: 'border-color 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--cream)' }}>{t.name}</div>
                <span style={{ fontSize: 9, letterSpacing: '1px', padding: '3px 7px', background: t.tag === 'Controversial' ? 'rgba(255,123,92,0.15)' : t.tag === 'Widely Supported' ? 'rgba(184,232,135,0.15)' : 'rgba(255,209,102,0.15)', color: t.tag === 'Controversial' ? '#FF7B5C' : t.tag === 'Widely Supported' ? 'var(--lime)' : 'var(--yellow)', whiteSpace: 'nowrap' }}>{t.tag}</span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.55)', lineHeight: 1.6 }}>{t.desc}</p>
              <div style={{ fontSize: 12, color: 'var(--lime)', marginTop: 12, fontWeight: 700 }}>Read guide →</div>
            </Link>
          ))}
        </div>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginTop: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/therapies/aba" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>ABA Guide →</Link>
            <Link href="/communication/aac" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>AAC Hub →</Link>
            <Link href="/tools" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Tools Directory →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
