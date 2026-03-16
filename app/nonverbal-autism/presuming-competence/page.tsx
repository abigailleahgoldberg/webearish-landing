import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Presuming Competence: Why It Matters | WeBearish',
  description: 'What presuming competence means for autistic children who are nonverbal, why it changes everything, and how to practice it daily.',
  alternates: { canonical: 'https://webearish.com/nonverbal-autism/presuming-competence' },
};

export default function PresumingCompetencePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/nonverbal-autism" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Nonverbal Autism</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Presuming Competence</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>NONVERBAL AUTISM</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Presuming Competence: Why It Matters
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Presuming competence means operating from the assumption that an autistic person understands more than they can show, knows more than they can express, and is capable of more than their observable behavior suggests. It means approaching every autistic person — regardless of their communication method, their support needs, or their behavior — with the fundamental belief that there is a whole, thinking, feeling person inside. This is not optimism. This is a practice that changes outcomes.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content reflects a neurodiversity-affirming perspective on disability and communication.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Presuming Competence Changes Everything</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'The alternative is more damaging', desc: 'If you presume competence and you are wrong, you have given someone more opportunity, more respect, and more communication access than they needed. If you presume incompetence and you are wrong, you have denied a thinking, feeling person their rights, their education, and their dignity. The risk calculation is clear.' },
              { label: 'Behavior is communication, not a measure of intelligence', desc: 'A child who screams, bites, or runs away is communicating — usually distress, fear, pain, or overwhelm. Interpreting that behavior as proof of low comprehension leads to environments that are less supportive, less communicative, and less respectful. Interpreting it as communication leads to problem-solving.' },
              { label: 'Expectations shape outcomes', desc: 'Research consistently shows that the expectations adults hold for a child directly affect that child\'s outcomes. Children who are presumed competent are given more opportunities, richer language environments, and more education. Children who are presumed incompetent are given less of everything. The assumption becomes self-fulfilling in both directions.' },
              { label: 'Autistic adults tell us they were listening', desc: 'Autistic adults who were nonverbal as children — many of whom later gained access to communication through AAC — consistently report that they understood what was said to them, about them, and around them, even when adults assumed they did not. They remember the assumptions. They remember the conversations they were excluded from.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Practicing Presuming Competence Daily</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Talk to the person, not about them', desc: 'In doctor\'s offices, at school meetings, in family gatherings — talk to your child, not about your child as though they are not there. "We are going to talk about your school goals now" instead of discussing the child in the third person while they are sitting right there.' },
              { label: 'Provide age-appropriate content', desc: 'A nonverbal twelve-year-old should have access to books, music, and media appropriate for a twelve-year-old, not materials designed for toddlers. Communication level is not cognitive level. Accessible does not mean infantilized.' },
              { label: 'Explain what is happening', desc: 'Before transitions, medical procedures, or changes, explain what is about to happen — in clear, concrete language. Do not skip the explanation because you believe the child will not understand. Many autistic people report that being spoken to directly about what was happening around them reduced their anxiety even when they could not respond.' },
              { label: 'Give access to communication', desc: 'The ultimate expression of presuming competence is providing robust communication tools — AAC devices, sign language, picture systems — and investing the time to teach the child and their communication partners to use them. Giving someone a way to express themselves is the most direct demonstration that you believe they have something to say.' },
              { label: 'Correct others when they do not presume competence', desc: 'When teachers, doctors, family members, or strangers speak about your child as though they are not present, speak in simplified language that is not warranted, or make assumptions about your child\'s understanding, correct them kindly and directly. Model how to interact with your child respectfully.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Common Places Where Competence Is Not Presumed</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Medical appointments where the doctor speaks only to the parent and ignores the autistic patient entirely',
              'School settings where nonverbal children are excluded from academic content because their communication method is not speech',
              'Family gatherings where well-meaning relatives speak to the child in an exaggerated, babyish tone',
              'Therapeutic settings where compliance is measured and inner experience is not considered',
              'Community spaces where people stare, comment, or assume the child "doesn\'t know what\'s going on"',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>–</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/nonverbal-autism/aac-devices" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>AAC Devices →</Link>
            <Link href="/nonverbal-autism/supporting-communication" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Supporting Communication →</Link>
            <Link href="/acceptance" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism Acceptance →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/nonverbal-autism" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Nonverbal Autism Hub →</Link>
            <Link href="/voices" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autistic Voices →</Link>
            <Link href="/acceptance" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism Acceptance →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
