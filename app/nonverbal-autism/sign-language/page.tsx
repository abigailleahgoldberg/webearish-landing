import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Language for Autistic Children | WeBearish',
  description: 'How sign language can support communication for autistic children — ASL, key word signing, total communication, and how signing can support speech development.',
  alternates: { canonical: 'https://webearish.com/nonverbal-autism/sign-language' },
};

export default function SignLanguagePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/nonverbal-autism" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Nonverbal Autism</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Sign Language</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>NONVERBAL AUTISM</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Sign Language for Autistic Children
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Signing is one of the most natural and accessible communication supports for many autistic children. It requires no technology, no battery, no device, and is always available. For children who have the motor skills for signing, it can provide an immediate communication bridge — and research consistently shows that signing supports, not inhibits, speech development in autistic children.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. Communication support should involve a speech-language pathologist. This content is for informational purposes.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Types of Signing Used with Autistic Children</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'ASL (American Sign Language)', desc: 'A complete language with its own grammar and syntax, used by the Deaf community in the US and Canada. Teaching a child ASL gives them access to a rich, living language and a community. ASL is appropriate for autistic children who have the motor control for signing and who will be around signers — at Deaf schools, with Deaf family members, or in communities where ASL is used.' },
              { label: 'Key word signing (Makaton, Signing Exact English)', desc: 'Systems that use signs from ASL or other sign languages but paired with spoken English, signing only the key words of a sentence rather than the full grammar of sign language. These systems are designed as communication support tools rather than as a primary language. They are widely used with autistic children in educational settings.' },
              { label: 'Simplified signing for specific vocabulary', desc: 'Many families teach a small core of signs without committing to a full system — signs for "more," "all done," "eat," "drink," "help," "stop," "please," "yes," and "no." These high-frequency words address the most common communication needs and can be taught by parents without formal sign language training.' },
              { label: 'Total Communication', desc: 'An approach that uses every available communication modality simultaneously — speech, signing, AAC, pictures, gestures, facial expression — rather than selecting one. Total Communication accepts and values all forms of communication and is a good fit for autistic children who use different modalities in different contexts.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Does Signing Prevent Speech Development?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            No. This is one of the most persistent myths about signing and AAC, and it is not supported by research. Multiple studies have found that signing supports speech development in autistic children — it does not replace it. When a child has a reliable way to communicate what they need, the pressure and frustration around speaking is reduced, and speech development is more likely, not less. The research on this is consistent.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'A child who signs "more" while also attempting the word "more" is practicing both simultaneously',
              'Reducing communication frustration through signing often reduces the behaviors driven by that frustration',
              'No child has ever been proven to stop developing speech because they were given a signing system',
              'Speech-language pathologists who work with autistic children do not avoid signing out of concern for speech development',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Starting Signing at Home</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Start with the most functional signs first', desc: 'More, all done, help, eat, drink, yes, no, stop, please. These signs address the child\'s highest-priority communication needs and provide the quickest return.' },
              { label: 'Sign consistently in context', desc: 'Sign the word every time you say it in the relevant context. Consistency across communication partners — parents, siblings, teachers — accelerates acquisition.' },
              { label: 'Use ASL resources that are freely available', desc: 'ASL is documented extensively on YouTube, Handspeak, and Lifeprint. Many free resources exist for parents learning signs. You do not need to be fluent to support your child.' },
              { label: 'Accept approximations', desc: 'Just as you accept approximated spoken words — "ba" for ball, "da" for dog — accept approximated signs. A child whose motor coordination is developing will not produce perfect signs. The communication intent is what matters.' },
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
            <Link href="/nonverbal-autism/aac-devices" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>AAC Devices →</Link>
            <Link href="/nonverbal-autism/pecs" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>PECS Guide →</Link>
            <Link href="/nonverbal-autism/supporting-communication" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Supporting Communication →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/nonverbal-autism" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Nonverbal Autism Hub →</Link>
            <Link href="/communication/aac" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>AAC Communication →</Link>
            <Link href="/autism-social-skills/scripts" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Scripts →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
