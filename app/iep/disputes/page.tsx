import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IEP Dispute Resolution | WeBearish',
  description: 'When the school says no — how to formally dispute IEP decisions, the complaint and due process options available to parents, and when to get an advocate.',
  alternates: { canonical: 'https://webearish.com/iep/disputes' },
};

export default function IEPDisputesPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/iep" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>IEP</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Dispute Resolution</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>IEP</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          IEP Dispute Resolution
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          The school says no. They say they cannot provide the service your child needs. They say the placement you want is not appropriate. They say the evaluation shows different results than the private evaluation you paid for. IEP disputes are stressful and common, and understanding your options — and how to use them — is essential for every autism parent.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. IEP dispute law is complex and state-specific. Consult a special education attorney or advocate for your specific situation.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Before Formal Dispute: Informal Resolution</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Request a meeting', desc: 'Before any formal action, request an IEP meeting to address your concerns. Put the request in writing. Informal resolution is faster and preserves relationships that need to work for your child.' },
              { label: 'Bring an advocate', desc: 'A trained parent advocate attending the meeting with you changes the dynamic significantly. Schools respond differently when they know the parent has support. Parent training and information (PTI) centers in every state provide free advocacy assistance.' },
              { label: 'Document everything in writing', desc: 'All communications with the school should be in writing (or followed up in writing if verbal). "Per our conversation on March 5, the team agreed to..." creates a record the school cannot easily dispute.' },
              { label: 'Request an Independent Educational Evaluation', desc: 'If you disagree with the school\'s evaluation, you have the right to request an Independent Educational Evaluation (IEE) at public expense. The school must either pay for an outside evaluation or initiate due process to defend their evaluation.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Formal Dispute Resolution Options</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'State complaint', desc: 'A complaint filed with your state department of education alleging that the district has violated IDEA. The state must investigate and respond within 60 days. This is useful for procedural violations (the school didn\'t hold required meetings, didn\'t provide required notices, etc.). No cost to file.' },
              { label: 'Mediation', desc: 'A voluntary process where a trained mediator helps parents and the school reach agreement. Mediation is less adversarial than due process and can be faster. Both parties must agree to participate. The result is a binding agreement if both parties sign.' },
              { label: 'Due process hearing', desc: 'A formal legal proceeding before a neutral hearing officer where parents and the school present evidence. This is the most powerful dispute tool available, but also the most expensive and adversarial. If you reach due process, you should have an attorney. Outcomes are binding.' },
              { label: 'Resolution session', desc: 'Within 15 days of filing for due process, the school must hold a resolution session to attempt informal settlement before the hearing. Many disputes resolve here.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When to Get an Advocate or Attorney</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'The school is denying services your child clearly needs and documented evaluations support.',
              'The school is proposing a placement change you believe is inappropriate.',
              'Communications with the school have broken down and are hostile.',
              'You are preparing for mediation or due process.',
              'The school is attempting to reduce services your child currently receives.',
              'You suspect discrimination or retaliation.',
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
            <Link href="/iep/meeting-prep" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meeting Prep →</Link>
            <Link href="/iep/goals" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Goals →</Link>
            <Link href="/iep/504-vs-iep" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>504 vs IEP →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Hub →</Link>
            <Link href="/school-rights" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Rights →</Link>
            <Link href="/autism-in-girls/school-advocacy" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Advocacy →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
