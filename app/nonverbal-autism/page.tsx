import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nonverbal and Minimally Verbal Autism: A Guide for Families | WeBearish',
  description: 'What nonverbal and minimally verbal mean, AAC devices, PECS, how communication works beyond speech, and why presuming competence matters.',
  alternates: { canonical: 'https://webearish.com/nonverbal-autism' },
};

export default function NonverbalAutismPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>COMMUNICATION AND AAC</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Nonverbal and Minimally Verbal Autism: A Guide for Families
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Approximately 25 to 30 percent of autistic people are nonverbal or minimally verbal. For families new to this reality, the path forward can feel uncertain. This guide explains what these terms mean, what communication looks like beyond speech, and what the research and autistic community say about supporting communication in meaningful ways.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Nonverbal and Minimally Verbal Mean</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            "Nonverbal" typically describes autistic people who do not use spoken language as their primary means of communication. This does not mean silent. Many nonverbal autistic people make sounds, use single words inconsistently, or have language that does not function for intentional communication in the ways neurotypical people expect.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            "Minimally verbal" is a more specific research term for autistic people who have fewer than 30 words of functional spoken language. The line between nonverbal and minimally verbal is not rigid, and both groups are diverse. Some people who are minimally verbal develop more functional speech over time. Others find that non-speech communication methods are a better fit for their neurology.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Neither term means someone cannot communicate, cannot understand language, or has less inner life, personality, or cognitive capacity than speaking autistic people. These assumptions have caused significant harm.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Presuming Competence</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            "Presume competence" is one of the most important principles in disability rights and in supporting nonspeaking autistic people. It means treating a nonverbal autistic person as someone with a full inner life, the ability to understand, learn, and have preferences -- regardless of what external behavior suggests.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Research and the accounts of autistic people who later gained reliable communication methods confirm that many nonspeaking autistic people understood far more than the adults around them realized. They were present, they were listening, they had opinions -- they simply could not express them in the expected ways.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Presuming competence changes how you speak to and about your child in their presence. It changes what content you expose them to. It changes what opportunities you offer. It is not naivete -- it is evidence-based respect.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Augmentative and Alternative Communication (AAC)</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            AAC is the field of communication methods that supplement or replace spoken speech. This includes both high-tech and low-tech options. Research consistently shows that AAC does not reduce the development of speech -- it often supports it. No child should be denied access to AAC in hopes that speech will come without support.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Speech-generating devices (SGDs)', desc: 'Dedicated electronic devices that produce speech output when a user selects symbols, words, or phrases. iPad-based apps like Proloquo2Go, TouchChat, and LAMP Words for Life are common SGD solutions. Some users type to text-to-speech. SGDs are often covered by insurance or Medicaid for eligible users.' },
              { title: 'Communication apps on tablets', desc: 'Apps like Proloquo2Go, Grid for iPad, and CoughDrop provide robust symbol-based or text-based communication on consumer devices. Less expensive than dedicated SGDs. Not always covered by insurance.' },
              { title: 'Low-tech communication boards', desc: 'Laminated boards or binders with symbols, words, or photographs. Robust, portable, and impossible to run out of battery. An essential backup to any high-tech device.' },
              { title: 'Core vocabulary systems', desc: 'A communication approach organizing vocabulary around high-frequency, flexible words ("go," "more," "stop," "want," "like") that can be used across many contexts. Core vocabulary is the foundation of most robust AAC systems.' },
              { title: 'Typing and text-based communication', desc: 'Some nonverbal autistic people communicate most effectively through typing -- on a keyboard, tablet, or phone. This should be offered as an option and taught with the same seriousness as any other AAC method.' },
            ].map(item => (
              <div key={item.title} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>PECS: Picture Exchange Communication System</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            PECS is a structured program that teaches communication through the exchange of picture symbols. The learner hands a picture to a communication partner to request items or actions. PECS is widely used in schools and has research support for teaching functional requesting. It progresses through phases from basic requesting to building sentences.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            PECS is a starting point, not a ceiling. It is designed to be a bridge toward more robust communication, including speech or more complex AAC. PECS alone does not provide the full vocabulary needed for independent, flexible communication. Most AAC specialists recommend expanding beyond PECS toward robust AAC as the child develops.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Communication Beyond Speech: What to Pay Attention To</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Nonverbal autistic people communicate. The communication may be in forms that take time and attention to learn to read. As a family member, learning your child's communication is as important as providing them with tools.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Body language and body movement -- approaching or moving away, posture changes, facial expression',
              'Vocalizations -- pitch, rhythm, urgency, and context of sounds',
              'Behavioral communication -- leading you to something, placing your hand on an object',
              'Eye gaze -- what they look at, for how long, and in what context',
              'Stimming patterns -- changes in stimming intensity or type as communication of internal state',
              'Resistance or refusal -- often communication of discomfort, pain, or need',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Supporting AAC at Home and School</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            AAC only works if it is used consistently and modeled by everyone in the child's life. Key principles for supporting AAC:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Model AAC use yourself. Touch the device or board when you speak. Show how it works through your own use.',
              'Give the device access at all times. An AAC device taken away as punishment removes communication access.',
              'Do not require the child to "earn" communication. AAC is not a reward -- it is a right.',
              'Accept all communication attempts, including approximations and partial messages.',
              'Build vocabulary proactively, not just for immediate requests. AAC users need words for emotions, opinions, and commentary too.',
              'Share vocabulary lists and strategies between home and school so the child has consistent access.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0, fontSize: 13 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>All Resources →</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>WeBearish Blog →</Link>
            <Link href="/contact" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Contact Us →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/communication" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Communication Resources →</Link>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Resource Center →</Link>
            <Link href="/autism-school-accommodations" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Accommodations →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
