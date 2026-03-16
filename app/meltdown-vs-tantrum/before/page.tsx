import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Before a Meltdown: Warning Signs | WeBearish',
  description: 'Recognize the early warning signs of an autistic meltdown so you can intervene before the point of no return. What to look for and what to do.',
  alternates: { canonical: 'https://webearish.com/meltdown-vs-tantrum/before' },
};

export default function BeforeMeltdownPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/meltdown-vs-tantrum" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Meltdowns</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Before a Meltdown</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>MELTDOWNS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Before a Meltdown: Warning Signs
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Meltdowns do not happen without warning. They are the end point of a sensory and emotional escalation that builds over time — sometimes minutes, sometimes hours. Learning to read the early warning signs specific to your child is one of the most powerful things you can do to prevent full meltdowns, reduce their frequency, and protect both your child and yourself from the cost of reaching that breaking point.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. Support strategies should be developed with professionals who know your child.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Escalation Curve</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Most autism educators and therapists describe meltdowns in terms of an escalation cycle with distinct phases. Understanding the phases helps you intervene at the right time:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Baseline / calm phase', desc: 'The child is regulated and accessible. This is the time to teach coping strategies, use visual schedules, and build the skills that will be unavailable during escalation. Prevention happens here.' },
              { label: 'Trigger phase', desc: 'Something introduces stress — a sensory input, a transition, a denied request, an unexpected change, or accumulated sensory load from earlier in the day. The trigger may not be obvious to observers.' },
              { label: 'Escalation phase', desc: 'The nervous system begins to ramp up. Warning signs appear here. This is the intervention window. Catching escalation early and responding supportively can de-escalate before the point of no return.' },
              { label: 'Meltdown phase', desc: 'The nervous system has crossed a threshold. The child is no longer in a state where reasoning, redirecting, or teaching is possible. The only goal now is safety and reducing input.' },
              { label: 'Recovery phase', desc: 'After the meltdown peaks, the nervous system begins to come down. This phase is often fragile — a second trigger during early recovery can restart escalation.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Common Warning Signs</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Warning signs vary by child. These are the most commonly reported early escalation signals in autistic children:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Increased stimming — rocking harder, hand flapping more rapidly, pacing, or new repetitive behaviors appearing.',
              'Covering ears, shielding eyes, or withdrawing physically from the environment.',
              'Reduced or absent eye contact (for children who typically make some).',
              'Shorter responses or going nonverbal — becoming less communicative than baseline.',
              'Increased requests for preferred items or comfort objects.',
              'Rigid thinking emerging — getting stuck, resisting small changes, more insistence than usual.',
              'Flushed face, widened eyes, faster breathing — physical signs of nervous system activation.',
              'Increased scripting or repetitive language.',
              'Withdrawing to a corner, under a table, or into a closet — seeking refuge.',
              'Irritability or frustration with minor things that wouldn\'t normally cause distress.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What to Do in the Escalation Window</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Reduce input immediately', desc: 'Lower your voice. Move to a quieter, less stimulating environment. Turn off screens, music, or other background input. The nervous system is already overwhelmed — add nothing more.' },
              { label: 'Do not add demands', desc: 'This is not the time to address what triggered the escalation. New demands during escalation accelerate the climb. Even reasonable expectations become the next stressor.' },
              { label: 'Offer access to regulation tools', desc: 'The sensory tools the child normally uses for regulation — fidgets, headphones, weighted items, a swing — are most needed now. Offer without insisting.' },
              { label: 'Use minimal language', desc: 'Long explanations, reasoning, and emotional conversations are not accessible during escalation. Short, calm, predictable phrases. Or none at all.' },
              { label: 'Use a designated calm space if available', desc: 'If you have a designated calm-down area, guide the child there now. The familiarity and low-input environment of a prepared space can interrupt the escalation curve.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Building Your Child's Personal Warning Sign Map</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 12 }}>
            No two autistic children escalate identically. Keep a simple log after each meltdown: what happened before, what signs appeared, how long the escalation lasted, what helped or made it worse. Over time you will identify your child's unique escalation signature — and become much faster at catching it.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Share this map with everyone who cares for your child: teachers, grandparents, therapists, school aides. Consistency in recognizing and responding to early warning signs across all settings dramatically reduces meltdown frequency.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum/during" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>During a Meltdown →</Link>
            <Link href="/meltdown-vs-tantrum/after" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>After a Meltdown →</Link>
            <Link href="/meltdown-vs-tantrum/shutdown" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Shutdowns →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown Hub →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism and Anxiety →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
