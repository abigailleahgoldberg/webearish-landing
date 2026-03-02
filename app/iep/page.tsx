import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'IEP Resource Center: Your Complete Guide | WeBearish',
  description: 'Everything parents need to know about IEPs: your legal rights, the meeting process, accommodations to request, what to do when school says no, and how to appeal.',
  alternates: { canonical: 'https://webearish.com/iep' },
};
const ACCOMMODATIONS = [
  'Extended time on tests and assignments','Preferential seating (front, near teacher, away from distractions)',
  'Reduced homework load without grade penalty','Verbal rather than written responses allowed',
  'Tests in a quiet room or small group setting','Frequent breaks (sensory breaks, movement breaks)',
  'Access to fidget tools or sensory supports','Written instructions in addition to verbal',
  'Use of AAC device in all settings','Visual schedule posted at desk',
  'Pre-warning before transitions','Reduced assignment length (same content, fewer problems)',
  'Copy of class notes provided','Access to word processor for writing tasks',
  'Speech-to-text software allowed','Extended deadlines with prior arrangement',
  'Modified testing format (oral exam option)','Reduced sensory demands (headphones, dimmed lights)',
  'Designated quiet space available','Social-emotional learning support',
  'Daily check-in with trusted adult','Home-school communication log',
  'Flexible seating options','Sensory tool kit at desk',
  'Reduced class change pressure (early dismissal)','Lunch in smaller/quieter setting',
  'Buddy system or peer support','Transition planning support (for age 14+)',
  'Assistive technology assessment','Reduced class size or pull-out support',
];
export default function IEPPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>IEP RESOURCE CENTER</span>
        <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 24px' }}>Your Complete IEP Guide</h1>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Is an IEP?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            An Individualized Education Program (IEP) is a legally binding document developed for eligible students with disabilities in the United States under the Individuals with Disabilities Education Act (IDEA). It outlines current performance levels, annual goals, services to be provided, accommodations, modifications, and placement. Every aspect of the IEP is negotiated between parents and the school team — and parents have real legal rights throughout.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Your Legal Rights Under IDEA</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'You have the right to request an evaluation at any time in writing. You do not need a diagnosis first.',
              'The school has 60 days to complete the evaluation after receiving written consent.',
              'You must be invited to all IEP meetings and have the right to request a meeting at any time.',
              'You have the right to bring an advocate or attorney to IEP meetings.',
              "You can request independent educational evaluations (IEE) at public expense if you disagree with the school's evaluation.",
              "You must receive prior written notice before the school proposes to change or refuse to change your child's educational program.",
              "You have the right to a copy of your child's IEP within a reasonable time of signing.",
              'You can revoke consent for special education services at any time in writing.',
            ].map((right, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 16px', background: 'rgba(184,232,135,0.05)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(250,250,248,0.75)' }}>{right}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Request an Evaluation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Write a letter to your school principal and special education director. Keep a copy. Send it via certified mail or email with read receipt. Your letter should state: the date, your child's name, that you are requesting a comprehensive evaluation for special education eligibility, and that you are requesting it under IDEA. You do not need to use legal language. You do not need a reason beyond your concern.
          </p>
          <div style={{ padding: '20px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.15)', fontFamily: 'monospace', fontSize: 14, lineHeight: 1.8, color: 'rgba(250,250,248,0.7)' }}>
            Sample: &ldquo;I am writing to request a comprehensive evaluation of [child's name] for special education eligibility under IDEA. I have concerns about [brief description]. Please contact me to discuss next steps.&rdquo;
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>Accommodations to Request</h2>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.5)', marginBottom: 20 }}>This is not exhaustive. Accommodations should be tailored to your child's specific needs — not selected from a generic list. Use this as a starting point for discussion.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 8 }}>
            {ACCOMMODATIONS.map((a, i) => (
              <div key={i} style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.08)', fontSize: 13, color: 'rgba(250,250,248,0.65)', lineHeight: 1.5 }}>
                {a}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When School Says No</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Schools are required to provide prior written notice when they refuse a parental request. If you disagree with the school's decision, you have options:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Informal Resolution', desc: 'Request a meeting with the special education director. Bring documentation.' },
              { title: 'Mediation', desc: 'A neutral third party helps you and the school reach agreement. Free in most states. Non-binding.' },
              { title: 'State Complaint', desc: 'File a complaint with your state education department for procedural violations. Must be filed within one year.' },
              { title: 'Due Process Hearing', desc: 'A formal legal proceeding before an impartial hearing officer. Most powerful but most resource-intensive.' },
            ].map(o => (
              <div key={o.title} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--lime)', marginBottom: 6 }}>{o.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>{o.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/school-rights" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Full School Rights Guide →</Link>
            <Link href="/resources/by-state" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resources by State →</Link>
            <a href="https://parentcenterhub.org/find-your-center" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Find Parent Training Center →</a>
          </div>
        </div>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginTop: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/school-rights" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>School Rights →</Link>
            <Link href="/communication/aac" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>AAC in School →</Link>
            <Link href="/blog/iep-meeting-parent-guide" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>IEP Meeting Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
