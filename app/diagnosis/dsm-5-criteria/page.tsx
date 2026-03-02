import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "DSM-5 Autism Criteria Explained Simply | WeBearish",
  description: "The DSM-5 autism diagnostic criteria in plain language. What clinicians look for, what the levels mean, and what the criteria miss.",
  alternates: { canonical: "https://webearish.com/diagnosis/dsm-5-criteria" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Diagnosis Guide
        </Link>
        <div style={{ marginTop: 24, marginBottom: 20, padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>
          For informational purposes only. Not medical advice. Consult a licensed professional.
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>DSM-5 Autism Criteria in Plain Language</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Two Core Areas</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>DSM-5 autism diagnosis requires persistent differences in two areas: social communication and interaction, and restricted or repetitive patterns of behavior, interests, or activities. These must be present from the early developmental period, cause significant impairment, and not be better explained by another condition.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Area 1: Social Communication</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Three domains are required: back-and-forth social interaction differences, nonverbal communication differences (eye contact, body language, facial expressions), and difficulty developing or maintaining relationships. All three must be present.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Area 2: Restricted and Repetitive Behaviors</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>At least two of four types are required: repetitive movements or speech (stimming, echolalia), insistence on sameness, highly restricted fixated interests, and sensory hyper- or hyporeactivity. The inclusion of sensory criteria in DSM-5 was a significant change from DSM-IV.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Levels and Their Limitations</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>DSM-5 includes three support levels. Level 1 requires support. Level 2 requires substantial support. Level 3 requires very substantial support. These levels are widely criticized for oversimplifying a complex picture. A person's presentation varies across settings and time. Levels do not predict intelligence, communication ability, or quality of life.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What the Criteria Miss</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>The DSM-5 criteria were developed primarily from research on white males diagnosed in childhood. They describe that population more accurately than women, girls, people of color, and late-diagnosed individuals who mask effectively. Internal experiences like burnout, alexithymia, and double empathy are largely invisible to the diagnostic framework.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/diagnosis/evaluation-process" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Evaluation Process →</a>
            <a href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Is This Autism? →</a>
            <a href="/glossary/masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>What Is Masking? →</a>
        </div>
      </div>
    </div>
  );
}
