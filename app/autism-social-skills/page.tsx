import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Skills and Autism: What Actually Helps | WeBearish',
  description: 'Why traditional social skills training has limits, what actually supports autistic social development, the difference between masking and genuine connection, and peer support models.',
  alternates: { canonical: 'https://webearish.com/autism-social-skills' },
};

export default function AutismSocialSkillsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISTIC SOCIAL EXPERIENCE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Social Skills and Autism: What Actually Helps
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Social skills training is one of the most common interventions offered to autistic children. It is also one of the most critiqued -- by autistic adults, researchers, and disability rights advocates. Understanding what actually supports autistic social development requires looking honestly at the evidence, the autistic experience, and what connection really means.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Rethinking "Social Skills"</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The premise of most social skills training is that autistic people lack skills that neurotypical people have, and the goal is to teach autistic people to behave more neurotypically. This premise is contested by autistic researchers and advocates, and for good reason.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Autistic people are not asocial or unable to connect. They have their own social styles, social interests, and ways of relating. Research on the "double empathy problem" -- developed by autistic researcher Damian Milton -- shows that communication difficulties between autistic and neurotypical people are mutual. Autistic people communicate effectively with other autistic people. The "deficit" disappears when neurotypical expectations are removed from the equation.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            This does not mean autistic people never want support in navigating social situations. Many do. But the goal should be supporting genuine connection and reducing distress -- not training autistic children to pass as neurotypical.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Limits of Traditional Social Skills Training</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Traditional social skills groups typically teach scripts and rules: make eye contact, take turns talking, ask questions about the other person. These are real neurotypical norms, and knowing them has practical value. But the approach has significant limits:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Skills do not generalize', desc: 'Autistic people often learn specific scripts in specific contexts that do not transfer to other situations. Social interaction is not a fixed set of rules -- it is context-dependent and constantly shifting.' },
              { label: 'It reinforces masking', desc: 'Teaching autistic children to perform neurotypical social behaviors is, by definition, teaching them to mask. Masking is associated with anxiety, depression, and burnout. The intervention can worsen the outcomes it is meant to improve.' },
              { label: 'It signals that autistic ways of being are wrong', desc: 'When an autistic child is repeatedly told their natural way of engaging is incorrect, the message they receive is that they are defective. This harms self-concept and wellbeing.' },
              { label: 'It often does not improve friendships', desc: 'Research on whether social skills training actually improves autistic children\'s social relationships and quality of life is mixed. Learning rules does not translate into belonging.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Masking vs. Genuine Connection</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Masking is the suppression of autistic traits to appear more neurotypical. Many autistic children learn to mask early and thoroughly. In social contexts, masking might look like forcing eye contact, performing interest in conversations they are not engaged in, suppressing stimming, or following conversational rules they have memorized rather than engaging authentically.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Masking can produce the appearance of social success while generating significant internal distress. An autistic child who appears to have lots of friends may be exhausted, anxious, and increasingly unable to maintain the performance. The mask, not the person, is making the connections.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Genuine connection -- where an autistic person is accepted as they are, does not have to perform, and can engage in ways that feel natural -- is qualitatively different. It is also better for mental health. The goal for parents and educators should be creating conditions for genuine connection, not teaching better masking.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Actually Supports Autistic Social Development</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Autistic peer community', desc: 'Many autistic people find their most meaningful social connections with other autistic people, where the "double empathy" problem does not apply. Connecting your child with autistic peers -- through autism-specific social groups, camps, or online communities -- can provide the belonging that neurotypical settings do not.' },
              { title: 'Interest-based connection', desc: 'Autistic people often connect best through shared interests. A group organized around a shared topic -- a game, a craft, a subject area -- provides a natural scaffold for interaction without requiring performance of social scripts.' },
              { title: 'Reducing the social demand', desc: 'Making social environments less demanding -- by reducing sensory load, reducing expectations for eye contact, allowing alternative interaction styles -- lets autistic children engage more genuinely with less depletion.' },
              { title: 'Teaching context, not scripts', desc: 'If social skills support is offered, it is more useful to help autistic people understand the underlying intentions and contexts of social situations than to memorize scripts. "Why do people talk about the weather?" is more useful than a script about what to say about the weather.' },
              { title: 'Protecting from bullying and social harm', desc: 'Autistic children are at significantly elevated risk of bullying and social victimization. Protecting autistic children from harmful social environments is a prerequisite for any positive social development.' },
              { title: 'Autistic identity and self-acceptance', desc: 'Research consistently shows that positive autistic identity -- understanding oneself as autistic, connecting with autistic community, viewing autism as part of who you are -- is associated with better mental health and social outcomes. Identity is social support.' },
            ].map(item => (
              <div key={item.title} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Peer Support Models</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Peer-mediated support models -- where neurotypical peers are trained to engage more naturally and inclusively with autistic classmates -- have stronger research support than traditional social skills training and do not require the autistic child to perform or mask. These models work by changing the environment rather than requiring the autistic child to change.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Peer support programs exist in many school districts and can be requested as part of an IEP. They create conditions for genuine interaction rather than scripted performance. Ask your child's school about peer support options.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            For parents, connecting with autistic-led organizations that center autistic voices and autistic community can point toward resources that reflect genuine support rather than performance training.
          </p>
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
            <Link href="/community" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Community →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism and Anxiety →</Link>
            <Link href="/autism-in-girls" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism in Girls →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
