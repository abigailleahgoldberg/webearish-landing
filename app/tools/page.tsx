import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism Tools and Apps Directory | WeBearish',
  description: "A curated directory of tools, apps, and devices for autistic people and families — AAC, sensory regulation, scheduling, social stories, and more.",
  alternates: { canonical: 'https://webearish.com/tools' },
};

const CATEGORIES = [
  {
    name: 'AAC Apps',
    desc: 'Augmentative and Alternative Communication — for autistic people who use non-speech or supplemental communication.',
    tools: [
      { name: 'Proloquo2Go', url: 'https://www.assistiveware.com/products/proloquo2go', desc: 'Symbol-based AAC app. Widely used in schools. Available on iOS.' },
      { name: 'TouchChat', url: 'https://touchchatapp.com', desc: 'Robust AAC app with multiple vocabulary sets. iOS and Windows.' },
      { name: 'Snap Core First', url: 'https://www.tobiidynavox.com/software/snap-core-first/', desc: 'Tobii Dynavox AAC app. Symbol-based with activity rows.' },
      { name: 'Cough Drop', url: 'https://www.mycoughdrop.com', desc: 'Open-source AAC platform. Web, iOS, Android. Free tier available.' },
    ],
  },
  {
    name: 'Visual Schedules and Planning',
    desc: 'Tools that support predictability, transitions, and executive function through visual structure.',
    tools: [
      { name: 'Choiceworks', url: 'https://www.bee-visual.com/choiceworks', desc: 'Visual schedule, waiting, and feelings boards. iOS.' },
      { name: 'First Then Visual Schedule', url: 'https://www.boekelstein.com', desc: 'Simple first/then board for transitions. iOS.' },
      { name: 'Time Timer', url: 'https://www.timetimer.com', desc: 'Visual countdown timer. App and physical device. Reduces time blindness anxiety.' },
    ],
  },
  {
    name: 'Sensory Regulation',
    desc: 'Apps and tools for sensory-based self-regulation.',
    tools: [
      { name: 'Calm', url: 'https://www.calm.com', desc: 'Breathing, meditation, and sleep stories. Widely used for anxiety and sensory calming.' },
      { name: 'Moshi', url: 'https://www.moshisleep.com', desc: 'Sleep and relaxation audio for children. Less clinical than Calm.' },
      { name: 'Headspace', url: 'https://www.headspace.com', desc: 'Guided mindfulness. Adult and teen versions. Useful for autistic adults managing anxiety.' },
    ],
  },
  {
    name: 'Social Stories and Communication',
    desc: 'Tools for building social understanding through narrative.',
    tools: [
      { name: 'Social Story Creator', url: 'https://www.listenandlearn.com.au/social-story-creator-library-app/', desc: 'Create custom social stories with photos and text. iOS.' },
      { name: 'Model Me Kids', url: 'https://www.modelmekids.com', desc: 'Video modeling for social situations. Multiple scenarios.' },
    ],
  },
  {
    name: 'Executive Function and Organization',
    desc: 'Tools for task initiation, planning, and follow-through.',
    tools: [
      { name: 'Todoist', url: 'https://todoist.com', desc: 'Task management with natural language input. Cross-platform. Low friction.' },
      { name: 'Notion', url: 'https://www.notion.so', desc: 'Flexible workspace for notes, planning, and databases. Strong for building personalized systems.' },
      { name: 'Forest', url: 'https://www.forestapp.cc', desc: 'Focus timer with gamification. Reduces phone distraction. iOS and Android.' },
    ],
  },
  {
    name: 'Communication and Safety IDs',
    desc: 'Physical tools and ID resources for safety and communication.',
    tools: [
      { name: 'Road ID', url: 'https://www.roadid.com', desc: 'Wearable ID bands with medical information. Useful for non-speaking and elopement-risk individuals.' },
      { name: 'AngelSense', url: 'https://www.angelsense.com', desc: 'GPS tracking wearable designed for children with special needs. Safety monitoring.' },
      { name: 'American Medical ID', url: 'https://www.americanmedical-id.com', desc: 'Medical alert bracelets and IDs. Custom engraving including "Autism" and emergency contacts.' },
    ],
  },
];

export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--coral)', marginBottom: 12 }}>TOOLS</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontFamily: "'Nunito', sans-serif", fontWeight: 900, marginBottom: 16 }}>Tools and Apps Directory</h1>
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
          A curated, opinionated directory of tools that autistic people and families actually use. No affiliate links. No rankings based on advertising. Organized by function.
        </p>
        <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.35)', marginBottom: 40 }}>WeBearish is not affiliated with any tool listed here. Links are provided for informational purposes only.</p>

        {CATEGORIES.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 20, fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'var(--lime)', marginBottom: 6 }}>{cat.name}</h2>
            <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.5)', marginBottom: 18, lineHeight: 1.6 }}>{cat.desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
              {cat.tools.map((t, ti) => (
                <a key={ti} href={t.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(184,232,135,0.1)', padding: '16px 20px', textDecoration: 'none' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--cream)', marginBottom: 6 }}>{t.name} →</div>
                  <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.5)', lineHeight: 1.6 }}>{t.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          {[['AAC Guide', '/communication/aac'], ['Books', '/books'], ['Media', '/media'], ['Resources by State', '/resources/by-state']].map(([l, h]) => (
            <Link key={h} href={h} style={{ padding: '10px 20px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
