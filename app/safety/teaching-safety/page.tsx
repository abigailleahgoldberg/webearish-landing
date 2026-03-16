import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Teaching Safety Skills to Autistic Children | WeBearish',
  description: 'How to teach body safety, stranger awareness, traffic safety, and emergency procedures to autistic children using visual supports and explicit instruction.',
  alternates: { canonical: 'https://webearish.com/safety/teaching-safety' },
};

export default function TeachingSafetyPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Safety Guide</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>SAFETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Teaching Safety Skills to Autistic Children
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Safety skills are not instinctive — they are learned. Autistic children often need safety concepts taught explicitly, visually, and with significant repetition. The good news: they can learn these skills. The approach matters.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Core Safety Skills to Teach</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Stop at boundaries', desc: 'Teaching "stop at the curb," "stop at the fence gate," and "stop when an adult says stop" are foundational physical safety skills that require explicit teaching and consistent practice, not assumption.' },
              { label: 'Who to go to for help', desc: 'Identifying "safe strangers" — police officers, store employees with name tags, people with children — gives a concrete framework. Practice this in real environments.' },
              { label: 'Body safety and privacy', desc: 'Autistic children are at significantly elevated risk for abuse and exploitation. Body safety education — private parts, consent, "no secrets from parents" — is not optional.' },
              { label: 'Emergency procedures', desc: 'Calling 911, giving a home address, what to do in a fire — these require explicit teaching, practice, and generalization to different settings.' },
              { label: 'Road safety', desc: 'Stop, look both ways, wait for adult — taught as a routine, practiced repeatedly in context. Some autistic children need this extended to riding bikes and parking lots.' },
              { label: 'What to do when lost', desc: 'Stay in place, go to a safe person, show your ID card — whatever the family plan is, it needs to be taught, practiced, and rehearsed until it is automatic.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Teach Safety Skills Effectively</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Explicit instruction', desc: 'Don\'t assume safety concepts are understood from general experience. Teach them directly: "This is what we do when..." with clear, concrete language.' },
              { label: 'Visual supports', desc: 'Social stories, picture cards, and visual schedules for safety procedures help autistic learners process and retain the information. A visual card in the child\'s backpack showing "what to do if I get lost" is a functional tool.' },
              { label: 'Practice in context', desc: 'Practice stopping at the curb at your actual curb. Practice identifying a police officer when one is present. Generalization requires practice in real settings, not just tabletop learning.' },
              { label: 'Repetition without impatience', desc: 'Safety skills require more repetitions than you expect. This is not a reflection of the child\'s intelligence — it reflects how procedural learning works for many autistic people.' },
              { label: 'Positive reinforcement', desc: 'Celebrate correct safety behavior specifically and immediately. "You stopped at the curb — that was exactly right" is more powerful than general praise.' },
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
            We are not doctors. We are advocates. Teaching safety is a long-term investment that pays off. Start with the skills most relevant to your child's specific risk profile.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Safety Guide →</Link>
            <Link href="/safety/public-spaces" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Public Spaces →</Link>
            <Link href="/safety/elopement" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Elopement →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
