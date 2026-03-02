import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism Research: What the Studies Actually Say | WeBearish',
  description: "Plain-language summaries of the most important autism research — prevalence, double empathy, masking, burnout, late diagnosis, and more.",
  alternates: { canonical: 'https://webearish.com/research' },
};

const STUDIES = [
  {
    title: 'Autism Prevalence: 1 in 36',
    source: 'CDC MMWR, 2023',
    link: 'https://www.cdc.gov/mmwr/volumes/72/ss/ss7202a1.htm',
    summary: 'The CDC\'s 2023 Autism and Developmental Disabilities Monitoring Network report found that 1 in 36 children in the US has been identified with autism spectrum disorder. This represents a significant increase from 1 in 44 in the 2018 data. The increase reflects expanded diagnostic criteria, increased awareness, and greater access to evaluation — not a true epidemic. Prevalence is higher in boys (1 in 23) than girls (1 in 77), though this gap is increasingly attributed to diagnostic bias and masking rather than true prevalence differences.',
  },
  {
    title: 'The Double Empathy Problem',
    source: 'Milton, D. (2012). Disability & Society',
    link: 'https://doi.org/10.1080/09687599.2012.710008',
    summary: 'Damian Milton\'s landmark paper proposed that the communication difficulties between autistic and non-autistic people are mutual — not a one-sided deficit in autistic people. Subsequent research has supported this: autistic people communicate effectively with other autistic people, and non-autistic people show poor understanding of autistic communication as well. The social difficulties historically attributed to autistic people are partly artifacts of cross-neurotype communication. The implications are significant: the burden of accommodation should not fall entirely on autistic people.',
  },
  {
    title: 'ABA and PTSD Symptoms',
    source: 'Kupferstein, H. (2018). Advances in Autism',
    link: 'https://doi.org/10.1108/AIA-08-2017-0016',
    summary: 'This peer-reviewed study examined PTSD symptoms in autistic adults and found that those who had received ABA therapy showed significantly elevated PTSD scores. The study is controversial — critics note methodological limitations. But it is peer-reviewed, it is published, and it adds to a substantial body of first-person autistic accounts describing trauma from compliance-based therapies. The study does not prove causation, but it warrants serious consideration.',
  },
  {
    title: 'Camouflaging and Mental Health',
    source: 'Cage & Troxell-Whitman (2019). Journal of Autism and Developmental Disorders',
    link: 'https://doi.org/10.1007/s10803-018-3813-0',
    summary: 'This study of 309 autistic adults found that camouflaging (masking) was associated with greater depression, anxiety, and lower quality of life. Camouflaging motivations tied to external social pressure — rather than genuine desire to connect — showed the strongest negative outcomes. The research supports what autistic advocates have argued for decades: forcing autistic people to suppress authentic behavior causes measurable harm.',
  },
  {
    title: 'Autistic Burnout',
    source: 'Raymaker et al. (2020). Autism in Adulthood',
    link: 'https://doi.org/10.1089/aut.2019.0079',
    summary: 'The first major peer-reviewed study on autistic burnout defined it as a state of long-term exhaustion, loss of skills, and reduced tolerance for stimuli resulting from chronic life stress and lack of support. Autistic adults described burnout as qualitatively different from depression or occupational burnout. Masking, sensory overload, and lack of autistic community support were key contributors. Recovery required reducing masking, increasing accommodations, and connecting with autistic community.',
  },
  {
    title: 'Late Diagnosis and Identity',
    source: 'Lewis, L.F. (2017). Journal of Autism and Developmental Disorders',
    link: 'https://doi.org/10.1007/s10803-016-2982-z',
    summary: 'Qualitative interviews with autistic adults who received late diagnoses found common themes: relief and validation, grief for lost years, anger at missed support, and a process of identity reclamation. Many described diagnosis as enabling them to understand lifelong experiences in a new frame. The study supports the value of adult diagnosis even without access to childhood services — the self-understanding alone has significant wellbeing value.',
  },
  {
    title: 'Gender Diversity in Autism',
    source: 'Van Der Miesen et al. (2018). Journal of Autism and Developmental Disorders',
    link: 'https://doi.org/10.1007/s10803-017-3417-5',
    summary: 'Multiple studies have found that autistic people are significantly more likely to be gender-diverse (non-binary, transgender, or gender non-conforming) than the general population. Estimates vary widely, but some studies find gender diversity rates of 15-25% or higher among autistic adults. Researchers have proposed several mechanisms, including reduced social pressure to conform to gender norms and potentially shared neurological pathways. This intersection is underserved in most clinical and support contexts.',
  },
  {
    title: 'Autistic Girls and Diagnostic Bias',
    source: 'Kirkovski et al. (2013); Hull et al. (2020)',
    link: 'https://doi.org/10.1007/s10803-013-1894-9',
    summary: 'Research consistently shows that autistic girls and women are diagnosed later, less often, and with more co-occurring diagnoses before autism is identified. This is attributed to better social camouflaging, diagnostic criteria developed primarily from male presentation studies, and clinician bias. The result: autistic girls spend more years unidentified, masked, and misdiagnosed with anxiety, depression, or borderline personality disorder.',
  },
  {
    title: 'Quality of Life and Acceptance',
    source: 'Cage, Di Monaco & Newell (2018). Journal of Autism and Developmental Disorders',
    link: 'https://doi.org/10.1007/s10803-017-3342-7',
    summary: 'This study found that greater self-acceptance of autism and connection with autistic community were significantly associated with higher wellbeing. Autistic people who accepted their autism and were connected to other autistic people showed lower depression and anxiety. Identity-first language, autistic community connection, and acceptance-based approaches are not just philosophical preferences — they show measurable wellbeing benefits.',
  },
  {
    title: 'Sensory Processing and Anxiety',
    source: 'Green & Ben-Sasson (2010). Journal of Autism and Developmental Disorders',
    link: 'https://doi.org/10.1007/s10803-009-0906-1',
    summary: 'Meta-analysis confirming the strong relationship between sensory processing differences and anxiety in autism. Sensory hypersensitivity in particular is a significant predictor of anxiety. This has direct clinical implications: addressing sensory environment should be a primary anxiety intervention strategy, not a secondary concern. Creating sensory-accessible environments reduces anxiety more predictably than many behavioral interventions.',
  },
];

