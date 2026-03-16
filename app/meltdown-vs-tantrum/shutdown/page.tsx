import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shutdowns: The Silent Meltdown | WeBearish',
  description: 'Autistic shutdowns are as real as meltdowns but less visible. What they look like, why they happen, and how to support a child in shutdown.',
  alternates: { canonical: 'https://webearish.com/meltdown-vs-tantrum/shutdown' },
};

export default function ShutdownPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/meltdown-vs-tantrum" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Meltdowns</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Shutdowns</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>MELTDOWNS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Shutdowns: The Silent Meltdown
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          When most people think of autism overload, they picture a visible meltdown — crying, yelling, physical distress. But many autistic people respond to overload with the opposite: they go quiet. They go still. They go somewhere else inside themselves. This is a shutdown, and it is equally a sign of nervous system overwhelm — just expressed inward rather than outward.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. If shutdowns are frequent or prolonged, consult a professional familiar with autism and trauma responses.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What a Shutdown Looks Like</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Shutdowns can be misread as compliance, calm, depression, or defiance. Recognizing them requires knowing your child's baseline and understanding what these signs actually mean:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Going nonverbal or minimally verbal', desc: 'A child who normally speaks may stop speaking entirely or reduce to single words. In autistic adults, this is sometimes called "losing words." It is not a choice — the language processing system has been taken offline by the overload response.' },
              { label: 'Flat affect and decreased responsiveness', desc: 'The face goes blank. Eye contact drops. The child appears to look through rather than at things. Responses to their name slow or stop. This is often misread as "finally calming down" when in fact the child is in significant distress.' },
              { label: 'Physical stillness or slow movement', desc: 'The child may sit or lie down without moving. They may stare at nothing. Their body may appear heavy or unresponsive. This is the freeze response — the nervous system shutting down input processing.' },
              { label: 'Withdrawal and hiding', desc: 'A child in shutdown may seek small, enclosed, dark, or quiet spaces. Under tables, in closets, behind furniture. This is protective — reducing input is the nervous system\'s only available strategy.' },
              { label: 'Unresponsiveness to normally preferred things', desc: 'A child in shutdown may not respond to their favorite snack, preferred toy, or beloved person. This distinguishes shutdown from typical tiredness — preferred things usually get a response.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Shutdowns Happen</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Shutdowns are the nervous system's protective response when fight-or-flight is not available or effective. They are sometimes the response to prolonged, cumulative overload — hours or days of sensory or social demands — rather than a single acute trigger. Autistic people who mask heavily (particularly autistic girls and women) are especially prone to shutdowns that appear after a sustained period of performance.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Shutdowns are also common in autistic people who have learned that expressing distress outwardly has negative consequences. If meltdowns have historically been met with punishment, shame, or restraint, the nervous system may shift toward shutdown as the less dangerous option.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Support a Child in Shutdown</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Reduce all demands immediately', desc: 'Do not ask questions, set expectations, or initiate tasks. Remove external demands entirely until the child returns to baseline.' },
              { label: 'Do not force communication', desc: 'A child in shutdown who is losing or has lost speech cannot produce language on command. Requiring verbal responses adds pressure and extends the shutdown. Use yes/no signals, pointing, or simply wait.' },
              { label: 'Allow and support the withdrawal', desc: 'If the child has gone to a quiet space, let them be there. Provide the option of comfort items or preferred sensory input without requiring engagement.' },
              { label: 'Stay present at a low level', desc: 'Being physically nearby without demands can be grounding. "I\'m here. Take all the time you need." Then be quiet and still.' },
              { label: 'Do not interpret silence as consent', desc: 'A child in shutdown cannot advocate for themselves. Do not make plans, take actions, or make decisions for them during this state because they are not able to respond does not mean they are agreeable.' },
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
            <Link href="/meltdown-vs-tantrum/before" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Warning Signs →</Link>
            <Link href="/meltdown-vs-tantrum/during" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>During a Meltdown →</Link>
            <Link href="/meltdown-vs-tantrum/after" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>After a Meltdown →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown Hub →</Link>
            <Link href="/autism-in-girls/masking" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Masking in Girls →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism and Anxiety →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
