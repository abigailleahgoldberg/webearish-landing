import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Late Autism Diagnosis for Adults | WeBearish",
  description: "Late autism diagnosis: what it means, what to expect, and how to navigate life after finally having a name for your experience.",
  alternates: { canonical: "https://webearish.com/adults/late-diagnosis" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/adults" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Adults Hub
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Late Autism Diagnosis</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Late Diagnosis Means</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Receiving an autism diagnosis as an adult means finally having language for a lifelong experience. The diagnosis does not change who you are. It changes what language you have for who you have always been. For many people, the relief is significant. The grief can be too.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Reprocessing Phase</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>After a late diagnosis, most people go through a period of reinterpreting their past through the new lens. Friendships that ended, jobs that were lost, relationships that strained — all of these look different. Some memories that felt like personal failure reveal themselves as unmet needs or environmental mismatch.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Self-Identification</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Not everyone can access a formal autism evaluation. Cost, waitlists, and geographic barriers are real. Self-identification is recognized in many autistic communities as valid. A formal diagnosis provides access to legal accommodations and official documentation — self-identification does not. Both represent real knowledge about one's neurological reality.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Finding Community</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Finding autistic community is often the most meaningful thing a newly diagnosed adult can do. Online communities, local groups, and autistic-led organizations provide something that clinical literature cannot: direct recognition from people whose experience mirrors yours.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/voices" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autistic Voices →</Link>
        </div>
      </div>
    </div>
  );
}
