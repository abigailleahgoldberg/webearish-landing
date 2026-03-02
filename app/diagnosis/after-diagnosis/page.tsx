import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "What to Do After an Autism Diagnosis | WeBearish",
  description: "A compassionate guide to the days and weeks after an autism diagnosis. What you might feel, what to do next, and what not to rush.",
  alternates: { canonical: "https://webearish.com/diagnosis/after-diagnosis" },
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
        <h1 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>After the Diagnosis</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What You Might Feel</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Whatever you feel is allowed. Relief. Grief. Confusion. Validation. Numbness. Anger. Hope. These often arrive together. Parents frequently describe grief alongside relief: grief for shifting expectations, grief for lost time, grief for a future that feels less certain. These feelings do not reflect on how much you love your child. They are a normal response to significant new information.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Not to Rush</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Do not rush into starting therapy before you understand what your child needs. Do not rush to share the diagnosis before you are ready. Do not rush to fix anything. The first weeks after a diagnosis are for processing, not problem-solving. Well-meaning advice will come from many directions. You do not have to act on any of it immediately.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Is Worth Doing Soon</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>A few practical steps are worth taking. Contact your child's school with the evaluation report to begin the IEP process. Connect with other parents of autistic children. Read content written by autistic adults about their own experiences. Make an appointment with a developmental pediatrician if you have not already.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>For Adults Receiving Late Diagnoses</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Late diagnosis brings its own processing. You may reinterpret decades of memories. You are not obligated to disclose to anyone. You do not have to rebuild your self-understanding immediately. Finding autistic community often helps. The diagnosis does not change who you are. It gives you language for who you have always been.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</a>
            <a href="/parents" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Parent Hub →</a>
            <a href="/adults/late-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Late Diagnosis →</a>
        </div>
      </div>
    </div>
  );
}
