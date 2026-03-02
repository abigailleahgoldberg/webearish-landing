import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Autism in Adults: Signs and Traits | WeBearish",
  description: "How autism presents in adults. For those who were never diagnosed as children and are exploring whether autism explains their experience.",
  alternates: { canonical: "https://webearish.com/is-this-autism/in-adults" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Is This Autism?
        </Link>
        <div style={{ marginTop: 24, marginBottom: 20, padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)' }}>
          For informational purposes only. Not medical advice. Consult a licensed professional.
        </div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 32px' }}>Autism in Adults</h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Many autistic adults were never diagnosed in childhood. They grew up without language for their experience, often with anxiety, depression, or unexplained exhaustion as close companions. Some reached adulthood and found the description of autism in a book, article, or someone else's story and recognized themselves.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Autism in adults often presents as: significant effort required for social interaction that others seem to manage effortlessly; difficulty with unwritten social rules that everyone else seems to know intuitively; sensory sensitivities — sounds, lights, textures, smells — that others do not notice or dismiss as trivial; executive function challenges: starting tasks, managing time, transitioning between activities; a pattern of intense, specific interests; preference for predictability and difficulty managing unexpected changes; physical and emotional exhaustion after social interaction; a history of relationships that have strained or ended without clear explanation from the outside.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Autistic adults who masked effectively throughout childhood may find that their capacity to mask decreases with age, particularly after burnout. The late-life emergence of more visible autistic traits is real and documented.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Not every person who resonates with these descriptions is autistic. These traits overlap with other conditions. A licensed professional can conduct a formal evaluation.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>This page is for informational purposes only.</p>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="/adults" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Adults Hub →</a>
          <a href="/adults/late-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Late Diagnosis →</a>
          <a href="/diagnosis/getting-assessed" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Getting Assessed as an Adult →</a>
        </div>
      </div>
    </div>
  );
}
