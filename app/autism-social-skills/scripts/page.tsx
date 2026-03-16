import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Scripts for Autistic Children — When They Help | WeBearish',
  description: 'What social scripts are, when they help autistic children, how to build useful scripts, and why echolalia and scripting are legitimate communication tools.',
  alternates: { canonical: 'https://webearish.com/autism-social-skills/scripts' },
};

export default function SocialScriptsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-social-skills" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Social Skills</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Social Scripts</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SOCIAL SKILLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Social Scripts and When They Help
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Social scripts — prepared phrases, sequences, or dialogue that autistic people can use in predictable social situations — are one of the most practically useful tools in social navigation. They reduce the real-time cognitive demand of social interaction by pre-loading the language needed for specific situations. And they connect to something autistic people are already wired for: pattern recognition and repetition.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes and reflects a neurodiversity-affirming perspective.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Echolalia: Scripting as Communication</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Many autistic people use echolalia — repeating phrases from books, movies, TV shows, or previous conversations — as a genuine communication tool. This is not a failure of language development. It is a creative use of stored language to communicate in situations where generating original language is difficult. Echolalia is meaningful. The child who says "To infinity and beyond!" when they feel determined is communicating something real.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Immediate echolalia (repeating what was just said) often indicates processing or agreement',
              'Delayed echolalia (using stored phrases in new contexts) is often functional communication that requires interpretation',
              'Both forms of echolalia are valid communication and should be responded to, not corrected or suppressed',
              'Autistic people who use echolalia are not "mindlessly repeating" — they have selected those phrases because they work for them',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Building Practical Social Scripts</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Intentionally built social scripts give autistic children language for the specific situations they encounter regularly. Effective scripts are:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Situation-specific', desc: 'Scripts for greetings, for joining play, for declining invitations, for asking for help, for navigating conflict, and for common small-talk situations. Each situation gets its own script rather than one general script for all social interaction.' },
              { label: 'Brief and memorable', desc: 'A three-sentence script is more usable than a paragraph. The child needs to recall and deploy the script in real time — the shorter and more concrete it is, the more accessible it is under stress.' },
              { label: 'Developed collaboratively with the child', desc: 'Scripts the child helps create — using their own phrasing, their own voice — are more natural and more likely to be used. A script that sounds like the child is more sustainable than one that sounds like their parent.' },
              { label: 'Practiced in low-pressure settings', desc: 'Role-playing scripts at home before using them in real situations builds the neural pathway. Practiced language is more accessible than novel language when under social stress.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Example Script Situations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              '"Can I play with you?" — for joining existing play groups on the playground',
              '"I\'m done talking about this right now" — for ending uncomfortable conversations',
              '"I don\'t know" — giving explicit permission to use this as a complete answer',
              '"Can you say that again more slowly?" — for processing difficulties in conversation',
              '"I need a minute" — for stepping back when regulation is needed',
              '"That\'s not something I want to talk about" — for deflecting personal questions',
              '"I disagree, but I won\'t argue about it" — for navigating disagreement without escalation',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Scripts Are Not Masking</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Masking — suppressing autistic traits and performing neurotypicality — is exhausting and harmful. Scripts are different. Scripts are tools that help the autistic person communicate more effectively without requiring them to hide who they are. The distinction matters: a script that helps an autistic child say what they genuinely mean more easily is a support. A script that requires an autistic child to perform emotions they do not feel or suppress behaviors that help them regulate is masking. Keep the child's authenticity at the center.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-social-skills/making-friends" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Making Friends →</Link>
            <Link href="/autism-social-skills/playground" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>The Playground →</Link>
            <Link href="/nonverbal-autism/supporting-communication" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Supporting Communication →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-social-skills" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Skills Hub →</Link>
            <Link href="/communication" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Communication Hub →</Link>
            <Link href="/nonverbal-autism" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Nonverbal Autism →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
