import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supporting Communication Every Day | WeBearish',
  description: 'Daily strategies for supporting communication in autistic children who are minimally verbal or nonverbal — at home, at school, and in the community.',
  alternates: { canonical: 'https://webearish.com/nonverbal-autism/supporting-communication' },
};

export default function SupportingCommunicationPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/nonverbal-autism" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Nonverbal Autism</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Supporting Communication</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>NONVERBAL AUTISM</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Supporting Communication Every Day
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Communication is not just words. Communication is every attempt a person makes to share what is inside them with the world. For autistic children who are minimally verbal or nonverbal, communication happens through behavior, gesture, facial expression, body movement, AAC devices, pictures, sounds, and sometimes through means that are easy to miss if you are not paying attention. Supporting communication daily means becoming a better listener and a better communication partner, not just teaching the child to produce more words.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Work with a speech-language pathologist for individualized communication support.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Communication Partner Mindset</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Your role is not to make your child communicate. Your role is to create an environment where communication is supported, valued, and responded to in whatever form it takes. This shift in mindset changes everything.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Respond to all communication attempts', desc: 'When your child reaches for something, points, makes a sound, leads you by the hand, or uses any form of intentional behavior to express something, respond to it as communication. Responding teaches the child that communicating works, which motivates more communication. Ignoring communication attempts — even unintentionally — teaches the opposite.' },
              { label: 'Wait and give processing time', desc: 'Many autistic children need significantly more processing time than neurotypical children. After you ask a question or present a communication opportunity, wait at least 10-15 seconds before repeating or rephrasing. Silence is not failure — it is processing. Filling the silence with more language creates more to process and actually delays the response.' },
              { label: 'Talk to your child, not about your child', desc: 'Autistic children who do not speak are often talked about as though they are not present. They are present. They are listening. Comprehension and expression are different skills — a child who does not speak may understand significantly more than their output suggests. Address your child directly. Include them in conversations.' },
              { label: 'Follow the child\'s lead', desc: 'When you follow what the child is interested in and narrate or comment on their actions — rather than directing their attention to something else — communication opportunities happen naturally. The child is already engaged; your language adds meaning to their engagement.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Daily Communication Strategies</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Model AAC constantly', desc: 'If your child uses a communication device, use it yourself throughout the day. Point to symbols while you speak. Build simple sentences on the device. Your modeling is the most powerful teaching tool available — children learn to use AAC by watching others use it, just as hearing children learn to speak by hearing others speak.' },
              { label: 'Create communication temptations', desc: 'Purposefully set up situations where your child needs to communicate to get what they want. Put a preferred toy in sight but out of reach. Give a small portion of a snack so they have to request more. Start a favorite activity and then pause. These situations create natural motivation to communicate.' },
              { label: 'Use visual supports throughout the day', desc: 'Visual schedules, choice boards, social stories, and labeled environments support comprehension and give your child tools for expressing preferences and understanding expectations. Visuals reduce reliance on spoken language for understanding the flow of the day.' },
              { label: 'Accept the mode, honor the message', desc: 'If your child communicates a message through behavior (leading you to the fridge), accept that communication. You can model the AAC version ("You want eat! Let\'s get food") without requiring the child to redo the communication "correctly." Insisting on a specific communication mode before responding teaches the child that their natural communication is not valued.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Communication Across Settings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'The AAC device goes everywhere the child goes — school, grandparents\' house, the store, the car, the doctor. Communication is not a school-only activity.',
              'All communication partners need training — siblings, grandparents, babysitters, teachers, aides. A child who can communicate only with one person does not have full communication access.',
              'Include communication goals in the IEP that address generalization across settings, not just performance in the therapy room.',
              'Carry low-tech backups for when devices break, run out of battery, or get lost. A small picture board in the backpack or car ensures communication is always available.',
              'Advocate for your child\'s communication access at doctor\'s offices, restaurants, community activities. Explain the device briefly if needed. Normalize its use.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/nonverbal-autism/aac-devices" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>AAC Devices →</Link>
            <Link href="/nonverbal-autism/presuming-competence" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Presuming Competence →</Link>
            <Link href="/nonverbal-autism/sign-language" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sign Language →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/nonverbal-autism" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Nonverbal Autism Hub →</Link>
            <Link href="/communication" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Communication Hub →</Link>
            <Link href="/autism-social-skills/scripts" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Scripts →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
