import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Sibling Experience: Growing Up with an Autistic Brother or Sister | WeBearish',
  description: 'The often overlooked sibling experience — how neurotypical siblings are affected, what they need, and how to support the whole family.',
  alternates: { canonical: 'https://webearish.com/parents/siblings' },
};

export default function SiblingsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/parents" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Parents</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>The Sibling Experience</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>PARENTS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          The Sibling Experience
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Siblings of autistic children are often the invisible members of the family. Parents are managing their autistic child's needs, coordinating services, fighting for school placements, and managing daily caregiving — and the neurotypical sibling is there, watching, adapting, sometimes struggling quietly. The sibling experience is profound and real, and it deserves attention that it often does not get.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. Family therapy can be a useful support for siblings experiencing significant distress.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Siblings Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Pride and love', desc: 'Many siblings develop deep pride in their autistic sibling, strong advocacy skills, and a natural capacity for acceptance and empathy. These are real gifts of the sibling relationship. They coexist with the challenges.' },
              { label: 'Perceived inequality in attention', desc: 'Autism parenting is not equal parenting in terms of time and energy distribution, and children notice. A sibling who understands why the imbalance exists handles it differently than one who feels invisible without context.' },
              { label: 'Embarrassment', desc: 'Particularly in middle childhood and adolescence, siblings may feel embarrassed in social situations involving their autistic sibling — a meltdown at school, a behavioral difference at a friend\'s house. This feeling is normal and human. Shaming it does not help.' },
              { label: 'Fear and worry', desc: 'Siblings sometimes worry about their autistic sibling\'s future, about what happens if their parents are not around, or about their own responsibility. Some develop anxiety about their sibling\'s safety or wellbeing.' },
              { label: 'Parentification', desc: 'In some families, neurotypical siblings take on caregiving roles that are developmentally inappropriate — managing their sibling\'s behavior, translating for their sibling, or putting their sibling\'s needs consistently ahead of their own. This has long-term costs if unaddressed.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Siblings Need</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Age-appropriate explanations of autism', desc: 'Siblings who understand autism — not in a clinical sense but in a "this is how your brother\'s brain works" sense — handle the daily realities better than siblings left to figure it out themselves. Adjust the explanation to the child\'s age and revisit it as they grow.' },
              { label: 'Dedicated one-on-one time', desc: 'Regular time with each parent that is fully theirs — not shared with autism logistics, not interrupted by sibling crises — communicates that they matter. Even an hour a week of dedicated, undivided parent time has significant impact.' },
              { label: 'Permission to have their own feelings', desc: 'Siblings should be able to say they are frustrated, embarrassed, angry, or tired of the situation without being told to be grateful or be better. Their feelings are not a betrayal of their sibling.' },
              { label: 'Sibling support groups', desc: 'Groups like Sibshops provide peer support for siblings of people with disabilities. Being in a room with other kids who truly understand is invaluable. Many children\'s hospitals, autism organizations, and community programs offer these groups.' },
              { label: 'Protection from inappropriate responsibility', desc: 'Siblings can be wonderful supports and play partners for their autistic sibling. They should not be substitutes for professional support, emergency regulators, or full-time carers. Watch for parentification and redistribute responsibility when you see it.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What the Research Shows</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Most adult siblings of autistic people report that the experience enriched their lives and shaped their values positively.',
              'Sibling outcomes are closely tied to family climate — families where autism is openly discussed and feelings are welcomed produce better outcomes for siblings.',
              'Siblings who grow up in families with a positive autism narrative (neurodiversity-affirming, strength-based) show more positive sibling relationships and better adjustment.',
              'Early access to age-appropriate explanation and sibling support groups significantly reduces anxiety in neurotypical siblings.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/parents/partnership" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Marriage &amp; Partnership →</Link>
            <Link href="/parents/self-care" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parent Self-Care →</Link>
            <Link href="/autism-and-siblings" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism and Siblings →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/parents" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parents Hub →</Link>
            <Link href="/acceptance" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism Acceptance →</Link>
            <Link href="/community" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Community →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
