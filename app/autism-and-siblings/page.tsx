import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Raising Siblings of Autistic Children: What Families Need | WeBearish',
  description: 'How to support neurotypical siblings of autistic children, age-appropriate explanations, preventing resentment, family dynamics, and sibling support groups.',
  alternates: { canonical: 'https://webearish.com/autism-and-siblings' },
};

export default function AutismAndSiblingsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>FAMILY SUPPORT</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Raising Siblings of Autistic Children: What Families Need
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          When one child in a family is autistic, every member of the family is affected -- including siblings. Siblings of autistic children often have experiences that are not widely talked about: pride and fierce loyalty alongside confusion, resentment, loneliness, and sometimes grief. All of these experiences are real, and all of them deserve attention.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Siblings Experience</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Research on siblings of autistic children shows a complex picture. Many siblings describe deep bonds, strong protective instincts, and pride in their sibling. Many also describe experiences that are hard to talk about in their families: feeling overlooked, feeling guilty for feeling overlooked, struggling to bring friends home, or feeling responsible for their autistic sibling's wellbeing in ways that are not appropriate for their age.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The sibling experience is not uniform. It depends on the age of the siblings, the severity of the autistic child's support needs, how parents handle the dynamics, and what support resources are available. But the complexity is consistent -- and it deserves to be addressed directly rather than managed through reassurance or minimization.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Feeling overlooked', desc: 'Parents of autistic children often spend significant time and energy on appointments, advocacy, and crisis response. Siblings see this. Even when parents are doing their best, the sibling may feel less visible.' },
              { label: 'Guilt about their own feelings', desc: 'A sibling who feels frustrated, jealous, or resentful often feels guilty for having those feelings -- especially when they understand that their autistic sibling faces real challenges. The guilt compounds the original feeling.' },
              { label: 'Social complexity', desc: 'Bringing friends home, explaining their sibling to peers, or managing situations in public where their autistic sibling has a meltdown can be socially stressful in ways that are unique to their experience.' },
              { label: 'Taking on caretaking roles', desc: 'Some siblings, particularly older ones, take on caretaking responsibilities that may be meaningful or may be burdensome -- or both. Monitoring and moderating this is an important parental task.' },
              { label: 'Fear about the future', desc: 'Many siblings, especially as they get older, worry about what happens to their autistic sibling as they and their parents age. This is a real concern that deserves real conversation.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Age-Appropriate Explanations</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Children of all ages deserve honest, age-appropriate explanations of autism. The goal is accuracy and normalization, not sugar-coating or clinical detachment. Some principles:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { age: 'Ages 2 -- 5', desc: 'Keep it simple and concrete. "Your brother\'s brain works differently. It\'s hard for him to talk, so he shows you what he needs in other ways. He loves you even when he can\'t say it." Focus on what is observable and reassuring.' },
              { age: 'Ages 6 -- 10', desc: 'Children this age can handle more: "Autism means her brain processes things differently. Sounds might feel louder to her. Change can be harder for her. That\'s why we have some different rules for her -- not because she gets special treatment, but because she has different needs." Answer questions honestly.' },
              { age: 'Ages 11+', desc: 'Adolescents can engage with more complexity, including the social and systemic dimensions of autism. They may have real feelings about fairness, about their own needs, and about the future. Create space for those conversations without rushing to reassure. Listen before explaining.' },
            ].map(item => (
              <div key={item.age} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--lime)', marginBottom: 6 }}>{item.age}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Preventing Resentment: What Parents Can Do</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Resentment in siblings is rarely about not loving their autistic sibling. It is usually about feeling unseen, undervalued, or burdened in ways that are not acknowledged. Some practical approaches:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Protect one-on-one time with each child. Even short, regular, predictable time that belongs to that child matters significantly.',
              'Acknowledge the sibling\'s experience directly. "I know this is sometimes hard for you. Your feelings are okay. I want to hear about them."',
              'Do not make the neurotypical sibling responsible for the autistic child\'s behavior or emotions.',
              'Let siblings have spaces and times that are theirs -- not shaped around the autistic child\'s needs.',
              'Do not tell siblings how to feel or how to relate to their autistic sibling. Support the relationship without scripting it.',
              'Take sibling concerns seriously. If a sibling says something is unfair, investigate rather than dismiss.',
              'Avoid language that casts the sibling primarily as a helper, caregiver, or model for their autistic sibling.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Family Dynamics and the Whole System</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Families with autistic children develop patterns over time. Some patterns are adaptive -- routines that reduce stress, clear communication, defined expectations. Some are not -- one child consistently having needs overridden, one child expected to be endlessly flexible, parents so depleted that the emotional bandwidth for the neurotypical child is minimal.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Family therapy with a therapist experienced in autism can help the whole family system function better. This is not a sign of failure -- it is a resource. A family therapist can help address dynamics that are hard to see from inside the family.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Parent self-care is not separate from sibling support. Parents who are chronically depleted have less capacity to attend to any of their children. Taking care of yourself is part of taking care of all your children.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Sibling Support Groups</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Sibling-specific support groups -- where siblings of autistic and disabled children can talk with peers who share their experience -- are one of the most valuable resources available and among the least used. Hearing that other children feel the same things, struggle with the same questions, and love their siblings the same complicated way is genuinely helpful.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            SibShops is a well-established program for siblings of children with special health and developmental needs. It is available in many communities across the United States and internationally. It uses recreation, discussion, and peer connection to support siblings in a non-clinical environment. Search "SibShops [your city]" to find a local program.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Online communities for adult siblings of autistic people also exist and can be valuable for older siblings and adult siblings navigating future planning questions.
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
            <Link href="/siblings" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Siblings Overview →</Link>
            <Link href="/parents" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>For Parents →</Link>
            <Link href="/community" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Community →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
