import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '504 Plan vs IEP: Which Does Your Child Need? | WeBearish',
  description: 'The key differences between a 504 Plan and an IEP, which one your autistic child qualifies for, and how to decide which provides better protection.',
  alternates: { canonical: 'https://webearish.com/iep/504-vs-iep' },
};

export default function FiveOhFourVsIEPPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/iep" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>IEP</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>504 vs IEP</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>IEP</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          504 Plan vs IEP
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Both 504 Plans and IEPs provide accommodations for students with disabilities in public schools, but they are different legal documents under different federal laws with different levels of protection. Understanding the distinction is critical for getting your autistic child the right level of support. Many autistic students are placed on 504 Plans when they actually qualify for — and need — the stronger protections of an IEP.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. For legal questions about your child's educational plan, consult a special education advocate or attorney.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Key Differences</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Legal basis', desc: 'An IEP is governed by IDEA (Individuals with Disabilities Education Act), which requires schools to provide a Free Appropriate Public Education (FAPE) with specially designed instruction. A 504 Plan is governed by Section 504 of the Rehabilitation Act, which prohibits disability discrimination and requires reasonable accommodations — but not specialized instruction.' },
              { label: 'What they provide', desc: 'An IEP provides both accommodations AND specially designed instruction (modified teaching, specialized services like speech therapy, occupational therapy, etc.). A 504 Plan provides accommodations only — changes to how work is presented or the environment, but no specialized teaching.' },
              { label: 'Evaluation requirements', desc: 'IEPs require a comprehensive evaluation by the school district to determine eligibility. 504 Plans require documentation of a disability but the evaluation process is less standardized and less rigorous.' },
              { label: 'Procedural protections', desc: 'IEPs come with extensive procedural safeguards under IDEA — notice requirements, consent requirements, dispute resolution, and stay-put provisions. 504 Plans have fewer procedural protections for parents.' },
              { label: 'Measurable goals', desc: 'IEPs must include measurable annual goals with progress monitoring. 504 Plans do not require measurable goals — they list accommodations only.' },
              { label: 'Team requirements', desc: 'IEP meetings require specific team members (regular ed teacher, special ed teacher, administrator, parent). 504 meetings have no specific team composition requirements.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When a 504 Plan May Be Appropriate</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Your child is making adequate academic progress but needs environmental accommodations to do so.',
              'Your child needs accommodations like preferential seating, extended time, sensory breaks, or a quiet testing room — but does not need specialized instruction.',
              'Your child has been denied an IEP but clearly needs some level of formal accommodation at school.',
              'Your child is transitioning out of special education and needs continued accommodations without the full IEP structure.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When an IEP Is the Better Option</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Your child needs specialized instruction — modified curriculum, specially designed teaching strategies, or pull-out services.',
              'Your child needs related services like speech therapy, occupational therapy, or social skills instruction provided by the school.',
              'Your child needs measurable goals with progress monitoring — accountability that 504 Plans do not provide.',
              'You want the stronger procedural protections of IDEA, including formal dispute resolution options.',
              'Your child\'s disability impacts educational performance in ways that require more than environmental adjustments.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Common Pitfalls</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Schools sometimes offer a 504 Plan when a child qualifies for an IEP because 504 Plans are cheaper to implement and have less accountability. If your child needs specialized instruction, push for the IEP.',
              '"Too smart for an IEP" is not a legal standard. A child can be academically gifted and still qualify for an IEP if their disability impacts educational performance — including social, emotional, and functional performance.',
              'A 504 Plan cannot replace the specialized services an IEP provides. If your child needs speech therapy, OT, or social skills training at school, those are IEP services.',
              'You can have both. In some situations, a student may have an IEP for some areas and additional 504 accommodations, though this is uncommon.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>–</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep/meeting-prep" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meeting Prep →</Link>
            <Link href="/iep/goals" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Goals →</Link>
            <Link href="/iep/transition" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Transition Planning →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Hub →</Link>
            <Link href="/school-rights" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Rights →</Link>
            <Link href="/autism-school-accommodations" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Accommodations →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
