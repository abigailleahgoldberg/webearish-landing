import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Creating a Low-Anxiety Home for Autistic Children | WeBearish',
  description: 'How to design your home environment, daily routines, and family culture to reduce anxiety for your autistic child — practical and achievable strategies.',
  alternates: { canonical: 'https://webearish.com/autism-and-anxiety/at-home' },
};

export default function AnxietyAtHomePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-and-anxiety" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Autism &amp; Anxiety</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Low-Anxiety Home</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM &amp; ANXIETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Creating a Low-Anxiety Home
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Home should be the place where your autistic child can exhale. For many autistic children who spend significant energy managing at school and in the community, home is their recovery space. The environment you create — the physical space, the daily routines, the emotional tone of your household — directly affects your child's baseline anxiety level. Here is how to make home feel genuinely safe.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for diagnosis and treatment.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Physical Environment</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Sensory load at home is within your control in a way that school environments are not. Small environmental adjustments can meaningfully reduce your child's anxiety baseline.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'A designated calm space', desc: 'Every autistic child benefits from having one space in the home that is predictably calm, low-stimulus, and theirs. This could be a corner of their bedroom, a tent, a closet fitted out comfortably, or any space that is not shared and not entered without permission. This is not a punishment space — it is a regulation space, and the child should be able to access it on their own terms.' },
              { label: 'Lighting adjustments', desc: 'Fluorescent lighting is a common sensory trigger. Where possible, switch to warm LED bulbs or natural light. Dimmers allow the child to control intensity. Blackout curtains in the bedroom eliminate unpredictable light changes that can disrupt sleep and increase anxiety.' },
              { label: 'Sound management', desc: 'Unexpected sounds are high-anxiety triggers. Sound machines or fans in common areas can reduce the impact of sudden noise. Identify which sounds in your home most affect your child and address those specifically — the TV at high volume, certain appliances, neighborhood noise.' },
              { label: 'Organized, predictable storage', desc: 'Clear visual organization of where things live reduces the low-level anxiety of not knowing where things are. Labeled bins, consistent locations for belongings, and visual reminders of where things go reduce the cognitive and emotional load of navigating the home environment.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Routine and Predictability</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Routine is not rigidity — it is a genuine anxiety management tool for autistic children. Predictable sequences reduce the number of uncertainty moments in a day, lowering baseline anxiety. The structure does not need to be minute-by-minute, but clear anchors help.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Consistent wake and sleep times — the body clock contributes to emotional regulation',
              'Predictable mealtimes at regular times each day',
              'A visual daily schedule posted where your child can reference it throughout the day',
              'Advance warning of transitions — "in ten minutes we are leaving" — using timers when verbal warnings are not enough',
              'Consistent afterschool decompression time with no demands for the first 30-60 minutes home',
              'Predictable evening wind-down sequence leading to bedtime',
              'Advance notice of anything that will change the normal routine, as far in advance as possible',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Emotional Tone of Your Home</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Your child's nervous system is affected by the emotional climate in your household. This is not blame — it is neuroscience. When the home environment is high-conflict, unpredictable, or tense, autistic children feel it acutely. Some things that matter:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Name emotions in the home', desc: 'When family members openly name their own emotional states — "I\'m feeling frustrated right now, so I\'m going to take a minute" — autistic children learn both that emotions are speakable and what regulated emotional management looks like.' },
              { label: 'Reduce demands during recovery time', desc: 'Homework battles, sibling conflicts, and additional demands immediately after school are high-anxiety triggers. Where possible, reduce the demand density in the hours immediately following school.' },
              { label: 'Repair after conflict', desc: 'When conflicts or dysregulation happen at home, explicit repair — returning to the interaction after everyone has regulated, acknowledging what happened, and reconnecting — teaches the child that relationships survive difficulty. This reduces the anxiety about the relationship that often follows meltdowns.' },
              { label: 'Protect your own regulated state', desc: 'Parenting an anxious autistic child is exhausting. Your own regulation is a direct input to your child\'s regulation. Build in what you need to stay regulated — even imperfectly.' },
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
            <Link href="/autism-and-anxiety/at-school" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Anxiety at School →</Link>
            <Link href="/autism-and-anxiety/coping" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Coping Strategies →</Link>
            <Link href="/autism-and-anxiety/types" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Types of Anxiety →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Guide →</Link>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide →</Link>
            <Link href="/parents" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parents Hub →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
