import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Mission | WeBearish',
  description: 'WeBearish exists to shift the culture around autism. Not awareness. Acceptance. Understanding. Belonging. Read about what we stand for and why we built this.',
  alternates: { canonical: 'https://www.webearish.com/mission' },
  openGraph: {
    title: 'Our Mission | WeBearish',
    description: 'WeBearish exists to shift the culture around autism. Not awareness. Acceptance.',
    url: 'https://www.webearish.com/mission',
    siteName: 'WeBearish',
    images: [{ url: 'https://www.webearish.com/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

const FOREST = '#1A3A1A';
const LIME = '#B8E887';
const CORAL = '#FF7B5C';
const YELLOW = '#FFD166';
const CREAM = '#FAFAF8';
const DARK = '#0F1A0F';

export default function MissionPage() {
  return (
    <main style={{ background: CREAM, color: DARK, minHeight: '100vh' }}>
      <style>{`
        @keyframes ruleIn { from { width: 0 } to { width: 80px } }
        .mission-pillars { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
        .mission-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .mission-pillars { grid-template-columns: 1fr !important; }
          .mission-cta-btns { flex-direction: column !important; width: 100%; }
          .mission-cta-btns a { min-width: unset !important; width: 100% !important; text-align: center; }
        }
      `}</style>

      {/* HERO */}
      <section style={{
        background: FOREST,
        color: CREAM,
        padding: 'clamp(72px,10vw,120px) clamp(20px,6vw,80px) clamp(64px,8vw,100px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ghosted ACCEPTANCE watermark */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(120px,20vw,280px)',
          fontWeight: 900,
          color: 'rgba(184,232,135,0.04)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          lineHeight: 1,
          overflow: 'hidden',
        }}>
          ACCEPTANCE
        </div>

        <p style={{ fontSize: 11, letterSpacing: '3px', color: LIME, marginBottom: 20, fontWeight: 700, position: 'relative', zIndex: 1 }}>
          WHY WE EXIST
        </p>
        <h1 style={{
          fontSize: 'clamp(40px,7vw,80px)',
          fontWeight: 900,
          lineHeight: 1.05,
          maxWidth: 900,
          margin: '0 auto 28px',
          fontFamily: 'Nunito, sans-serif',
          position: 'relative',
          zIndex: 1,
        }}>
          WeBearish on the Idea That Any Child Is Less Than.
        </h1>
        <p style={{
          fontSize: 'clamp(16px,2vw,20px)',
          color: 'rgba(250,250,248,0.75)',
          maxWidth: 680,
          margin: '0 auto',
          lineHeight: 1.75,
          fontFamily: 'Nunito, sans-serif',
          position: 'relative',
          zIndex: 1,
        }}>
          Autism is not a defect. It is not a tragedy. It is a different way of experiencing the world.
          We exist to make sure the world catches up to that fact.
        </p>
        {/* Animated underline rule */}
        <div style={{
          width: 0,
          height: 2,
          background: LIME,
          margin: '24px auto 0',
          animation: 'ruleIn 0.8s ease 0.4s forwards',
          position: 'relative',
          zIndex: 1,
        }} />
      </section>

      {/* THE PROBLEM */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)', maxWidth: 860, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', color: CORAL, marginBottom: 16, fontWeight: 700 }}>THE PROBLEM</p>
        <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 28, fontFamily: 'Nunito, sans-serif' }}>
          Awareness Was Never Enough.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(15,26,15,0.7)', marginBottom: 20 }}>
          For decades, the conversation around autism has been built around awareness. Light it up blue. Wear a ribbon. Know the statistics. 1 in 36 children is autistic, according to the CDC.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(15,26,15,0.7)', marginBottom: 20 }}>
          But awareness without acceptance changes nothing. You can be fully aware that a person is autistic and still exclude them. Still talk over them. Still design a world that does not fit them and call it their problem.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(15,26,15,0.7)' }}>
          We are done with awareness. WeBearish is built around acceptance. That means designing spaces, systems, and culture that include autistic people rather than tolerating them.
        </p>
      </section>

      {/* DIVIDER STAT — Stadium scoreboard */}
      <section style={{
        background: FOREST,
        color: CREAM,
        padding: 'clamp(48px,6vw,72px) clamp(20px,6vw,80px)',
        textAlign: 'center',
        borderTop: '1px solid rgba(184,232,135,0.2)',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
          {/* Radial glow behind number */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184,232,135,0.12) 0%, transparent 70%)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          <div style={{
            fontSize: 'clamp(72px,12vw,120px)',
            fontWeight: 900,
            color: LIME,
            lineHeight: 1,
            marginBottom: 12,
            letterSpacing: '-4px',
            position: 'relative',
            zIndex: 1,
          }}>1 in 36</div>
          <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
            Children in the United States is autistic. That is not a rare condition. That is a community.
            And every one of those children deserves to grow up in a world that accepts them as they are.
          </p>
          <p style={{ fontSize: 11, letterSpacing: '2px', color: LIME, marginTop: 16, opacity: 0.6, position: 'relative', zIndex: 1 }}>
            SOURCE: CDC MMWR, 2023
          </p>
        </div>
      </section>

      {/* WHAT WE STAND FOR — Dark editorial pillars */}
      <section style={{
        background: FOREST,
        padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)',
      }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', color: CORAL, marginBottom: 16, fontWeight: 700, textAlign: 'center' }}>WHAT WE STAND FOR</p>
        <h2 style={{
          fontSize: 'clamp(28px,4vw,48px)',
          fontWeight: 900,
          lineHeight: 1.15,
          marginBottom: 56,
          fontFamily: 'Nunito, sans-serif',
          textAlign: 'center',
          color: CREAM,
        }}>
          Three Things We Will Not Compromise On.
        </h2>
        <div className="mission-pillars" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {[
            {
              color: LIME,
              num: '01',
              title: 'Identity-First Language',
              body: 'We say "autistic person," not "person with autism." Language shapes how people see each other. Autistic people have told us how they want to be described. We listen. We do not decide for them.',
            },
            {
              color: CORAL,
              num: '02',
              title: 'No Cure Narrative',
              body: 'We do not support the idea that autism needs to be fixed, cured, or eliminated. Autistic people are not broken versions of neurotypical people. They are whole people with different neurologies. Full stop.',
            },
            {
              color: YELLOW,
              num: '03',
              title: 'Community Over Charity',
              body: 'WeBearish is not a charity. It is a movement. We are not here to feel good about helping. We are here to build something real alongside the autistic community, not above it.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(250,250,248,0.03)',
              border: '1px solid rgba(184,232,135,0.1)',
              borderTop: `3px solid ${item.color}`,
              padding: '36px 32px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Ghosted numeral */}
              <div style={{
                position: 'absolute',
                bottom: -20,
                right: 16,
                fontSize: 120,
                fontWeight: 900,
                color: 'rgba(184,232,135,0.05)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>{item.num}</div>
              <div style={{ fontSize: 11, letterSpacing: '3px', color: item.color, marginBottom: 12, fontWeight: 700 }}>{item.num}</div>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14, fontFamily: 'Nunito, sans-serif', color: CREAM }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', position: 'relative', zIndex: 1 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW PROFITS WORK */}
      <section style={{
        background: FOREST,
        color: CREAM,
        padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '3px', color: LIME, marginBottom: 16, fontWeight: 700 }}>THE MODEL</p>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 28, fontFamily: 'Nunito, sans-serif' }}>
            100% of Profits Go Back Into the Movement.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(250,250,248,0.7)', marginBottom: 20 }}>
            Every dollar WeBearish generates is reinvested into the movement. Sensory-friendly spaces. Equipment for families who cannot afford it. Programming, resources, and community building for autistic children and the people who raise them.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(250,250,248,0.7)' }}>
            We do not take profits out. We do not have investors to answer to. This is a mission-driven operation.
            When you shop at WeBearish, you are part of that.
          </p>
        </div>
      </section>

      {/* WHO BUILT THIS */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)', maxWidth: 860, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', color: CORAL, marginBottom: 16, fontWeight: 700 }}>WHO BUILT THIS</p>
        <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 28, fontFamily: 'Nunito, sans-serif' }}>
          Built by Parents. Driven by Experience.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(15,26,15,0.7)', marginBottom: 20 }}>
          WeBearish was built by parents raising autistic children. Not by researchers. Not by advocacy organizations with boards and budgets. By people who live this every day.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(15,26,15,0.7)', marginBottom: 20 }}>
          We know what it is like to fight for an IEP. To watch a child be misunderstood in a room full of adults who should know better. To search for resources and find nothing designed for how your family actually lives.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(15,26,15,0.7)' }}>
          That experience is not a credential. It is a reason. We built WeBearish because the thing we needed did not exist. So we made it.
        </p>
      </section>

      {/* CLOSING CTA — Full-bleed statement */}
      <section style={{
        background: LIME,
        color: DARK,
        padding: 'clamp(56px,7vw,80px) clamp(20px,6vw,80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ghosted quote mark */}
        <div style={{
          position: 'absolute',
          top: -40,
          left: 20,
          fontSize: 'clamp(200px,30vw,400px)',
          color: 'rgba(15,26,15,0.15)',
          lineHeight: 1,
          pointerEvents: 'none',
          fontFamily: 'serif',
          zIndex: 0,
        }}>&ldquo;</div>

        <h2 style={{
          fontSize: 'clamp(28px,4vw,44px)',
          fontWeight: 900,
          lineHeight: 1.2,
          marginBottom: 16,
          fontFamily: 'Nunito, sans-serif',
          position: 'relative',
          zIndex: 1,
        }}>
          The Movement Needs You.
        </h2>
        <p style={{
          fontSize: 17,
          lineHeight: 1.75,
          color: 'rgba(15,26,15,0.7)',
          maxWidth: 600,
          margin: '0 auto 36px',
          position: 'relative',
          zIndex: 1,
        }}>
          Whether you are a parent, an autistic adult, an educator, or someone who just believes in doing right by kids, there is a place for you here.
        </p>
        <div className="mission-cta-btns" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/shop" style={{
            display: 'inline-block',
            background: CORAL,
            color: '#fff',
            fontWeight: 900,
            fontSize: 13,
            padding: '16px 36px',
            textDecoration: 'none',
            letterSpacing: '1.5px',
            minWidth: 180,
          }}>
            SHOP THE COLLECTION
          </Link>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: 'transparent',
            color: FOREST,
            border: `2px solid ${FOREST}`,
            fontWeight: 800,
            fontSize: 13,
            padding: '16px 36px',
            textDecoration: 'none',
            letterSpacing: '1.5px',
            minWidth: 180,
          }}>
            GET INVOLVED
          </Link>
        </div>
      </section>

    </main>
  );
}
