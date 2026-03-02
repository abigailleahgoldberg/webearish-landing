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

export default function MissionPage() {
  return (
    <main style={{ background: 'var(--cream)', color: 'var(--dark)', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{
        background: 'var(--forest)',
        color: 'var(--cream)',
        padding: 'clamp(72px,10vw,120px) clamp(20px,6vw,80px) clamp(64px,8vw,100px)',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 20, fontWeight: 700 }}>
          WHY WE EXIST
        </p>
        <h1 style={{
          fontSize: 'clamp(40px,7vw,80px)',
          fontWeight: 900,
          lineHeight: 1.05,
          maxWidth: 900,
          margin: '0 auto 28px',
          fontFamily: 'Nunito, sans-serif',
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
        }}>
          Autism is not a defect. It is not a tragedy. It is a different way of experiencing the world.
          We exist to make sure the world catches up to that fact.
        </p>
      </section>

      {/* THE PROBLEM */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)', maxWidth: 860, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--coral)', marginBottom: 16, fontWeight: 700 }}>THE PROBLEM</p>
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

      {/* DIVIDER STAT */}
      <section style={{
        background: 'var(--forest)',
        color: 'var(--cream)',
        padding: 'clamp(48px,6vw,72px) clamp(20px,6vw,80px)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ fontSize: 'clamp(48px,8vw,80px)', fontWeight: 900, color: 'var(--lime)', lineHeight: 1, marginBottom: 12 }}>1 in 36</div>
          <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.7 }}>
            Children in the United States is autistic. That is not a rare condition. That is a community.
            And every one of those children deserves to grow up in a world that accepts them as they are.
          </p>
          <p style={{ fontSize: 11, letterSpacing: '2px', color: 'var(--lime)', marginTop: 16, opacity: 0.6 }}>
            SOURCE: CDC MMWR, 2023
          </p>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)', maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--coral)', marginBottom: 16, fontWeight: 700, textAlign: 'center' }}>WHAT WE STAND FOR</p>
        <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 56, fontFamily: 'Nunito, sans-serif', textAlign: 'center' }}>
          Three Things We Will Not Compromise On.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32 }}>
          {[
            {
              color: 'var(--lime)',
              num: '01',
              title: 'Identity-First Language',
              body: 'We say "autistic person," not "person with autism." Language shapes how people see each other. Autistic people have told us how they want to be described. We listen. We do not decide for them.',
            },
            {
              color: 'var(--coral)',
              num: '02',
              title: 'No Cure Narrative',
              body: 'We do not support the idea that autism needs to be fixed, cured, or eliminated. Autistic people are not broken versions of neurotypical people. They are whole people with different neurologies. Full stop.',
            },
            {
              color: 'var(--yellow)',
              num: '03',
              title: 'Community Over Charity',
              body: 'WeBearish is not a charity. It is a movement. We are not here to feel good about helping. We are here to build something real alongside the autistic community, not above it.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#fff',
              padding: '36px 32px',
              borderTop: `4px solid ${item.color}`,
            }}>
              <div style={{ fontSize: 11, letterSpacing: '3px', color: item.color, marginBottom: 12, fontWeight: 700 }}>{item.num}</div>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14, fontFamily: 'Nunito, sans-serif' }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(15,26,15,0.65)' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW PROFITS WORK */}
      <section style={{
        background: 'var(--forest)',
        color: 'var(--cream)',
        padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 16, fontWeight: 700 }}>THE MODEL</p>
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
          <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/shop" style={{
              display: 'inline-block',
              background: 'var(--coral)',
              color: '#fff',
              fontWeight: 900,
              fontSize: 13,
              padding: '14px 32px',
              textDecoration: 'none',
              letterSpacing: '1.5px',
            }}>
              SHOP THE COLLECTION
            </Link>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'var(--lime)',
              border: '2px solid var(--lime)',
              fontWeight: 800,
              fontSize: 13,
              padding: '14px 32px',
              textDecoration: 'none',
              letterSpacing: '1.5px',
            }}>
              GET INVOLVED
            </Link>
          </div>
        </div>
      </section>

      {/* WHO BUILT THIS */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(20px,6vw,80px)', maxWidth: 860, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--coral)', marginBottom: 16, fontWeight: 700 }}>WHO BUILT THIS</p>
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

      {/* CLOSING CTA */}
      <section style={{
        background: 'var(--lime)',
        color: 'var(--dark)',
        padding: 'clamp(56px,7vw,80px) clamp(20px,6vw,80px)',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, lineHeight: 1.2, marginBottom: 16, fontFamily: 'Nunito, sans-serif' }}>
          The Movement Needs You.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(15,26,15,0.7)', maxWidth: 600, margin: '0 auto 36px' }}>
          Whether you are a parent, an autistic adult, an educator, or someone who just believes in doing right by kids, there is a place for you here.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: 'var(--forest)',
            color: 'var(--cream)',
            fontWeight: 900,
            fontSize: 13,
            padding: '16px 36px',
            textDecoration: 'none',
            letterSpacing: '1.5px',
          }}>
            GET INVOLVED
          </Link>
          <Link href="/blog" style={{
            display: 'inline-block',
            background: 'transparent',
            color: 'var(--forest)',
            border: '2px solid var(--forest)',
            fontWeight: 800,
            fontSize: 13,
            padding: '16px 36px',
            textDecoration: 'none',
            letterSpacing: '1.5px',
          }}>
            READ THE BLOG
          </Link>
        </div>
      </section>

    </main>
  );
}
