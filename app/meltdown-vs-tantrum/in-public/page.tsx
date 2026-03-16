import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Meltdowns in Public | WeBearish',
  description: 'How to handle autistic meltdowns in public — preparation, in-the-moment strategies, dealing with strangers, and protecting your child\'s dignity.',
  alternates: { canonical: 'https://webearish.com/meltdown-vs-tantrum/in-public' },
};

export default function MeltdownsInPublicPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/meltdown-vs-tantrum" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Meltdowns</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Meltdowns in Public</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>MELTDOWNS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Meltdowns in Public
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          A meltdown in a grocery store, at a birthday party, or in a busy shopping mall is one of the most difficult experiences for parents of autistic children. The combination of your child's genuine distress, public scrutiny, and your own exhaustion and embarrassment creates a perfect storm. You are not alone in this experience. And you can get better at navigating it — not by preventing every public meltdown, but by having a plan.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. Your child's dignity and safety matter more than any public opinion.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Before You Go Out: Preparation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Know your child\'s sensory load', desc: 'Public environments are sensory-intensive by default. Grocery stores have fluorescent lights, unpredictable sounds, strong smells, and crowd movement. Malls amplify all of this. Know your child\'s current sensory state before adding environmental load. Don\'t schedule demanding outings after already demanding days.' },
              { label: 'Bring the toolkit', desc: 'Noise-reducing headphones or ear defenders. A preferred fidget or comfort object. Snacks that don\'t require effort. Something to look at or hold. The sensory toolkit goes with you everywhere.' },
              { label: 'Scout the location mentally', desc: 'Know where the exits are. Know where the quietest part of the store is. Identify a fallback plan — the car, a bathroom, a bench outside — before you need it.' },
              { label: 'Manage duration and demands', desc: 'If you know a long errand is likely too much, break it up. Two shorter trips beat one that ends in crisis. Leave before the tank is empty, not after.' },
              { label: 'Prepare your child', desc: 'Visual prep helps. "We are going to the grocery store. We will get five things. Then we leave." Visual schedules, social stories, or a simple verbal walkthrough reduce the unpredictability that precedes many public meltdowns.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When It Happens: In-the-Moment</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Move to a lower-input space immediately', desc: 'Get out of the main aisle, crowd, or loud space as fast as possible. The car, a corner, outside the store. Distance from the trigger and reduction of input is the priority. Leave the cart if you have to.' },
              { label: 'Your child matters more than the errand', desc: 'You can come back for the groceries. You cannot unhave the meltdown once it starts. Leaving is always the right call if you catch escalation early enough. This is not failure — it is effective parenting.' },
              { label: 'Ignore the audience', desc: 'People staring, tutting, offering advice, or making comments are not your problem. They do not understand. Their judgment is irrelevant. Your child is your only focus.' },
              { label: 'Apply your at-home protocol outdoors', desc: 'Reduce input. Minimal language. Safety. Presence. The strategies do not change because you are in a parking lot instead of your living room.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Dealing with Other People</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'You do not owe anyone an explanation. "She\'s autistic and overwhelmed" is enough — if you choose to say anything at all.',
              'Most people who approach do so with good intentions but no useful help. "Thank you, I\'ve got this" is a complete sentence.',
              'If someone tries to physically intervene with your child, a firm "Please do not touch her" is appropriate.',
              'Store employees are often more helpful than random shoppers. If you need space, ask a manager to clear the aisle.',
              'Autism awareness cards exist if you want them — small cards that explain autism quickly for strangers who are visibly confused or uncomfortable.',
              'You are not responsible for making other people comfortable with your child\'s neurology.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>After the Public Meltdown</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Public meltdowns carry a weight that at-home meltdowns do not — shame, embarrassment, the replaying of other people's reactions. Give yourself permission to feel those emotions and then set them down. Your child was not misbehaving. You were not a bad parent. A real neurological event occurred in a challenging environment. What happened was hard. Tomorrow is a new day with new information about what your child needs.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum/before" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Warning Signs →</Link>
            <Link href="/meltdown-vs-tantrum/during" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>During a Meltdown →</Link>
            <Link href="/safety/public-spaces" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory-Safe Spaces →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown Hub →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools →</Link>
            <Link href="/parents/self-care" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parent Self-Care →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
