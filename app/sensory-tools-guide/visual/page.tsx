import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Visual Sensory Tools for Autistic Children | WeBearish',
  description: 'A guide to visual sensory tools that help autistic children regulate, focus, and feel safe — from visual schedules to light-based calming tools.',
  alternates: { canonical: 'https://webearish.com/sensory-tools-guide/visual' },
};

export default function VisualSensoryToolsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/sensory-tools-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sensory Tools Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Visual Tools</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>SENSORY TOOLS GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Visual Sensory Tools
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Visual sensory processing differences are extremely common in autism. Some autistic children are visually hypersensitive — overwhelmed by bright lights, busy patterns, or visual clutter. Others are hyposensitive — drawn to bright colors, spinning objects, and visual stimulation. Both profiles benefit from intentional visual environments and targeted tools that support regulation, comprehension, and daily function.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes only. Consult an occupational therapist for individualized sensory support.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Understanding Visual Sensory Differences</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Visual processing in autism is not simply about how well the eyes see — it is about how the brain interprets visual information. Many autistic children experience one or more of the following:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Light sensitivity', desc: 'Fluorescent lighting is one of the most commonly reported sensory challenges. The flicker rate of fluorescent bulbs — often imperceptible to neurotypical people — can cause headaches, nausea, and significant distress in visually hypersensitive autistic children.' },
              { label: 'Visual overwhelm from clutter', desc: 'Busy visual environments — cluttered classrooms, patterned wallpaper, overstuffed shelves — can make it extremely difficult to focus on a task. Some autistic children cannot process verbal instructions when there is too much competing visual input.' },
              { label: 'Color sensitivity', desc: 'Bright, saturated colors can be overstimulating for some autistic children. Others are soothed by specific colors and distressed by others. Individual variation is wide.' },
              { label: 'Visual seeking', desc: 'Some autistic children seek visual stimulation — they may stare at spinning objects, look at lights, track patterns, or enjoy visual media intensely. This is not a problem to be eliminated; it is a form of sensory regulation.' },
              { label: 'Peripheral processing differences', desc: 'Many autistic children process information better through peripheral vision than direct gaze. This is one reason why insisting on eye contact is counterproductive — it may actually interfere with the child\'s ability to process information.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Visual Tools for Calming and Regulation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Lava lamps and liquid motion bubblers', desc: 'Slow, predictable, repetitive visual movement is deeply calming for many autistic children. Lava lamps and liquid motion toys provide sustained, low-intensity visual stimulation that supports regulation without overwhelming.' },
              { label: 'Fiber optic lights', desc: 'A bundle of fiber optic strands that shift colors slowly. Extremely popular in sensory rooms and calm-down corners. The combination of slow movement and soft light is effective for many autistic children during dysregulation.' },
              { label: 'LED color-changing lights', desc: 'Smart bulbs or light strips that allow you to set calming colors (blue, green, soft purple) in a room or corner designated for regulation. Being able to control the color gives children agency in their own regulation environment.' },
              { label: 'Sunglasses and tinted lenses', desc: 'Tinted glasses reduce glare and the intensity of light without blocking vision. Some children find specific tints particularly calming. Irlen syndrome — a visual processing condition associated with autism — is often addressed with colored overlays or tinted lenses.' },
              { label: 'Visual timers', desc: 'Time is abstract. Visual timers — such as Time Timer — make time concrete by showing a shrinking colored disc. This reduces the anxiety of waiting because the child can see exactly how much time remains. Invaluable for transitions.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Visual Supports for Organization and Comprehension</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Visual supports use the visual processing strengths many autistic children have to support understanding, communication, and daily structure.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Visual schedules — photographs or icons representing each part of the day — reduce transition anxiety and support independence.',
              'First-then boards show a two-step sequence ("First shoes, then park") and are useful for children who struggle with longer schedules.',
              'Visual choice boards allow children to select from options using pictures, reducing the language demand of decision-making.',
              'Color-coded organizational systems (color per subject, color per day) reduce the cognitive load of organization for school-age autistic children.',
              'Written scripts or sentence starters provide visual support for social situations that require language generation under pressure.',
              'Visual boundary markers — rugs, tape lines, colored areas — make physical space clear and predictable.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Modifying the Visual Environment</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Replace or cover fluorescent lights with warm LED bulbs. Use dimmer switches.',
              'Create visual calm corners with minimal visual input — neutral colors, clean surfaces, low lighting.',
              'Reduce visual clutter in the child\'s primary work space. Covered shelving and organized bins reduce overwhelm.',
              'In school, advocate for a seat away from windows (glare) and near the front (less competing visual input from classmates).',
              'Use solid colors rather than busy patterns in bedding, rugs, and clothing when possible.',
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
            <Link href="/sensory-tools-guide/auditory" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Auditory Tools →</Link>
            <Link href="/sensory-tools-guide/tactile" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tactile Tools →</Link>
            <Link href="/sensory-tools-guide/budget" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tools on a Budget →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Hub →</Link>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdowns →</Link>
            <Link href="/autism-and-food" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism and Food →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
