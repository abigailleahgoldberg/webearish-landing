import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IEP Meeting Preparation | WeBearish',
  description: 'How to prepare for your child\'s IEP meeting — what to bring, what to ask, what your rights are, and how to advocate effectively.',
  alternates: { canonical: 'https://webearish.com/iep/meeting-prep' },
};

export default function IEPMeetingPrepPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/iep" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>IEP</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Meeting Prep</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>IEP</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          IEP Meeting Preparation
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          IEP meetings can feel intimidating — you are often the only non-professional in a room full of educators and specialists, and the document that comes out of the meeting shapes your child's school experience for the next year. But parents have significant legal rights in this process, and preparation is the difference between signing a document someone else wrote and co-creating a plan that actually reflects your child's needs.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. IEP law varies by state. Consult a special education advocate or attorney for legal questions specific to your situation.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Your Legal Rights in IEP Meetings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'You are a required member of the IEP team, not a guest. Your presence and participation are legally mandated.',
              'You have the right to request an IEP meeting at any time — you do not have to wait for the annual review.',
              'You have the right to bring a support person, advocate, or attorney to any IEP meeting.',
              'You have the right to review all evaluation records before the meeting.',
              'You do not have to sign the IEP document at the meeting. You can take it home, review it, and respond within a reasonable timeframe.',
              'You have the right to disagree with the IEP and request revisions.',
              'You have the right to receive the draft IEP in advance. Ask for it in writing before the meeting.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Before the Meeting: Preparation Steps</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Review last year\'s IEP', desc: 'Were goals met? If not, why not? What services were provided versus what was written? Bring documented evidence of progress or lack of progress.' },
              { label: 'Write your parent concerns', desc: 'IDEA requires that your concerns be documented in the IEP. Write them down before the meeting so they are specific, clear, and on record. Verbal concerns can be minimized; written ones create accountability.' },
              { label: 'Gather outside documentation', desc: 'Reports from private therapists, pediatricians, psychologists, or specialists that are not school employees often provide a different picture than school evaluations alone. Bring copies.' },
              { label: 'Prepare specific questions', desc: 'How is progress toward each goal being measured? How often? Who is responsible for each service? How will you be informed of progress throughout the year? Where will services be delivered?' },
              { label: 'Request the draft IEP in advance', desc: 'Ask in writing for the draft at least 5 business days before the meeting. Review every section before you arrive.' },
              { label: 'Consider bringing an advocate', desc: 'Parent training and information centers (PTIs) in every state provide free or low-cost advocacy support. A trained advocate can attend the meeting with you and help ensure your rights are protected.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>At the Meeting</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Take notes or record', desc: 'In most states you can record IEP meetings with advance notice. If recording, notify the team in writing beforehand. At minimum, take detailed notes — who said what, what was agreed to, what was declined.' },
              { label: 'Ask for clarification on jargon', desc: 'You have the right to understand everything being discussed. If terminology is unclear, ask for plain language explanations.' },
              { label: 'Do not feel pressure to sign immediately', desc: '"I want to take this home and review it before I sign" is always appropriate. A good-faith team will not pressure you for an immediate signature.' },
              { label: 'Voice disagreement in the moment', desc: 'If you disagree with something in the meeting, say so clearly: "I disagree with that. I would like my disagreement noted." This creates a record.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep/goals" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Goals →</Link>
            <Link href="/iep/disputes" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Disputes →</Link>
            <Link href="/iep/504-vs-iep" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>504 vs IEP →</Link>
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
