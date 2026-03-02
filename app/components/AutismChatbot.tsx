'use client';
import { useState, useRef, useEffect } from 'react';

const QA: [string, string][] = [
  ["what is autism","Autism (autism spectrum condition or ASC) is a neurological difference that affects how a person perceives the world, communicates, and interacts. It is not a disease, disorder to be cured, or tragedy. It is a different way of being human. The term 'spectrum' reflects the wide diversity of autistic experiences — no two autistic people are the same."],
  ["what is masking","Masking (also called camouflaging) is when an autistic person suppresses or hides their natural autistic behaviors to appear more neurotypical. This can include forcing eye contact, scripting conversations, suppressing stimming, or mirroring others. Masking is exhausting and is linked to autistic burnout, anxiety, and depression. Many autistic people mask without realizing it."],
  ["what is stimming","Stimming (self-stimulatory behavior) refers to repetitive movements, sounds, or sensory input that autistic people use to self-regulate. Examples include hand flapping, rocking, humming, spinning, or tapping. Stimming is not a problem to be eliminated — it serves real regulatory functions. Suppressing stims causes distress."],
  ["what is autistic burnout","Autistic burnout is a state of physical and mental exhaustion caused by prolonged masking, chronic stress, and sensory or social overload. It looks different from depression and occupational burnout. Symptoms include loss of skills (regression in speech, executive function, self-care), extreme fatigue, increased sensory sensitivity, and withdrawal. Recovery takes weeks to months."],
  ["what is aba","ABA (Applied Behavior Analysis) is a behavioral therapy historically used with autistic children. It focuses on increasing 'desired' behaviors and reducing 'undesired' ones through reinforcement. Many autistic adults who received ABA report trauma, PTSD symptoms, and harm from being forced to suppress natural behaviors. Contemporary ABA has evolved, but the autistic community remains deeply divided on it. If you are evaluating ABA, read both the clinical literature and the firsthand accounts of autistic adults who experienced it."],
  ["is aba harmful","The autistic community is deeply divided on ABA. Many autistic adults who received it as children report trauma, suppressed identity, and PTSD-like symptoms. Peer-reviewed research (Kupferstein 2018) found elevated PTSD symptoms in autistic people who received ABA. Critics argue ABA prioritizes compliance over wellbeing and teaches autistic children to mask rather than thrive. Supporters argue modern ABA has moved toward naturalistic, assent-based approaches. If you are making this decision for a child, read autistic adult perspectives alongside clinical recommendations."],
  ["what is pda","PDA (Pathological Demand Avoidance or, more affirmingly, Pervasive Drive for Autonomy) is a profile within autism characterized by an extreme anxiety-driven need to avoid demands and expectations. PDA is not defiance or behavior — it is a nervous system response. Traditional autism strategies (firm routines, reward systems, clear expectations) often backfire with PDA profiles. Low-demand, collaborative approaches work better."],
  ["what is the double empathy problem","The Double Empathy Problem (coined by researcher Damian Milton) argues that communication difficulties between autistic and non-autistic people are mutual — not a deficit in autistic people alone. Research shows autistic people communicate effectively with other autistic people. The problem is bidirectional, but the social and professional costs have historically fallen entirely on autistic people to 'fix.'"],
  ["how do i get an autism diagnosis","The path varies by age. For children: start with your pediatrician, request a developmental evaluation, and ask for referrals to a developmental pediatrician or child psychologist. For adults: seek a neuropsychologist or psychiatrist with autism experience — primary care doctors often have limited knowledge of adult presentations. Many adults self-identify first, then pursue formal diagnosis. A formal diagnosis unlocks legal protections, accommodations, and services."],
  ["what is an iep","An IEP (Individualized Education Program) is a legal document under IDEA (Individuals with Disabilities Education Act) that outlines the specific educational supports and services a child with a disability is entitled to in US public schools. Parents are equal members of the IEP team. You have the right to request evaluations, bring advocates, reject proposals, and appeal decisions. See our full IEP guide at /iep."],
  ["what accommodations can my child get","Common school accommodations for autistic students include: extended time on tests, preferential seating, reduced homework load, sensory breaks, use of fidgets, alternative assessment formats, reduced noise environments, AAC devices, social skills support, and behavioral support plans. These are rights, not favors. Visit /iep for a full accommodations list and how to request them."],
  ["what is aac","AAC (Augmentative and Alternative Communication) refers to any method used to communicate besides spoken speech. This includes picture boards (PECS), speech-generating devices, sign language, and apps like Proloquo2Go or TouchChat. AAC does not prevent speech development — research shows it supports speech. All autistic people who need AAC have the right to it, including in school settings. Visit /communication/aac for a full guide."],
  ["identity first or person first","Both are used and both are valid — the key is following individual preference. Identity-first language ('autistic person') is preferred by a majority of autistic adults in surveys, as it treats autism as part of identity rather than something separate from the person. Person-first language ('person with autism') is often preferred by some parents and some autistic individuals. WeBearish uses identity-first language by default while respecting individual choice."],
  ["what is sensory processing","Sensory processing refers to how the nervous system receives, organizes, and responds to sensory input. Many autistic people experience sensory processing differences — hypersensitivity (over-responsiveness to input like sound, light, texture, smell) or hyposensitivity (under-responsiveness, seeking more input). These are real neurological differences, not preferences or behaviors. Sensory overwhelm is a physiological event, not a choice."],
  ["what is late diagnosis","Late diagnosis refers to receiving an autism diagnosis in adulthood — or in later childhood after years of being missed. It is common, especially in women, girls, and gender-diverse people who are more likely to mask effectively. Late diagnosis often brings a mix of relief, grief, and identity reclamation. It is never too late to understand yourself. Visit /adults/late-diagnosis for a full guide."],
  ["what is the autism spectrum","The autism spectrum is not a linear scale from 'mild' to 'severe.' It is a multidimensional profile of strengths and support needs across different domains: communication, sensory processing, executive function, social cognition, and motor skills. A person can have significant support needs in one area and minimal needs in another. 'High functioning' and 'low functioning' labels are considered outdated and harmful by most autistic advocates."],
  ["what causes autism","Autism is largely genetic — research indicates strong heritability. No single gene causes autism; it involves complex interactions of many genes. Environmental factors may interact with genetic predispositions. Vaccines do not cause autism — this claim originated from a fraudulent, retracted study. The increase in autism prevalence reflects broader diagnostic criteria, increased awareness, and reduced stigma around seeking diagnosis."],
  ["what is a meltdown","An autistic meltdown is an intense response to sensory or emotional overwhelm. It is involuntary — not a tantrum or manipulation. During a meltdown, the person loses regulatory capacity. They are not choosing to behave this way. Strategies: reduce sensory input, stay calm, give space, do not try to reason or teach during the meltdown. Aftermath often includes exhaustion and shame. See /guides/meltdown-vs-tantrum for more."],
  ["what is a shutdown","A shutdown is another response to overwhelm — instead of an outward meltdown, the person goes inward. They may stop speaking, become unresponsive, withdraw, or appear 'checked out.' Shutdowns are just as real as meltdowns. Give the person space, reduce demands, and wait."],
  ["how do i talk to my child about autism","Be honest, age-appropriate, and positive. Avoid framing autism as a problem to fix or a tragedy. Frame it as a different way their brain works — with real strengths and some real challenges. Books like 'I Am Enough' (for younger children) and first-person autistic memoirs (for older kids) help. Visit /ages for age-specific guidance."],
  ["what resources are available in my state","WeBearish has a resource guide for every US state, including Medicaid waiver programs, insurance mandates for autism therapy, autism society chapters, school rights information, and crisis lines. Visit /resources/by-state and select your state."],
  ["what is fape","FAPE stands for Free Appropriate Public Education — a right guaranteed to all children with disabilities in the US under IDEA. It means your child is entitled to special education services at no cost to you, tailored to their individual needs. If the school proposes something that is not appropriate for your child, you have the right to disagree and appeal."],
  ["what is autism acceptance","Autism acceptance goes beyond awareness. Awareness says 'autism exists.' Acceptance says autistic people belong, have value, and deserve support without being required to appear neurotypical. The autism acceptance movement — led largely by autistic advocates — pushes for inclusive design, supported autonomy, and an end to therapies whose goal is to make autistic people less visibly autistic."],
  ["is autism a disability","Autism is considered a disability under the ADA (Americans with Disabilities Act) and IDEA, which means autistic people are entitled to legal protections and accommodations in schools and workplaces. Whether an individual autistic person identifies as disabled is a personal choice. The social model of disability frames disability as the result of a mismatch between a person and an environment — not an inherent deficiency in the person."],
];

