import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Single Parenting an Autistic Child | WeBearish',
  description: 'Resources, strategies, and community for single parents raising autistic children — navigating the system alone and building a support network.',
  alternates: { canonical: 'https://webearish.com/parents/single-parenting' },
};

export default function SingleParentingPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/parents" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Parents</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Single Parenting</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>PARENTS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Single Parenting an Autistic Child
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Single parenting an autistic child means doing one of the most demanding parenting jobs with half the backup, double the logistics, and a system that was not designed for you. You manage the IEP meetings alone. You attend every appointment. Every meltdown, every night waking, every school email — you. This page is not going to pretend that is not exhausting. It is. But there are real strategies, real resources, and a real community of single autism parents who are navigating the same terrain.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. Legal and financial advice specific to your situation should come from qualified professionals.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Specific Challenges</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'No backup during crises', desc: 'When your child is in a meltdown, there is no other adult to step in while you regulate. When you are sick, appointments still need to happen. Building a reliable backup network — even just two or three people who can step in — is not optional, it is survival.' },
              { label: 'Employment and scheduling conflicts', desc: 'Many autism support services are scheduled during working hours. Therapy appointments, IEP meetings, school calls — these are incompatible with a standard work schedule. Single parents often have to negotiate impossible trade-offs.' },
              { label: 'Financial pressure', desc: 'Autism caregiving is expensive. Single income families face the full cost without a financial partner. This makes knowing every available financial support program — Medicaid, SSI, state waivers, school-funded services — essential.' },
              { label: 'Decision fatigue', desc: 'Every decision — therapy choices, school placements, medication questions, daily schedules — lands on one person. The weight of making every significant decision alone, without consultation or backup, is one of the most exhausting aspects of single autism parenting.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Building a Support Network</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Identify your village intentionally', desc: 'Your support network will not build itself. Identify specifically who can help with what — who can do a school pickup, who can come over during a crisis, who can watch your child for a few hours. Be specific and ask directly.' },
              { label: 'Family', desc: 'Family support is invaluable but requires education. Train family members on your child\'s communication style, sensory needs, and regulation strategies. A grandparent who understands your child is worth more than a dozen strangers.' },
              { label: 'Other autism parents', desc: 'Other single autism parents specifically understand in a way others cannot. Local autism parent groups and online communities of single autism parents are your peer support system. Find them.' },
              { label: 'Respite programs', desc: 'Many states have respite programs through Medicaid waivers and autism-specific organizations. These programs provide trained care workers who can give you time off. Contact your state\'s autism advocacy organization for a directory.' },
              { label: 'School as partner', desc: 'When school is working as your partner — when the IEP is strong and the team is supportive — your child gets critical support hours that reduce the total caregiving weight on you. Invest in this relationship.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Financial Resources for Single Parents</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'SSI (Supplemental Security Income) — if your child\'s disability meets Social Security criteria, they may qualify for monthly payments.',
              'Medicaid — many autistic children qualify, providing health coverage and access to therapy services.',
              'State Medicaid waivers — often provide funding for respite care, adaptive equipment, and additional support services.',
              'IDEA mandated services — speech, OT, and other therapies through school are legally required in the IEP at no cost to you.',
              'State family support programs — many states have programs specifically for single parent families raising children with disabilities.',
              'Nonprofit grants — organizations like the Autism Society of America and local autism nonprofits sometimes offer family support grants.',
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
            <Link href="/parents/self-care/deep-dive" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Self-Care Deep Dive →</Link>
            <Link href="/iep" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Guide →</Link>
            <Link href="/parents/roadmap" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parent Roadmap →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/parents" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parents Hub →</Link>
            <Link href="/community" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Community →</Link>
            <Link href="/school-rights" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Rights →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
