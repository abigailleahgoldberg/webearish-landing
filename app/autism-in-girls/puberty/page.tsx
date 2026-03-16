import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Puberty and Autism in Girls: What to Expect | WeBearish',
  description: 'How puberty affects autistic girls differently — sensory changes, emotional dysregulation, social pressure, menstruation, and how to support your daughter through it.',
  alternates: { canonical: 'https://webearish.com/autism-in-girls/puberty' },
};

export default function PubertyPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/autism-in-girls" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Autism in Girls</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM IN GIRLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Puberty and Autism: Supporting Autistic Girls Through the Transition
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Puberty is difficult for many adolescents. For autistic girls, the sensory, emotional, and social changes that come with puberty can be significantly more intense and disorienting. Understanding what to expect helps families provide better support — and helps autistic girls understand what is happening to their own bodies.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Sensory Changes in Puberty</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'New sensory experiences', desc: 'Bras, pads, tampons, new body hair, and changing skin can all create genuine sensory distress. These are not trivial concerns — they are real physiological responses that need practical solutions.' },
              { label: 'Clothing changes', desc: 'The social expectation to wear more fitted, fashion-forward clothing during adolescence can conflict with sensory needs. Finding sensory-friendly options that are also age-appropriate requires active problem-solving.' },
              { label: 'Hormonal sensory amplification', desc: 'Research suggests that hormonal fluctuations during menstrual cycles can affect sensory sensitivity — making some days significantly harder than others. Tracking this can help predict and prepare for difficult days.' },
              { label: 'Menstrual management', desc: 'Teaching menstrual hygiene requires explicit, visual instruction. Social stories about menstruation exist specifically for autistic girls. Practice with products before they are needed reduces crisis.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Social Pressure Intensifies</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The social complexity of adolescence — relationships, cliques, dating expectations, appearance judgment — increases dramatically during puberty. For autistic girls who have been managing social demands with enormous effort, this escalation can be overwhelming.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Autistic girls are at elevated risk for being targeted by social manipulation and exploitation during adolescence — particularly from peers who appear friendly.',
              'The gap between autistic girls and neurotypical peers in social sophistication often becomes more visible in middle school, which is when many autistic girls experience significant social rejection.',
              'Increased masking demands during adolescence are directly linked to the higher rates of depression and anxiety in autistic teenage girls.',
              'Body image pressures layer onto existing sensory and identity challenges in ways that increase risk for eating disorders.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Support Autistic Girls Through Puberty</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Start conversations early', desc: 'Introduce body safety, puberty concepts, and menstruation before they happen — using visual supports, books, and direct language appropriate to your child\'s understanding.' },
              { label: 'Take sensory concerns seriously', desc: 'If a bra is intolerable, find an alternative. If a tampon is too distressing to manage, period underwear exists. Practical solutions matter more than conforming to neurotypical puberty norms.' },
              { label: 'Watch for mental health changes', desc: 'Puberty is a high-risk period for autistic girls. Depression, anxiety, school refusal, and self-harm can emerge during this period. Take warning signs seriously and act early.' },
              { label: 'IEP updates for puberty', desc: 'If your daughter has an IEP, review it during puberty to ensure accommodations reflect her changing needs — including bathroom access, sensory accommodations, and mental health support.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. Puberty is one of the hardest stretches for many autistic girls and their families. You are not alone in navigating it.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/autism-in-girls" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism in Girls →</Link>
            <Link href="/autism-in-girls/masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Masking →</Link>
            <Link href="/autism-in-girls/school-advocacy" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>School Advocacy →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
