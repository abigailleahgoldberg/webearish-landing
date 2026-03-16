import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism and ADHD Overlap: Understanding AuDHD | WeBearish',
  description: 'How autism and ADHD overlap, what makes them different, why they are frequently confused, and what AuDHD means for diagnosis and support.',
  alternates: { canonical: 'https://webearish.com/is-this-autism/adhd-overlap' },
};

export default function ADHDOverlapPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Is This Autism?</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>IS THIS AUTISM?</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autism and ADHD: The Overlap (AuDHD)
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Autism and ADHD co-occur in 50-70% of autistic people. The combination — informally called AuDHD — is not simply autism plus ADHD. The two conditions interact in ways that create a distinct presentation that can be harder to identify and support than either alone.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Where They Overlap</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Executive function difficulties', desc: 'Both conditions affect planning, working memory, task-switching, and follow-through. In AuDHD, executive dysfunction is often more pronounced than in either condition alone.' },
              { label: 'Emotional dysregulation', desc: 'Intense emotional responses, difficulty tolerating frustration, and emotional flooding occur in both conditions. Rejection Sensitive Dysphoria (RSD) is particularly common.' },
              { label: 'Attention differences', desc: 'Both involve attention that works differently from the neurotypical norm — though in different ways. Autistic hyperfocus and ADHD hyperfocus are both real and can look similar.' },
              { label: 'Sensory sensitivity', desc: 'Both conditions involve sensory processing differences, particularly sound and touch sensitivity.' },
              { label: 'Social challenges', desc: 'ADHD can cause social impulsivity, missing social cues from inattention, and interrupting. Autism involves different social processing. Together, social navigation can be more complex.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Key Differences</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Social motivation', desc: 'ADHD does not inherently affect social motivation. Autistic people may have fundamentally different social interests and processing. An impulsive person who talks over others (ADHD) is different from someone who doesn\'t intuitively understand unspoken social rules (autism).' },
              { label: 'Repetitive behaviors and routines', desc: 'The strong need for routine, sameness, and the intense focus on specific interests are features of autism, not ADHD. ADHD typically involves variety-seeking and difficulty maintaining routines.' },
              { label: 'Sensory processing depth', desc: 'Sensory differences in autism are typically more pervasive and tied to the core neurological profile. In ADHD, sensory sensitivity is present but often less central.' },
              { label: 'Hyperfocus vs. special interests', desc: 'ADHD hyperfocus tends to be task-activated — intense attention to any engaging activity. Autistic special interests tend to be topically specific and persistent over time.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Both Diagnoses Matter</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Getting both diagnoses when both are present matters because the support approaches are different. ADHD responds well to stimulant medication that autism alone does not necessarily require. Autism accommodations around sensory environment and social demands address needs that ADHD treatment does not. AuDHD people who receive only one diagnosis often feel partially understood — like one piece was named but not the whole picture.
          </p>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. If you've been diagnosed with ADHD but something still doesn't fit, autism may be the missing piece. Pursue evaluation for both if the picture feels incomplete.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/conditions/adhd" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>ADHD and Autism →</Link>
            <Link href="/is-this-autism/misdiagnoses" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Common Misdiagnoses →</Link>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Getting a Diagnosis →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
