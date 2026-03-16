import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Online Socializing and Gaming for Autistic Children | WeBearish',
  description: 'Online socializing and gaming as legitimate social connection for autistic children — the benefits, the risks, and how parents can support safely.',
  alternates: { canonical: 'https://webearish.com/autism-social-skills/online' },
};

export default function OnlineSocializingPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-social-skills" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Social Skills</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Online Socializing</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SOCIAL SKILLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Online Socializing and Gaming
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Online socializing is not a consolation prize for autistic children who cannot manage in-person relationships. For many autistic people, online environments are genuinely more accessible and allow for deeper, more authentic connection than in-person settings. Understanding why helps parents support online social lives thoughtfully rather than treating them as problems to be managed or replaced.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes and reflects a neurodiversity-affirming perspective.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Online Works for Many Autistic People</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Reduced sensory demands', desc: 'Online interaction removes most of the sensory demands of in-person connection — no need to manage eye contact, facial expression reading, body language interpretation, physical proximity, background noise, or the unpredictability of in-person environments. With sensory demand reduced, the cognitive and emotional bandwidth available for actual connection increases.' },
              { label: 'Asynchronous options', desc: 'Text-based communication allows the autistic person to read, process, and respond at their own pace. There is no social pressure to respond instantly, no silence to fill, no awkward pause. This reduces anxiety and allows more thoughtful, genuine responses.' },
              { label: 'Interest-based communities', desc: 'Online communities form around shared interests. An autistic child can find hundreds of other people who love exactly the same game, the same TV show, the same obscure historical period, or the same scientific topic. These are communities built around the thing autistic people often connect through best — shared passion.' },
              { label: 'Control over self-presentation', desc: 'Online, the autistic person can choose when to engage, can step away without explanation, and has more control over the conversation than in-person settings allow. This reduces the demand characteristics that make in-person socializing exhausting.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Gaming as Social Connection</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Multiplayer gaming is a structured social activity. Players interact around a shared task, with clear rules, defined roles, and a common goal. This makes gaming one of the most accessible forms of social connection for many autistic people. The social interaction happens through the game rather than requiring its own separate performance.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Cooperative games (working toward a shared goal) are often easier than competitive ones for children who struggle with losing',
              'Voice chat during gaming provides social interaction without the demands of face-to-face conversation',
              'Gaming friendships are real friendships — shared history, inside jokes, genuine care — even when the people have never met in person',
              'Gaming communities often have high representation of neurodivergent people, making it a naturally more accepting social environment',
              'Gaming can build real skills: problem-solving, teamwork, communication, strategic thinking',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Keeping Online Social Life Safe</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Online environments carry real risks for autistic children — particularly around exploitation, as autistic children can be trusting and eager for connection in ways that bad actors exploit. Safety education should be direct, concrete, and repeated.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Explicit safety rules', desc: 'Teach specific, concrete rules: never share your real name, school, address, or phone number. Never meet someone you only know online without a trusted adult present. If someone asks for photos or asks you to keep a secret from your parents, tell a trusted adult immediately. Autistic children respond better to explicit rules than to vague "be careful" instructions.' },
              { label: 'Age-appropriate platforms', desc: 'Use gaming platforms and communities designed for the child\'s age. Enable parental controls on communication features. Understand which platforms your child is on and what the community is like.' },
              { label: 'Open, non-judgmental conversation about online relationships', desc: 'When children know they can tell you about online friends and online experiences without automatic suspicion or immediate restriction, they are more likely to come to you when something does not feel right.' },
              { label: 'Monitor without surveilling', desc: 'Know who your child talks to online without reading every message and without treating online friendships as inherently suspicious. Trust and appropriate monitoring are both possible at the same time.' },
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
            <Link href="/autism-social-skills/making-friends" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Making Friends →</Link>
            <Link href="/autism-social-skills/structured-vs-unstructured" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Structured vs Unstructured →</Link>
            <Link href="/safety" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Safety Resources →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-social-skills" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Skills Hub →</Link>
            <Link href="/adults" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Adults Hub →</Link>
            <Link href="/acceptance" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism Acceptance →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
