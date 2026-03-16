import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Structured vs Unstructured Social Time for Autistic Children | WeBearish',
  description: 'Why autistic children often do better in structured social situations and how to balance structure with flexibility in social settings.',
  alternates: { canonical: 'https://webearish.com/autism-social-skills/structured-vs-unstructured' },
};

export default function StructuredVsUnstructuredPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-social-skills" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Social Skills</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Structured vs Unstructured</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SOCIAL SKILLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Structured vs Unstructured Social Time
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          One of the most consistent observations from parents and autistic people themselves is that structured social situations are far more accessible than unstructured ones. A birthday party where everyone knows the agenda is easier than an open-ended playdate. A board game is easier than free play. Understanding why — and how to use this knowledge — changes how you plan social opportunities.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes and reflects a neurodiversity-affirming perspective.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Structure Helps</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Reduced processing demands', desc: 'In a structured situation, the rules are clear, the roles are defined, and the sequence of events is predictable. This frees up cognitive resources that would otherwise be consumed by trying to figure out what is happening, what is expected, and what to do next. When cognitive resources are freed, social connection becomes more accessible.' },
              { label: 'Clear beginning and end', desc: 'Unstructured social time has no natural endpoint. It continues until someone decides it is over, which is unpredictable. Structured activities have a defined end — when the game is finished, when the movie ends, when the activity is complete. Knowing when something will end significantly reduces the anxiety of going through it.' },
              { label: 'A task to focus on', desc: 'Structure gives participants a shared task. In unstructured time, the task is implicitly "have a conversation and connect" — which requires constant social performance. A board game, a craft, a cooking project, or a shared activity provides content to interact around. The conversation flows from the activity rather than requiring its own social effort.' },
              { label: 'Reduced eye contact and direct social demand', desc: 'Structured activities where both participants are looking at a game, a screen, or a shared project naturally reduce the pressure of direct eye contact and face-to-face interaction. Side-by-side activities are often more comfortable than face-to-face ones.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Structured Social Situations That Work Well</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Board games and card games — clear rules, defined turns, a shared focus',
              'Video games — especially co-op games where players work toward a common goal',
              'Clubs and interest-based groups — chess club, coding club, art class, drama — where the activity provides the structure',
              'Organized sports — team sports provide roles, rules, and a shared goal (though the social complexity of team dynamics is a separate consideration)',
              'Cooking or baking together — a recipe provides the structure and sequence',
              'Movie watching — shared attention to a third thing, low direct social demand, natural conversation topics after',
              'Building projects — Lego, woodworking, model building — collaborative creation with a clear goal',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Building in Flexibility Over Time</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The goal is not to keep autistic children exclusively in structured situations — some flexibility and exposure to less structured environments is part of growing up. But the movement toward flexibility works best when:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'The child is willing', desc: 'Stretching into less structured social situations works when the child wants to try it. Forced exposure to overwhelming social environments builds avoidance, not capacity.' },
              { label: 'The baseline is secure', desc: 'A child who has regular positive social experiences in structured settings builds social confidence that makes slightly less structured situations more accessible over time. Start where the child can succeed.' },
              { label: 'Support is available', desc: 'Having a trusted adult nearby during a less structured social situation — not coaching, just present — provides the safety net that allows some autistic children to experiment with more flexibility.' },
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
            <Link href="/autism-social-skills/playground" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>The Playground →</Link>
            <Link href="/autism-social-skills/online" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Online Socializing →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-social-skills" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Skills Hub →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism &amp; Anxiety →</Link>
            <Link href="/acceptance" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism Acceptance →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
