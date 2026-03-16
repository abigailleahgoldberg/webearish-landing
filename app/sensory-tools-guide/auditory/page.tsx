import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auditory Sensory Tools for Autistic Children | WeBearish',
  description: 'Noise-canceling headphones, white noise, and other auditory tools to help autistic children manage sound sensitivity and auditory overwhelm.',
  alternates: { canonical: 'https://webearish.com/sensory-tools-guide/auditory' },
};

export default function AuditorySensoryToolsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/sensory-tools-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sensory Tools Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Auditory Tools</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>SENSORY TOOLS GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Auditory Sensory Tools
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Sound sensitivity is one of the most commonly reported sensory challenges in autism. Many autistic children experience sound more intensely, more broadly, or with less ability to filter background noise than neurotypical children. For some, sound sensitivity is the single largest barrier to participation in school, community, and family life. The right auditory tools can change daily experience dramatically.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes only. Work with an occupational therapist for individualized sensory support planning.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How Auditory Processing Works Differently in Autism</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Hyperacusis', desc: 'Heightened sensitivity to everyday sounds — vacuum cleaners, hand dryers, fire alarms, crowd noise — that other people find tolerable. For a child with hyperacusis, these sounds are genuinely painful, not just uncomfortable. This is a real neurological difference, not behavioral opposition.' },
              { label: 'Difficulty filtering background noise', desc: 'The neurotypical brain automatically filters relevant from irrelevant sounds. Many autistic brains process all incoming sound at equal priority, making concentration in noisy environments extremely difficult. A cafeteria or classroom is a wall of sound with no hierarchy.' },
              { label: 'Sound-triggered distress and meltdowns', desc: 'For some autistic children, specific sounds (certain pitches, sudden loud sounds, or even specific voices) can trigger immediate distress responses that look like behavioral problems but are sensory overwhelm.' },
              { label: 'Auditory seeking', desc: 'Some autistic children seek auditory input — they make repetitive sounds, listen to the same song or video repeatedly, or are drawn to specific frequencies. This is regulation, not perseveration to eliminate.' },
              { label: 'Auditory processing disorder', desc: 'Some autistic individuals also have auditory processing disorder (APD), meaning the brain has difficulty interpreting what the ears hear, even when hearing is technically normal. APD adds another layer to auditory challenges.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Noise Reduction Tools</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Noise-canceling headphones', desc: 'Active noise-canceling headphones (like Sony, Bose, or children-specific brands like Puro Sound) use microphones and electronics to reduce ambient sound. These are the highest-impact auditory tool for many autistic children. Look for models comfortable enough to wear for hours.' },
              { label: 'Ear defenders / ear protection', desc: 'Passive ear defenders (similar to what construction workers use) provide high decibel reduction without electronics. More affordable than active noise-canceling. Brands like Peltor and Alpine make children\'s versions. Excellent for specific high-noise situations like events, haircuts, or fireworks.' },
              { label: 'Foam earplugs', desc: 'Inexpensive and portable. Useful for unexpected noise situations. Many children find foam earplugs uncomfortable for extended wear, but they are a valuable backup to always have available.' },
              { label: 'Loop or Flare earplugs', desc: 'Newer silicone earplugs designed for sensory sensitivity — they reduce volume without muffling sound as significantly as foam. More socially subtle than over-ear protection. Loop earplugs come in children\'s sizes and are reusable.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Sound Tools for Regulation and Calming</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'White noise machines mask inconsistent environmental sounds with constant, predictable audio — essential for sleep and focus.',
              'Brown noise and pink noise are variants that many autistic children find more calming than white noise. Apps and smart speakers make it easy to test different types.',
              'Nature sounds (rain, ocean waves, forest sounds) work for many children as calming auditory backgrounds during rest or focus time.',
              'Weighted blankets combined with calming audio create a full-body regulation experience — proprioceptive and auditory together.',
              'Dedicated listening tools — a child-controlled audio player loaded with preferred calming music — give children agency in their own regulation.',
              'Noise machines in the car during driving reduce the unpredictability of traffic sound, which can be a significant source of road anxiety for auditorily sensitive children.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>School and Community Strategies</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Headphones are a legitimate accommodation and can be written into an IEP — advocate for this if your child needs sound reduction to access learning.',
              'Ask about carpet and acoustic panels in the classroom. Hard floors amplify sound significantly.',
              'Seat away from high-traffic noise sources (hallway doors, HVAC vents, the cafeteria).',
              'Prepare your child with audio warnings before known loud events: assemblies, fire drills, birthday songs.',
              'In community spaces, scope exits and quiet zones before events. Give your child permission to leave and use their headphones whenever needed.',
              'Always carry a pair of ear defenders in the backpack or diaper bag for unexpected noise situations.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide/visual" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Visual Tools →</Link>
            <Link href="/sensory-tools-guide/tactile" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tactile Tools →</Link>
            <Link href="/sensory-tools-guide/budget" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tools on a Budget →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Hub →</Link>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdowns →</Link>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Resources →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
