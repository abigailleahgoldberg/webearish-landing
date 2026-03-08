import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism in Girls: Why It Looks Different | WeBearish',
  description: 'How autism presents in girls versus boys, masking, late diagnosis patterns, what to look for, and how to advocate for a daughter you suspect is autistic.',
  alternates: { canonical: 'https://webearish.com/autism-in-girls' },
};

export default function AutismInGirlsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>DIAGNOSIS AND IDENTITY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autism in Girls: Why It Looks Different
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          For decades, autism research focused almost exclusively on boys. The diagnostic criteria were built from that research. The result is that autism in girls and women is frequently missed, dismissed, or misdiagnosed as something else. Understanding how autism presents in girls is essential for any parent, teacher, or clinician who works with them.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Girls Are Diagnosed Later -- or Not at All</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The historical autism ratio of 4:1 (boys to girls) has shifted as research has improved. Current estimates suggest the actual ratio is closer to 3:1 or even 2:1. The gap largely reflects a diagnostic gap, not a true prevalence gap. Girls are being missed because the tools and criteria used to diagnose autism were built for boys.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Autistic girls are often described as "social" because they can appear to engage socially -- they have studied it, practiced it, and mirrored it back. But that appearance of social ease is often masking: a performance, consciously or unconsciously constructed, that hides significant internal effort and distress.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Girls are also often given other diagnoses first -- anxiety, depression, eating disorders, ADHD, borderline personality disorder -- before autism is considered. By adulthood, many autistic women have had years of treatment for the wrong diagnosis, or multiple diagnoses that were each partially right but missed the underlying picture.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>How Autism Presents Differently in Girls</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Better camouflage of social difficulties', desc: 'Autistic girls often learn to mimic social scripts, make eye contact through learned strategy rather than instinct, and appear more socially fluent. The effort behind the performance is invisible.' },
              { label: 'Focused interests that look "age-appropriate"', desc: 'A boy with an intense interest in train schedules raises flags. A girl with an equally intense interest in horses, dolls, or a specific TV show may be seen as typically engaged. The intensity and quality of the interest is the same -- the topic just passes more scrutiny.' },
              { label: 'Stronger motivation to fit in', desc: 'Social pressure on girls to conform is significant. Many autistic girls work extremely hard to appear normal. That effort is taxing and is often a major driver of anxiety and eventual burnout.' },
              { label: 'Friendship patterns that look functional', desc: 'Autistic girls may have one or two close friends, often taking a follower role in social dynamics. From the outside, this looks like shyness or introversion rather than social difference.' },
              { label: 'Internalizing rather than externalizing', desc: 'Autistic boys are more likely to have visible behavioral dysregulation. Autistic girls are more likely to internalize -- managing distress internally until they collapse at home, often described as "falling apart after a good day."' },
              { label: 'Eating and body differences', desc: 'Selective eating, sensory sensitivities around food, and disordered eating patterns are common in autistic girls and are often treated as separate issues.' },
              { label: 'Sensitivity to sensory input', desc: 'Sensory sensitivities in girls are often attributed to personality ("she\'s just sensitive") rather than recognized as a neurological pattern.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Masking: What It Is and Why It Matters</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Masking -- also called camouflaging -- is the practice of suppressing autistic traits and mimicking neurotypical behavior. Autistic girls mask at higher rates than autistic boys. They learn by observation, practice scripts, suppress stimming in public, and monitor their behavior constantly.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Masking is associated with significant costs: higher rates of anxiety and depression, autistic burnout, delayed or missed diagnosis, and poorer quality of life. A girl who looks fine at school and falls apart at home is often masking all day and finally releasing the pressure in the one place she feels safe.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Reducing the need to mask -- by creating environments where autistic behaviors are accepted rather than corrected -- is one of the most important things adults can do for autistic girls.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Late Diagnosis: What to Expect</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Many autistic girls are not diagnosed until adolescence, early adulthood, or even later. Late diagnosis often comes after a mental health crisis, burnout, a pregnancy, or simply reaching a point where the demands of life exceed the capacity to mask. The diagnosis can bring both relief and grief.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Relief because finally something makes sense. Grief because of the years spent struggling without understanding why. Both are valid. A late diagnosis does not mean someone is "less autistic" -- it means the system failed to recognize them earlier.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Advocate for Your Daughter</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            If you suspect your daughter is autistic, be prepared for pushback. Clinicians may say she is "too social," "too empathetic," or "not like the autistic children I usually see." These responses reflect outdated understanding, not your daughter's actual experience.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Document what you observe at home -- the meltdowns, the exhaustion after school, the sensory reactions, the rigidity. This is important because clinicians often see the masked version.',
              'Seek evaluators who have specific experience with autism in girls and women. Ask directly about their experience.',
              'Request a comprehensive evaluation rather than a screening. Screenings miss autistic girls at high rates.',
              'Trust what you observe over what the school says. Teachers often see a child who is "holding it together" -- they do not see the aftermath.',
              'If one clinician dismisses your concerns, seek a second opinion. Persistence matters.',
              'Connect with communities of autistic women. Their accounts of their childhood experiences may help you recognize your daughter\'s experience in language she has not yet found.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>All Resources →</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>WeBearish Blog →</Link>
            <Link href="/contact" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Contact Us →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/getting-a-diagnosis" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Getting a Diagnosis →</Link>
            <Link href="/autism-diagnosis-cost" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Diagnosis Cost Guide →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism and Anxiety →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
