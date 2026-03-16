import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Masking in Autistic Girls: What It Is and Why It Matters | WeBearish',
  description: 'Understanding masking in autistic girls — what it looks like, why girls mask more intensely, and the long-term costs of sustained social camouflage.',
  alternates: { canonical: 'https://webearish.com/autism-in-girls/masking' },
};

export default function MaskingPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/autism-in-girls" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Autism in Girls</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM IN GIRLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Masking: The Hidden Cost of Fitting In
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Masking is the process of suppressing autistic traits and mimicking neurotypical behavior in order to fit in socially. It is exhausting, it is learned through necessity, and it is significantly more pronounced in autistic girls and women than in autistic boys — which is a large part of why girls are diagnosed so much later.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Masking Looks Like in Girls</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Scripted social interaction', desc: 'Preparing and rehearsing conversations in advance. Replaying social encounters afterward to analyze what went well or wrong. Mimicking conversational patterns observed in others.' },
              { label: 'Suppressing stimming', desc: 'Replacing visible stimming behaviors with subtle, socially acceptable ones — twisting hair, clicking a pen, tapping a foot. Or holding still entirely at significant internal cost.' },
              { label: 'Copying peers', desc: 'Carefully observing how other girls dress, talk, move, and interact — and replicating it. Autistic girls often describe feeling like they are performing a role rather than being a person.' },
              { label: 'Performing interest', desc: 'Pretending to care about topics, media, or social activities that are not genuinely interesting. Hiding or minimizing intense special interests because they seem "weird."' },
              { label: 'Emotional suppression', desc: 'Holding distress, overwhelm, and meltdown energy until a private space is reached. The school environment may look fine; home is where everything unravels.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Girls Mask More Intensely</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Several factors converge to make masking more pronounced in girls:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Social expectations for girls are more stringent than for boys — more eye contact, more conversation, more emotional attunement is expected and enforced.',
              'Girls are more likely to be corrected when their social behavior is "off" — which creates a strong incentive to fix the visible symptoms rather than address the underlying cause.',
              'Girls tend to have stronger social motivation — they want to connect, and masking feels like the price of admission.',
              'Autistic girls often have a "social chameleon" ability to adopt the presentation of whoever they are around, which can make the mask nearly invisible to adults.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Long-Term Cost of Masking</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Chronic masking is not neutral. Research consistently links sustained masking to autistic burnout, depression, anxiety, and loss of sense of self. Girls who mask successfully through childhood often reach their late teens or early adulthood in a state of complete depletion — with no understanding of why.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            The goal is not to eliminate the mask as a survival tool — in some environments it is genuinely necessary. The goal is to create spaces where autistic girls don't have to wear it, and to identify their autism before the mask becomes the only identity they know.
          </p>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. If your daughter seems "fine at school but falls apart at home," you may be watching the mask come off. That's not bad behavior. That's exhaustion.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/autism-in-girls" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism in Girls →</Link>
            <Link href="/autism-in-girls/late-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Late Diagnosis →</Link>
            <Link href="/autism-in-girls/social-camouflage" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Social Camouflage →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
