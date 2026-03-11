import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autism Acceptance vs Awareness: What It Means | WeBearish",
  description: "Why the autism community shifted from awareness to acceptance, what the neurodiversity model means, and what acceptance actually looks like in practice.",
  alternates: { canonical: "https://webearish.com/acceptance" },
};

const FOREST = '#1A3A1A';
const LIME   = '#B8E887';
const CORAL  = '#FF7B5C';
const YELLOW = '#FFD166';
const CREAM  = '#FAFAF8';
const DARK   = '#0F1A0F';

const DEFINITIONS = [
  {
    color: LIME,
    term: 'Identity-First Language',
    def: '"Autistic person" — not "person with autism." Autism is not separate from who someone is; it is integral to their identity. Most autistic adults who have stated a preference choose identity-first language. The individual\'s stated preference always takes priority.',
  },
  {
    color: CORAL,
    term: 'Neurodiversity',
    def: 'The recognition that neurological differences — including autism, ADHD, dyslexia, and others — are natural variations in the human genome, not disorders to be cured. The neurodiversity model shifts the question from "how do we fix this person" to "how do we design systems that work for everyone."',
  },
  {
    color: YELLOW,
    term: 'Presumption of Competence',
    def: 'The practice of assuming that every person, regardless of how they communicate or present, is capable of learning and understanding. It means giving autistic people access to information, education, and full participation without first requiring them to prove they deserve it.',
  },
  {
    color: '#7EC8E3',
    term: 'Nothing About Us Without Us',
    def: 'A founding principle of disability rights: decisions that affect autistic people must be made with autistic people at the table. Not on their behalf. Not for their own good. With them — as full participants with equal standing.',
  },
];

