import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proprioceptive & Vestibular Sensory Tools | WeBearish',
  description: 'How proprioceptive and vestibular input helps autistic children regulate, and the tools that deliver it — swings, trampolines, weighted gear, and more.',
  alternates: { canonical: 'https://webearish.com/sensory-tools-guide/proprioceptive' },
};

export default function ProprioceptiveSensoryToolsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/sensory-tools-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sensory Tools Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Proprioceptive &amp; Vestibular</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>SENSORY TOOLS GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Proprioceptive &amp; Vestibular Tools
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Proprioception and vestibular processing are the hidden senses — they do not get as much attention as sight, sound, and touch, but they are foundational to regulation, body awareness, and daily function. Many autistic children have significant differences in how they process proprioceptive input (the sense of the body's position and pressure) and vestibular input (the sense of movement and balance). Supporting these sensory systems can transform a child's ability to be present, calm, and ready to learn.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. Work with an occupational therapist to design a sensory diet tailored to your child.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Proprioception and Vestibular Input Do</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Proprioception: the body sense', desc: 'Proprioception comes from receptors in muscles, joints, and connective tissue. It tells your brain where your body is in space without looking. Autistic children who are proprioceptively seeking will crash into furniture, jump constantly, hang heavily on caregivers, or love being squeezed. This is their nervous system asking for the input it needs.' },
              { label: 'Vestibular: the movement sense', desc: 'The vestibular system is in the inner ear and processes movement, gravity, and balance. Children who seek vestibular input spin, rock, swing, and bounce. Children who are vestibular-sensitive may be afraid of heights, resist movement activities, or become nauseous in cars.' },
              { label: 'Why these senses affect behavior', desc: 'Proprioceptive and vestibular input have a directly calming or alerting effect on the nervous system. Heavy work (pushing, pulling, carrying, climbing) is deeply regulating for most autistic children because it provides high doses of proprioceptive input. This is not a theory — it is why occupational therapists build proprioceptive activities into sensory diets.' },
              { label: 'The regulatory effect', desc: 'A child who is given adequate proprioceptive input throughout the day is significantly more available for learning, social interaction, and self-regulation than a child who has been sitting still for hours. Movement is not a reward — it is a sensory need.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Proprioceptive and Vestibular Tools</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Therapy swing / indoor swing', desc: 'A platform swing, hammock swing, or therapy pod swing provides sustained vestibular input in a controlled, predictable way. Indoor swings can be hung from a doorframe or ceiling beam. This is one of the highest-impact regulation tools for children who crave movement.' },
              { label: 'Mini trampoline / rebounder', desc: 'Jumping is among the most effective proprioceptive activities available. A small indoor trampoline gives children access to this regulatory input without needing outdoor access. Many children jump as a self-regulation strategy — provide the equipment rather than stopping the behavior.' },
              { label: 'Crash pad / bean bag crash zone', desc: 'A large foam crash pad or heavy bean bag provides a safe place to crash, roll, and receive deep pressure. Popular in sensory rooms and calm-down corners. Crashing into soft surfaces delivers significant proprioceptive input.' },
              { label: 'Compression vest', desc: 'A compression vest provides continuous proprioceptive input to the torso throughout the day. It can be worn under clothing and works particularly well for children who struggle to stay regulated during long school days.' },
              { label: 'Weighted backpack or vest', desc: 'Small amounts of weight (no more than 5-10% of body weight) carried in a backpack or worn as a vest provide proprioceptive input through the joints and muscles. Always discuss weight amounts with an OT before using this tool.' },
              { label: 'Climbing equipment', desc: 'Indoor climbing walls, climbing frames, or rope ladders provide proprioceptive input through the upper body. Many autistic children are natural climbers — provide safe surfaces for this rather than preventing climbing.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Heavy Work Activities (No Equipment Needed)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Carrying a heavy backpack, grocery bags, or laundry basket.',
              'Pushing a loaded cart or laundry hamper.',
              'Wheelbarrow walking (child walks on hands while adult holds legs).',
              'Wall push-ups, chair push-ups, or desk push-ups during school.',
              'Pulling a sled, wagon, or resistance band.',
              'Animal walks: bear walk, crab walk, frog jumps.',
              'Kneading dough, pushing clay, or squeezing putty.',
              'Doing chair sits: child raises themselves off chair using armrests.',
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
            <Link href="/sensory-tools-guide/tactile" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tactile Tools →</Link>
            <Link href="/sensory-tools-guide/visual" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Visual Tools →</Link>
            <Link href="/sensory-tools-guide/budget" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tools on a Budget →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Hub →</Link>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdowns →</Link>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
