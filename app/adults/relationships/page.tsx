import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Relationships as an Autistic Adult | WeBearish",
  description: "Dating, friendships, disclosing autism to partners, communication in relationships, and finding autistic community.",
  alternates: { canonical: "https://webearish.com/adults/relationships" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/adults" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Adults Hub
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Autism and Relationships</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Communication in Relationships</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Autistic people often communicate more directly than neurotypical partners expect. Misunderstandings about tone, intent, and social meaning are common at the autistic-neurotypical interface. Explicit communication — saying what you mean, asking for what you need, checking rather than inferring — works better than relying on implied meaning.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Disclosing to Romantic Partners</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Disclosing autism to a romantic partner is a personal decision. There is no universal right time. Many autistic people find that disclosing early allows them to build relationships without the exhaustion of masking from the start. The right partner will be curious rather than alarmed. Disclosure does not determine whether a relationship works — communication and compatibility do.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Friendships</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Friendships as an autistic adult may look different from neurotypical friendship patterns. Many autistic adults prefer fewer, deeper friendships over large social networks. Connections built around shared interests often require less masking. Friendships that accommodate communication differences and do not punish direct expression tend to last.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Finding Autistic Community</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Connection with other autistic people is often described as qualitatively different from neurotypical friendships. The recognition is immediate and requires less explanation. Online communities have made autistic community accessible to people in geographic areas with no local autistic spaces. The Autistic Self Advocacy Network (ASAN) and local chapters of autism organizations often host adult programs.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/voices" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autistic Voices →</Link>
        </div>
      </div>
    </div>
  );
}