export default function AcceptancePage() {
  return (
    <main style={{ background: DARK, minHeight: '100vh', color: CREAM, fontFamily: "'Nunito', system-ui, sans-serif" }}>

      {/* HERO — dark forest header */}
      <section style={{
        background: FOREST,
        padding: 'clamp(72px,10vw,120px) clamp(20px,6vw,80px) clamp(64px,8vw,100px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(100px,18vw,260px)',
          fontWeight: 900,
          color: 'rgba(184,232,135,0.04)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          lineHeight: 1,
        }}>ACCEPTANCE</div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 20 }}>
            ACCEPTANCE VS AWARENESS
          </div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 900, lineHeight: 1.05, maxWidth: 860, margin: '0 auto 24px', letterSpacing: '-2px' }}>
            Awareness Tells the World Autism Exists.<br />
            <span style={{ color: LIME }}>Acceptance Changes It.</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2vw,20px)', color: 'rgba(250,250,248,0.7)', maxWidth: 680, margin: '0 auto', lineHeight: 1.75 }}>
            You can be fully aware that autism exists and still exclude autistic people from every meaningful space in your life. Acceptance requires something more: action, accommodation, and respect for autistic identity.
          </p>
        </div>
      </section>

      {/* FOUR DEFINITION CARDS */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)', background: DARK }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '3px', color: CORAL, fontWeight: 800, marginBottom: 12, textAlign: 'center' }}>LANGUAGE THAT MATTERS</div>
          <h2 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, color: CREAM, lineHeight: 1.1, marginBottom: 56, textAlign: 'center', maxWidth: 700, margin: '0 auto 56px' }}>
            Four Principles at the Core of Acceptance.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
            {DEFINITIONS.map((d, i) => (
              <div key={i} style={{
                background: 'rgba(250,250,248,0.03)',
                border: '1px solid rgba(184,232,135,0.1)',
                borderTop: `3px solid ${d.color}`,
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ fontSize: 11, letterSpacing: '3px', color: d.color, fontWeight: 800, marginBottom: 12 }}>
                  {'0' + (i + 1)}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: CREAM, marginBottom: 14, lineHeight: 1.25 }}>{d.term}</h3>
                <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.8 }}>{d.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WEBEARISH SHOWS UP */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)', background: FOREST }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '3px', color: LIME, fontWeight: 800, marginBottom: 16 }}>HOW WEBEARISH SHOWS UP</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 48, color: CREAM }}>
            Acceptance Is a Daily Practice.<br />Here Is Ours.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { icon: '◎', title: 'Identity-first language throughout', body: 'We say "autistic person" — not "person with autism." Every piece of content on this site is written with that standard.' },
              { icon: '◎', title: 'No cure narrative, ever', body: 'We do not support the framing that autism is a tragedy or something to be eliminated. Autistic people are whole people. Full stop.' },
              { icon: '◎', title: 'Autistic voices centered', body: 'We lift autistic adults as the foremost experts on autistic experience. Our resources are built around their stated needs and preferences.' },
              { icon: '◎', title: '100% of profits reinvested', body: 'Every dollar we generate goes back into the movement — sensory-friendly spaces, equipment for families, and community programming.' },
              { icon: '◎', title: 'Nothing about us without us', body: 'We consult with autistic individuals and advocates as we build resources, events, and tools. Their input shapes what we make.' },
              { icon: '◎', title: 'Practical over inspirational', body: 'We skip the inspiration porn. Our content is built to help real families navigate real situations — IEPs, meltdowns, school rights, sensory needs.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ color: LIME, fontSize: 20, lineHeight: 1.3, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 900, color: CREAM, marginBottom: 6, fontSize: 15 }}>{item.title}</div>
                  <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY CONTENT — substantive sections */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)', background: DARK }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {[
            {
              label: 'THE PROBLEM',
              labelColor: CORAL,
              h: 'Awareness Was Never the Finish Line',
              b: 'For decades, the conversation around autism has been built around awareness. Light it up blue. Wear a ribbon. Know the statistics. But awareness does not ask anything of anyone. You can be fully aware that autism exists and still design every public space, every classroom, every hiring process around the assumption of neurotypicality. Acceptance places autistic people in the category of people who fully belong — not people to be aware of.',
            },
            {
              label: 'THE DOUBLE EMPATHY PROBLEM',
              labelColor: LIME,
              h: 'The Breakdown Is Mutual',
              b: 'Dr. Damian Milton\'s double empathy problem research challenges the idea that autistic people have a social deficit. His work shows that communication difficulties between autistic and non-autistic people are mutual. Non-autistic people have equal difficulty reading autistic social cues. The breakdown is at the interface — not exclusively in the autistic person. This reframes autism from a social deficit to a difference in neurological social styles.',
            },
            {
              label: 'WHAT ACCEPTANCE LOOKS LIKE',
              labelColor: YELLOW,
              h: 'Concrete. Not Symbolic.',
              b: 'Acceptance is sensory accommodations in classrooms and workplaces. IEPs that build on strengths. AAC access for nonspeaking autistic people without delay. Schools that stop punishing stimming. Workplaces that evaluate output rather than performance of enthusiasm. Families that do not try to make their autistic child appear non-autistic. Communities where autistic people belong — not because they passed a test, but because they showed up.',
            },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: 56, paddingBottom: 56, borderBottom: i < 2 ? '1px solid rgba(184,232,135,0.08)' : 'none' }}>
              <div style={{ fontSize: 11, letterSpacing: '3px', color: s.labelColor, fontWeight: 800, marginBottom: 12 }}>{s.label}</div>
              <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, color: CREAM, marginBottom: 20, lineHeight: 1.15 }}>{s.h}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(250,250,248,0.7)' }}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: LIME,
        padding: 'clamp(56px,7vw,80px) clamp(20px,6vw,80px)',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, color: DARK, lineHeight: 1.2, marginBottom: 16 }}>
          Be Part of the Movement.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(15,26,15,0.7)', maxWidth: 560, margin: '0 auto 36px' }}>
          Every purchase funds the mission. Every share spreads the message. Start here.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/shop" style={{ display: 'inline-block', background: CORAL, color: '#fff', fontWeight: 900, fontSize: 14, padding: '16px 36px', textDecoration: 'none', letterSpacing: '1.5px', minWidth: 180, textAlign: 'center' }}>
            SHOP THE COLLECTION
          </Link>
          <Link href="/community" style={{ display: 'inline-block', background: 'transparent', color: DARK, border: `2px solid ${DARK}`, fontWeight: 800, fontSize: 14, padding: '16px 36px', textDecoration: 'none', letterSpacing: '1.5px', minWidth: 180, textAlign: 'center' }}>
            JOIN THE COMMUNITY
          </Link>
        </div>
      </section>

    </main>
  );
}
