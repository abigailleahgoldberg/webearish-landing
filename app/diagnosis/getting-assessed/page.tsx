import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "How to Get an Autism Evaluation: Three Routes | WeBearish",
  description: "Three routes to autism evaluation: through your pediatrician, private neuropsychologist, and the school system. What each involves and how to access them.",
  alternates: { canonical: "https://webearish.com/diagnosis/getting-assessed" },
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
        <h1 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>How to Get an Autism Evaluation</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Route 1: Through Your Pediatrician</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>The most common starting point for children. Mention your concerns at a well-child visit or request a dedicated appointment. Bring written notes about what you have observed. Ask for an autism screening. If the screen is positive, ask for a referral to a developmental pediatrician. Waitlists are often long. Ask about the wait time and whether they maintain a cancellation list.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Route 2: Private Neuropsychological Evaluation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>A comprehensive neuropsychological evaluation is the most thorough option. It typically takes 6-10 hours across multiple sessions and produces a detailed report. Private evaluations are often not covered by insurance. Costs range from $2,000 to $5,000. Some clinics offer sliding scale fees. University autism centers sometimes offer evaluations at reduced cost.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Route 3: Through the School System</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Any parent can request a school evaluation in writing. The school has 60 days to evaluate. School evaluations are free. They focus on educational eligibility rather than comprehensive clinical assessment, but they can establish eligibility for services and an IEP. A school evaluation and a clinical diagnosis are separate things. You can have one without the other.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Adults Seeking Evaluation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Adult autism evaluation is less systematized and harder to access. Start with your primary care physician or psychiatrist and request a referral. University autism centers often see adults. Find a provider with experience in adult autism and late diagnosis, as the standard criteria were designed primarily for children.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/diagnosis/evaluation-process" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Evaluation Process →</a>
            <a href="/iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>IEP Center →</a>
            <a href="/resources/by-state" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resources by State →</a>
        </div>
      </div>
    </div>
  );
}