export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--coral)', marginBottom: 12 }}>RESEARCH</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontFamily: "'Nunito', sans-serif", fontWeight: 900, marginBottom: 16 }}>What the Research Actually Says</h1>
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
          Plain-language summaries of the most important autism research. Linked to original sources. No advocacy without evidence. No evidence without context.
        </p>

        {STUDIES.map((s, i) => (
          <div key={i} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid rgba(184,232,135,0.08)' }}>
            <h2 style={{ fontSize: 18, fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'var(--cream)', marginBottom: 6 }}>{s.title}</h2>
            <a href={s.link} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: 'var(--lime)', textDecoration: 'none', display: 'inline-block', marginBottom: 14 }}>
              {s.source} →
            </a>
            <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.65)', lineHeight: 1.8 }}>{s.summary}</p>
          </div>
        ))}

        <div style={{ background: 'rgba(184,232,135,0.05)', border: '1px solid rgba(184,232,135,0.12)', padding: '20px 24px' }}>
          <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.5)', lineHeight: 1.7 }}>
            WeBearish presents research alongside autistic community perspectives. Peer-reviewed evidence matters. So does lived experience. Both are required for a complete picture. Sources are linked directly. Form your own conclusions.
          </p>
        </div>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginTop: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/therapies/aba" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>ABA Controversy →</Link>
            <Link href="/voices" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Autistic Voices →</Link>
            <Link href="/acceptance" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Acceptance →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