type Msg = { role: 'user' | 'bot'; text: string };

function findAnswer(q: string): string {
  const lower = q.toLowerCase();
  let best = { score: 0, ans: '' };
  for (const [key, ans] of QA) {
    const words = key.split(' ');
    const score = words.filter(w => lower.includes(w)).length / words.length;
    if (score > best.score) best = { score, ans };
  }
  if (best.score > 0.4) return best.ans;
  return "That is a great question. WeBearish covers hundreds of topics — try browsing our Glossary (/glossary), Conditions hub (/conditions), or IEP guide (/iep). If you have a specific question about autism acceptance, diagnosis, therapies, or school rights, try rephrasing and I will do my best to help.";
}

export default function AutismChatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: 'bot', text: 'Hello. Ask me anything about autism acceptance, diagnosis, therapies, school rights, or resources. I am not a doctor — this is educational information only.' }]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);

  const send = () => {
    if (!input.trim()) return;
    const q = input.trim();
    setInput('');
    setMsgs(m => [...m, { role: 'user', text: q }, { role: 'bot', text: findAnswer(q) }]);
  };

  return (
    <>
      {/* Floating button */}
      <button onClick={() => setOpen(o => !o)}
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, width: 56, height: 56, borderRadius: '50%', background: 'var(--forest)', border: '2px solid var(--lime)', color: 'var(--lime)', fontSize: 24, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
        aria-label="Ask a question">
        {open ? '✕' : '🐻'}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{ position: 'fixed', bottom: 88, right: 24, zIndex: 998, width: 'min(380px, calc(100vw - 32px))', height: 480, background: 'var(--dark)', border: '1px solid rgba(184,232,135,0.2)', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}>
          {/* Header */}
          <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(184,232,135,0.1)', background: 'var(--forest)' }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--cream)' }}>WeBearish Resource Guide</div>
            <div style={{ fontSize: 11, color: 'rgba(250,250,248,0.5)', marginTop: 2 }}>Educational info only. Not medical advice.</div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '85%', padding: '10px 14px', background: m.role === 'user' ? 'var(--forest)' : 'rgba(255,255,255,0.04)', border: m.role === 'user' ? '1px solid rgba(184,232,135,0.2)' : '1px solid rgba(255,255,255,0.06)', fontSize: 13, color: 'var(--cream)', lineHeight: 1.6, borderRadius: 2 }}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '10px 12px', borderTop: '1px solid rgba(184,232,135,0.1)', display: 'flex', gap: 8 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about autism..."
              style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(184,232,135,0.15)', color: 'var(--cream)', padding: '10px 12px', fontSize: 13, outline: 'none' }} />
            <button onClick={send}
              style={{ background: 'var(--lime)', color: 'var(--dark)', fontWeight: 900, fontSize: 12, padding: '10px 14px', border: 'none', cursor: 'pointer' }}>
              Ask
            </button>
          </div>
        </div>
      )}
    </>
  );
}
