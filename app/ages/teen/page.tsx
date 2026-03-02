import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Autism in Teenagers | WeBearish",
  description: "Puberty, identity, self-advocacy, dating, and preparing for adulthood as an autistic teenager.",
  alternates: { canonical: "https://webearish.com/ages/teen" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/ages" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Age Guides
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Autism in Teenagers</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Puberty and Autism</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Puberty can significantly amplify sensory sensitivities, emotional regulation challenges, and anxiety. Hormonal changes are real and affect autistic teens intensely. Body changes may be particularly distressing for autistic teens with interoceptive differences or sensory sensitivities to touch and texture. Direct, explicit conversation about puberty is more effective than indirect hints.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Identity and Self-Advocacy</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Adolescence is the period when many autistic people begin developing a conscious understanding of their autistic identity. Some autistic teens find enormous relief in having language for their experience. Others find the diagnosis label difficult to integrate. Supporting a teenager's self-understanding means following their lead about how they talk about themselves.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Social Life and Dating</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Social stakes are higher in adolescence, and the gap between autistic and neurotypical social development can become more visible. Romantic relationships are genuinely important to many autistic teens. Explicit conversation about consent, communication, and what healthy relationships look like is important and often more necessary than parents realize.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Preparing for Adulthood</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Transition planning under IDEA should begin by age 16. It should include the student's own voice about their goals. Adult services are dramatically under-resourced. Early connection with vocational rehabilitation, disability services at potential colleges, and independent living programs matters. Start earlier than you think you need to.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>IEP Resource Center →</Link>
          <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/glossary" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism Glossary →</Link>
        </div>
      </div>
    </div>
  );
}
