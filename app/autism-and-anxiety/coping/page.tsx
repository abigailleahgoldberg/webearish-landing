import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coping Strategies for Anxiety in Autistic Children | WeBearish',
  description: 'Practical, autism-specific coping strategies for anxiety that actually work — sensory regulation, co-regulation, visual supports, movement, and more.',
  alternates: { canonical: 'https://webearish.com/autism-and-anxiety/coping' },
};

export default function AnxietyCopingPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-and-anxiety" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Autism &amp; Anxiety</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Coping Strategies</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM &amp; ANXIETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Coping Strategies That Actually Work
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Generic anxiety advice — "take deep breaths," "think positive" — is often useless for autistic children. Effective coping strategies for autistic children work with the sensory system, leverage predictability, and respect how autistic brains actually process stress. Here is what actually helps.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for diagnosis and treatment.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Start with the Body, Not the Brain</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Autistic anxiety often starts in the nervous system, not in thoughts. Trying to reason an anxious autistic child out of their state is rarely effective when they are already dysregulated. Regulation comes first — and for most autistic children, that means working through the body and the senses.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Sensory regulation tools', desc: 'Weighted blankets, compression vests, chewable jewelry, fidgets, and noise-canceling headphones can reduce the sensory load that feeds anxiety. Identify your child\'s specific sensory profile — what calms them is individual. Some children need more input (heavy work, deep pressure) while others need less (a quiet dark room).' },
              { label: 'Movement and heavy work', desc: 'Proprioceptive input — the sensation from muscles and joints during movement — is one of the most effective anxiety regulators for many autistic children. Jumping, carrying heavy items, pushing against a wall, climbing, or using a therapy swing can all help bring the nervous system down. Keep movement available as a coping option, not a reward.' },
              { label: 'Controlled breathing — done right', desc: 'Standard "take a deep breath" instructions often frustrate autistic children. Try visual breathing tools: blowing bubbles, blowing through a straw into water, or using a visual breathing spinner. The exhale matters more than the inhale — a longer exhale activates the parasympathetic system. Make it concrete and visual, not abstract.' },
              { label: 'Cold water and temperature', desc: 'Splashing cold water on the face or holding an ice pack activates the dive reflex and slows the heart rate. This is a body-level intervention that works for some children when they are already highly activated. Some children find it soothing; test it during calm times before offering it as a strategy.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 18px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Co-Regulation: Your Calm Is the Tool</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Young autistic children — and many older ones — rely on co-regulation: borrowing calm from a regulated adult. Your own nervous system state directly affects your child's ability to regulate. This is not about being perfect; it is about understanding that your regulated presence is itself an intervention.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Lower your voice and slow your speech during your child\'s anxious moments — dysregulation is contagious in both directions',
              'Reduce demands during peak anxiety — adding demands while already overwhelmed deepens the spiral',
              'Offer your presence without requiring interaction — sitting near without talking can be deeply regulating',
              'Regulate yourself first — step away briefly if you feel yourself escalating, when safe to do so',
              'Avoid asking "why are you anxious?" during the anxious moment — analysis requires a regulated brain',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>–</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Visual and Structural Supports</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Predictability and visual structure reduce anxiety at the source by removing the uncertainty that feeds it. These are not just school accommodations — they are powerful daily anxiety management tools.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Visual daily schedules', desc: 'A picture or word schedule showing the day\'s sequence tells the anxious brain what to expect. Post it at eye level. Update it when things change — with advance warning. The schedule is not a prison; it is a map.' },
              { label: 'First-Then boards', desc: '"First [difficult thing], then [preferred thing]." This concrete structure helps anxious children get through challenging situations because they can see the endpoint. It transforms open-ended dread into a finite sequence.' },
              { label: 'Worry time', desc: 'A designated time (10-15 minutes) to discuss worries, away from bedtime or mealtimes. Outside of this time, redirect worry to the scheduled window. This contains anxiety rather than suppressing or feeding it.' },
              { label: 'Feelings charts and check-in tools', desc: 'Many autistic children are alexithymic — they have difficulty identifying their own emotional states. Visual emotion scales (the "zones of regulation," a 1-10 scale, or an emoji chart) help children identify and communicate what is happening inside, which is the first step toward coping.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Special Interests as Anxiety Anchors</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Special interests are not just hobbies — for many autistic people, they are a primary source of regulation, identity, and joy. Engaging with a special interest during or after stressful events can bring the nervous system back into balance. Honor this. Build in special interest time after anxiety-provoking situations as a genuine recovery strategy — not a reward for compliance.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Keep special interest materials accessible during stressful events (waiting rooms, airports, transitions)',
              'Allow stimming related to special interests — it serves a regulatory function',
              'Use special interest content (videos, books, objects) as a recovery tool after difficult experiences',
              'Connect anxiety management tools to special interests — a dinosaur-themed calm-down kit, a space-themed breathing exercise',
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
            <Link href="/autism-and-anxiety/types" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Types of Anxiety →</Link>
            <Link href="/autism-and-anxiety/at-home" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Low-Anxiety Home →</Link>
            <Link href="/autism-and-anxiety/at-school" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Anxiety at School →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Guide →</Link>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown vs. Tantrum →</Link>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
