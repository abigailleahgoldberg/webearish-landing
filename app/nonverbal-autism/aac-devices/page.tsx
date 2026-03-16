import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AAC Devices: A Complete Guide for Families | WeBearish',
  description: 'Everything families need to know about AAC (Augmentative and Alternative Communication) devices for autistic children — types, selection, implementation, and funding.',
  alternates: { canonical: 'https://webearish.com/nonverbal-autism/aac-devices' },
};

export default function AACDevicesPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/nonverbal-autism" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Nonverbal Autism</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>AAC Devices</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>NONVERBAL AUTISM</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          AAC Devices: A Complete Guide
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          AAC — Augmentative and Alternative Communication — refers to any method that supplements or replaces spoken language. For autistic children who are minimally verbal or nonverbal, AAC is not a workaround — it is a legitimate communication system that can open up expression, reduce frustration, and fundamentally change quality of life. AAC does not prevent speech development; research consistently shows it supports it.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. AAC implementation should involve a speech-language pathologist with AAC expertise. This content is for informational purposes.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Types of AAC</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'High-tech AAC devices', desc: 'Dedicated communication devices or apps on tablets that generate speech from symbol selection or text input. Examples include Proloquo2Go, TouchChat, Snap Core First, and LAMP Words for Life. These devices can hold thousands of vocabulary items and grow with the child. They are the most powerful and flexible AAC option and are often covered by insurance with proper documentation.' },
              { label: 'Low-tech AAC', desc: 'Communication boards, books, or printed symbol sets that do not require technology. Low-tech AAC is portable, never runs out of battery, and can be used in any environment. Many families use low-tech AAC as a backup to high-tech devices or as a starting point before obtaining a device.' },
              { label: 'Speech-generating apps on consumer tablets', desc: 'AAC apps on iPads and Android tablets are often significantly less expensive than dedicated devices and are more socially normalized for children. Many families find that their child engages more naturally with a consumer device that other children also use.' },
              { label: 'Voice output communication aids (VOCAs)', desc: 'Physical devices with pre-programmed buttons that speak phrases when pressed. Simpler than full AAC systems and useful for specific communication contexts — a go/no device, a basic needs device, a transition support device.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Getting Started with AAC</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Get an AAC evaluation', desc: 'A speech-language pathologist with AAC specialization can assess your child\'s motor skills, visual skills, cognitive level, and communication needs to recommend the most appropriate AAC system. This evaluation is also necessary for insurance coverage of dedicated devices.' },
              { label: 'Start now, do not wait', desc: 'There is no developmental readiness prerequisite for AAC. The idea that children must demonstrate readiness before being given a communication device is outdated and harmful. All autistic children deserve access to communication tools regardless of their current communication level.' },
              { label: 'Model, model, model', desc: 'The most important thing communication partners can do is model AAC use themselves — pointing to symbols on the device during conversation, using the device to communicate with the child. Expecting the child to use AAC without modeling it is like expecting a child to speak a language they have never heard spoken.' },
              { label: 'Give it time', desc: 'AAC adoption takes time. Children go through a learning curve with any new communication system. Months of consistent modeling and access typically precede independent use. Commitment from the whole family and the school team makes the difference.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Funding AAC</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Medicaid covers AAC devices for eligible children — a speech-language pathologist can help with the documentation needed for approval',
              'Private insurance often covers AAC with a prescription and documentation of medical necessity',
              'School districts are required to provide AAC as part of a Free and Appropriate Public Education if the IEP team determines it is needed',
              'Loan libraries and device trials allow families to test systems before committing — ask an AAC specialist about options in your state',
              'Nonprofit organizations and foundations provide grants for AAC equipment for families who do not qualify for insurance coverage',
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
            <Link href="/nonverbal-autism/pecs" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>PECS Guide →</Link>
            <Link href="/nonverbal-autism/supporting-communication" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Supporting Communication →</Link>
            <Link href="/nonverbal-autism/presuming-competence" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Presuming Competence →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/nonverbal-autism" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Nonverbal Autism Hub →</Link>
            <Link href="/communication/aac" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>AAC Communication →</Link>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Guide →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
