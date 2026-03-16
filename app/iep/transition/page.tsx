import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IEP Transition Planning: Preparing Autistic Students for Adulthood | WeBearish',
  description: 'What IEP transition planning is, when it starts, what it must cover, and how to advocate for a plan that actually reflects your autistic child\'s goals and strengths.',
  alternates: { canonical: 'https://webearish.com/iep/transition' },
};

export default function IEPTransitionPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← IEP Guide</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>IEP TRANSITION PLANNING</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Transition Planning: Preparing for Life After School
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Transition planning is one of the most important — and most neglected — parts of the IEP process. Federal law requires it, but the quality varies enormously. A strong transition plan is built around the student's actual goals, interests, and support needs, not a checklist of default placements.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What the Law Requires</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Under IDEA, transition services must be included in the IEP beginning at age 16 (some states require age 14). The plan must address three domains: postsecondary education or training, employment, and independent living skills where appropriate.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Age-appropriate assessments', desc: 'Schools must use formal and informal assessments to understand the student\'s strengths, interests, preferences, and support needs — not just standardized test scores.' },
              { label: 'Measurable postsecondary goals', desc: 'Goals must be specific, measurable, and based on the transition assessments. "Graduate and find a job" is not a compliant transition goal.' },
              { label: 'Annual IEP goals tied to transition', desc: 'The IEP\'s annual goals must link directly to the transition goals — building the skills needed for post-school life.' },
              { label: 'Student participation', desc: 'Students must be invited to their transition IEP meeting. Their input must be reflected in the plan. If they cannot attend, their preferences must still be represented.' },
              { label: 'Course of study', desc: 'The IEP must include a multi-year description of coursework leading to the student\'s postsecondary goals.' },
              { label: 'Agency linkages', desc: 'Schools must identify outside agencies (vocational rehab, state disability services, higher education supports) and invite them when appropriate.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Transition Plans Often Fall Short</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Transition planning fails autistic students in predictable ways. Recognizing them helps you advocate for better.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Plans built around placement availability, not student goals. Schools often steer students toward whatever programs already exist rather than what the student actually wants.',
              'Goals set without meaningful student input. When students are not meaningfully included in planning their own futures, the resulting plans reflect assumptions rather than ambitions.',
              'Employment goals limited by low expectations. Autistic students are often steered toward a narrow range of assumed-appropriate jobs without exploring their actual interests.',
              'No connection to adult services. The transition from school-based services to adult services is a cliff many families fall off. Planning for this gap must start early.',
              'Transition goals disconnected from daily IEP instruction. If the IEP\'s annual goals are not building toward postsecondary goals, time is being wasted.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Building a Real Transition Plan</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Start earlier than required', desc: 'Even before age 14-16, families can begin mapping the student\'s strengths, interests, and potential futures. The earlier you start thinking about it, the more runway you have.' },
              { label: 'Document the student\'s actual interests', desc: 'What does your child love? What are they good at? What environments are workable for them? These questions should drive the plan, not default assumptions.' },
              { label: 'Explore vocational rehabilitation', desc: 'VR services can begin while a student is still in high school. Contact your state VR agency before the last year of school — not after.' },
              { label: 'Investigate post-secondary options actively', desc: 'College programs for autistic students, supported employment programs, and certificate programs are options that don\'t always show up without research.' },
              { label: 'Plan for the service cliff', desc: 'School services end at 21 or upon diploma. Adult services have waitlists. Get on those lists now.' },
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
            We are not doctors. We are advocates. Transition planning deserves the same fight as any other part of the IEP. Your child has a right to a future that reflects who they actually are.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>IEP Guide →</Link>
            <Link href="/iep/504-vs-iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>504 vs IEP →</Link>
            <Link href="/adults" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autistic Adults →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
