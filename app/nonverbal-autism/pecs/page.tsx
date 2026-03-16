import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PECS — Picture Exchange Communication System | WeBearish',
  description: 'What PECS is, how it works, who it is for, the stages of PECS training, and what parents need to know about implementing picture exchange communication.',
  alternates: { canonical: 'https://webearish.com/nonverbal-autism/pecs' },
};

export default function PECSPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/nonverbal-autism" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Nonverbal Autism</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>PECS</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>NONVERBAL AUTISM</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          PECS (Picture Exchange Communication System)
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          PECS — the Picture Exchange Communication System — is a structured approach to teaching children to communicate using pictures. Developed in the 1980s for children with autism, it starts by teaching children to exchange a picture card for a desired item, then builds toward more complex communication. It is one of the most widely studied and implemented communication systems for autistic children.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. PECS implementation should involve a trained professional. This content is for informational purposes.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Six Phases of PECS</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Phase I: The Physical Exchange', desc: 'The child is taught to pick up a picture of a desired item and hand it to a communication partner to receive the item. This phase requires two people — one to prompt the child physically, one to receive the picture and give the item. The goal is to establish the concept that pictures can be exchanged for things.' },
              { label: 'Phase II: Distance and Persistence', desc: 'The child learns to travel to find their communication book, retrieve the correct picture, and seek out a communication partner — even if that partner is not immediately in front of them. Communication becomes purposeful and self-initiated rather than prompted.' },
              { label: 'Phase III: Picture Discrimination', desc: 'The child learns to select from two or more pictures to request a specific item. This phase establishes that different pictures represent different things — a critical step in building a meaningful picture vocabulary.' },
              { label: 'Phase IV: Sentence Structure', desc: 'The child learns to build a simple sentence by combining an "I want" card with a picture of the desired item. This introduces the structure of communication and moves beyond single-word requests toward phrase-level expression.' },
              { label: 'Phase V: Responding to Questions', desc: 'The child learns to respond to the question "What do you want?" by building a sentence. This phase introduces the concept of responding to social communication rather than only initiating.' },
              { label: 'Phase VI: Commenting', desc: 'The child learns to make comments in addition to requests — "I see...", "I hear...", "I feel..." — expanding communication beyond requesting to genuine conversational exchange.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0, minWidth: 20 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>PECS vs High-Tech AAC</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            PECS and high-tech AAC are not competing approaches — they serve different functions and many children use both. Some key differences:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'PECS requires no technology and is low-cost relative to dedicated AAC devices',
              'High-tech AAC has larger vocabulary capacity and generates speech, which PECS does not',
              'PECS requires fine motor skills for handling small cards; high-tech AAC requires different motor skills (tapping a screen)',
              'Many speech-language pathologists recommend starting with PECS to build the understanding that pictures represent objects, then transitioning to high-tech AAC',
              'Both approaches require consistent implementation across settings — school, home, and community — to be effective',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Practical Notes for Families</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Consistency across settings', desc: 'PECS only works if it is used consistently at home, at school, and wherever the child spends time. A child who uses PECS at school but whose communication book stays at school does not have access to communication at home. Every setting needs the materials.' },
              { label: 'Protect communication books', desc: 'Physical PECS materials — books, cards, velcro boards — are the child\'s voice. Treat them with the same care and priority you would give any essential medical equipment.' },
              { label: 'Training for communication partners', desc: 'PECS implementation has specific protocols. Ideally, the adults implementing it should receive formal PECS training. At minimum, read the PECS manual and work closely with the implementing speech-language pathologist.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/nonverbal-autism/aac-devices" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>AAC Devices →</Link>
            <Link href="/nonverbal-autism/sign-language" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sign Language →</Link>
            <Link href="/nonverbal-autism/presuming-competence" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Presuming Competence →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/nonverbal-autism" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Nonverbal Autism Hub →</Link>
            <Link href="/communication" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Communication Hub →</Link>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Guide →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
