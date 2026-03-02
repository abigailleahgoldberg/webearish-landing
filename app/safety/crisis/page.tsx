import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Crisis Resources for Autistic People and Families | WeBearish',
  description: "Crisis lines, safety planning, and guidance for autistic people and families navigating mental health crises — including sensory-aware and autism-informed options.",
  alternates: { canonical: 'https://webearish.com/safety/crisis' },
};

export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Safety Overview</Link>
        <div style={{ background: 'rgba(255,123,92,0.12)', border: '1px solid rgba(255,123,92,0.3)', padding: '16px 20px', marginTop: 24, marginBottom: 32, fontSize: 14, color: 'rgba(250,250,248,0.85)', lineHeight: 1.6 }}>
          <strong style={{ color: '#FF7B5C' }}>If this is an emergency,</strong> call 911 and inform the dispatcher that the person is autistic. This context matters for how responders interact.
        </div>
        <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--coral)', marginBottom: 12 }}>SAFETY — CRISIS</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontFamily: "'Nunito', sans-serif", fontWeight: 900, marginBottom: 20 }}>Crisis Resources for Autistic People</h1>
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
          Mental health crises are more common in autistic people than in the general population. Autistic people are at elevated risk for suicidal ideation, self-harm, and psychiatric crisis — particularly during burnout or major transitions. These resources are specific to autistic people and their families.
        </p>

        {/* Crisis lines */}
        <h2 style={{ fontSize: 22, fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'var(--lime)', marginBottom: 20 }}>Immediate Crisis Lines</h2>
        {[
          { name: '988 Suicide and Crisis Lifeline', contact: 'Call or text: 988', notes: 'The primary crisis line in the US. Available 24/7. When calling, you may mention that you or your family member is autistic — this can help the counselor adapt their approach. Chat is available at 988lifeline.org for those who communicate better in text.' },
          { name: 'Crisis Text Line', contact: 'Text HOME to 741741', notes: 'Text-based crisis support. Accessible for autistic people who find phone calls overwhelming or difficult. Available 24/7. Free.' },
          { name: 'The Trevor Project (LGBTQ+ Youth)', contact: 'Call 1-866-488-7386 | Text START to 678-678', notes: 'For LGBTQ+ youth under 25. Given the high overlap between autism and LGBTQ+ identities, this resource is specifically relevant for autistic youth navigating both.' },
          { name: 'SAMHSA National Helpline', contact: '1-800-662-4357', notes: 'Mental health and substance use crisis line. Referrals to local treatment facilities and support groups. Free, confidential, 24/7.' },
        ].map((r, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(184,232,135,0.1)', padding: '18px 22px', marginBottom: 14 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--cream)', marginBottom: 4 }}>{r.name}</div>
            <div style={{ fontSize: 14, color: 'var(--lime)', fontWeight: 700, marginBottom: 8 }}>{r.contact}</div>
            <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.6)', lineHeight: 1.65 }}>{r.notes}</p>
          </div>
        ))}

        <h2 style={{ fontSize: 22, fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'var(--lime)', marginTop: 40, marginBottom: 20 }}>Police and Emergency Responders</h2>
        <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
          Interactions between autistic people and law enforcement carry real risks. Autistic people may not respond to verbal commands in expected ways, may avoid eye contact, may move unexpectedly, or may become more distressed by police presence. Steps to reduce risk:
        </p>
        {[
          "Tell 911 dispatchers: 'This person is autistic. They may not respond to verbal commands as expected.'",
          "If your child has an autism alert card or medical ID, make sure it is accessible and kept updated.",
          "Contact your local police department to ask if they offer autism awareness training or have a Crisis Intervention Team (CIT) program.",
          "Consider creating a one-page profile for your child — photo, name, communication style, triggers, what calms them — and share with local first responders.",
          "If your jurisdiction has a mental health co-responder program, find out how to access it.",
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 10 }}>
            <div style={{ color: 'var(--lime)', fontWeight: 900, marginTop: 2, flexShrink: 0 }}>—</div>
            <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.7)', lineHeight: 1.65 }}>{s}</p>
          </div>
        ))}

        <h2 style={{ fontSize: 22, fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'var(--lime)', marginTop: 40, marginBottom: 20 }}>Building a Safety Plan</h2>
        <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
          A safety plan is a written document created before a crisis. It outlines warning signs, coping strategies, and specific steps to take if crisis escalates. Work with a mental health provider to build one. Key elements:
        </p>
        {['Warning signs specific to this person', 'Internal coping strategies (what helps them regulate)', 'People and settings that provide distraction or support', 'Trusted people to contact', 'Mental health providers to contact', 'Steps to take if the crisis escalates', 'How to make the environment safer during a crisis'].map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 10 }}>
            <div style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>{i + 1}.</div>
            <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.7)', lineHeight: 1.65 }}>{s}</p>
          </div>
        ))}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}>
          {[['Safety Overview', '/safety'], ['Autistic Burnout', '/adults/burnout'], ['State Resources', '/resources/by-state'], ['Parents Hub', '/parents']].map(([l, h]) => (
            <Link key={h} href={h} style={{ padding: '10px 20px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
