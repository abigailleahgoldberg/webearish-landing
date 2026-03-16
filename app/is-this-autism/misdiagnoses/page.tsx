import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Common Autism Misdiagnoses: What Gets Missed | WeBearish',
  description: 'Autism is frequently misdiagnosed as anxiety, ADHD, OCD, or other conditions. Understanding why this happens and what to do when it does.',
  alternates: { canonical: 'https://webearish.com/is-this-autism/misdiagnoses' },
};

export default function MisdiagnosesPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Is This Autism?</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>IS THIS AUTISM?</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Common Misdiagnoses Before Autism Is Identified
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Many autistic people receive other diagnoses before their autism is identified — sometimes for years or decades. These diagnoses are not necessarily wrong: they often describe real co-occurring conditions. But treating the surface presentations without identifying the underlying autism leaves people without the full understanding they need.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Most Common Pre-Autism Diagnoses</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Anxiety disorder', desc: 'The most common. Autistic people have high rates of anxiety, and anxiety symptoms are visible. The autism driving the anxiety — sensory overwhelm, social unpredictability, demand for masking — often goes unidentified.' },
              { label: 'ADHD', desc: 'Attention, impulsivity, and executive function difficulties overlap with autism significantly. Many autistic people are first diagnosed with ADHD; some are only diagnosed with ADHD and miss the autism entirely.' },
              { label: 'OCD', desc: 'Repetitive behaviors, need for routines, and rigidity in autism can look like OCD. The key distinction: in autism, repetitive behaviors are usually comforting; in OCD, they are driven by distress and the person doesn\'t want to do them.' },
              { label: 'Social anxiety disorder', desc: 'Autistic people often have genuine social difficulties that present as anxiety. Social anxiety disorder may be diagnosed without exploring whether the underlying cause is autism-related sensory and social processing differences.' },
              { label: 'Depression', desc: 'Particularly in adults, especially women. Years of unexplained difficulty, chronic masking, and social isolation create real depression. The autism beneath it may never be explored.' },
              { label: 'Borderline personality disorder (BPD)', desc: 'Particularly in women diagnosed in adulthood. Emotional dysregulation, intense reactions, identity uncertainty, and relationship difficulties in autism can be mislabeled as BPD. BPD-informed treatment approaches are often unhelpful or harmful for autistic people.' },
              { label: 'Oppositional defiant disorder (ODD)', desc: 'Autistic children who resist demands, have meltdowns, or refuse transitions are sometimes labeled as ODD. Behavioral approaches for ODD without addressing the sensory or cognitive roots of the behavior are ineffective.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What to Do If You Suspect Misdiagnosis</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Research what you\'re observing. If the current treatment or framing doesn\'t fit the experience, explore whether autism explains more of the picture.',
              'Request a comprehensive autism evaluation specifically — not a general mental health evaluation.',
              'A current diagnosis doesn\'t prevent an autism evaluation. Co-occurring conditions are the rule, not the exception.',
              'Bring documented history of what hasn\'t worked in prior treatment. This is relevant clinical data.',
              'Seek evaluators with experience in the specific population relevant to your situation — girls, adults, people with ADHD, people with high masking.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. If you've been in treatment for years without meaningful improvement, it's worth asking whether the root cause has been correctly identified.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/is-this-autism/adhd-overlap" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>ADHD Overlap →</Link>
            <Link href="/is-this-autism/checklist" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Signs Checklist →</Link>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Getting a Diagnosis →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
