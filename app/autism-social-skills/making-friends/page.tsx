import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Making Friends as an Autistic Child | WeBearish',
  description: 'How autistic children make friends — different social styles, what friendship looks like for autistic kids, and how parents can support without pushing.',
  alternates: { canonical: 'https://webearish.com/autism-social-skills/making-friends' },
};

export default function MakingFriendsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-social-skills" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Social Skills</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Making Friends</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SOCIAL SKILLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Making Friends as an Autistic Child
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Autistic children can and do form deep, meaningful friendships. The path to those friendships often looks different from what neurotypical social development looks like — and that is fine. The goal is not to help autistic children make friends the way neurotypical children do. The goal is to help them find connection in ways that are authentic to who they are.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes and reflects a neurodiversity-affirming perspective.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Autistic Friendship Looks Different</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Before trying to support your child's friendships, it helps to understand what autistic friendship actually looks like — and to release the neurotypical template of what friendship "should" be.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Special interest-based connection', desc: 'Many autistic people form their deepest friendships around shared special interests. A friendship that develops over a shared passion for trains, Minecraft, marine biology, or a specific game is a genuine, meaningful friendship — even if the children do not engage in much small talk and even if they only connect in the context of that interest.' },
              { label: 'Fewer but deeper friendships', desc: 'Many autistic children prefer one close friend or a small group over a large social circle. This is a valid social preference, not a deficit. A single deep friendship provides the social connection that supports wellbeing — the number of friends matters far less than the quality of those connections.' },
              { label: 'Parallel play continuing beyond typical ages', desc: 'Playing alongside someone while doing your own thing — parallel play — persists into older childhood and even adulthood for many autistic people. This can be a genuine form of companionship, not failed interaction.' },
              { label: 'Online friendships as real friendships', desc: 'For many autistic people, online environments reduce the sensory and social processing demands of in-person interaction and allow more genuine connection. Online friends are real friends. Gaming communities, fan communities, and interest-based forums have provided autistic people with their closest and most sustaining friendships.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How Parents Can Support (Without Pushing)</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            There is a meaningful difference between supporting your child's social development and engineering a social life your child does not want. The most effective support respects the child's pace and social style.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Find activities built around special interests', desc: 'A child who loves robotics is more likely to find their people at a robotics club than at a general playdate. Interest-based activities put children in contact with potential friends who already share common ground. The social interaction happens around the shared activity, which reduces the demand on conversation skills.' },
              { label: 'Facilitate, do not force', desc: 'Set up the opportunity — invite a potential friend over, drive to the activity, provide the space — and then step back. Autistic children do not benefit from parents coaching them through social interactions in real time. The coaching is embarrassing and undermining.' },
              { label: 'Recognize and validate your child\'s own social preferences', desc: 'If your child does not want more friends than they have, that is a valid preference. If they are content with their one friend or their online community, that is enough. Parental anxiety about social isolation can push children into social situations that are genuinely draining rather than enriching.' },
              { label: 'Talk about friendship honestly', desc: 'Conversations about friendship — what makes someone a good friend, how to know if someone is a safe person, how to navigate conflict — are more useful than forced social skills practice. Autistic children often appreciate direct, honest conversation about social dynamics.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Loneliness Question</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Loneliness and solitude are different things. Many autistic children genuinely prefer solitude and are not lonely. Others want connection but cannot find it and are deeply lonely. Understanding which situation your child is in — by asking them directly and observing them — guides what kind of support is actually needed. A child who is content with their own company does not need social skills intervention. A child who is lonely and struggling to connect does.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-social-skills/playground" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Navigating the Playground →</Link>
            <Link href="/autism-social-skills/online" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Online Socializing →</Link>
            <Link href="/autism-social-skills/scripts" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Scripts →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-social-skills" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Skills Hub →</Link>
            <Link href="/autism-and-anxiety/types" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Anxiety →</Link>
            <Link href="/acceptance" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism Acceptance →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
