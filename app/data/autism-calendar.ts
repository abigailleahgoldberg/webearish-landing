export type CalendarEvent = {
  slug: string;
  name: string;
  month: number;
  dayRange: string;
  description: string;
  history: string;
  howToObserve: string[];
  relatedTopics: string[];
  tags: string[];
};

export const calendarEvents: CalendarEvent[] = [
  {
    slug: "autism-acceptance-month",
    name: "Autism Acceptance Month",
    month: 4,
    dayRange: "All of April",
    description: "A month dedicated to promoting acceptance of autistic people — not just awareness. The emphasis on acceptance reflects the autistic community's call to move beyond awareness campaigns toward genuine inclusion, accommodation, and respect for autistic identity.",
    history: "April was originally designated Autism Awareness Month decades ago. The autistic community pushed back against the awareness framing, arguing that awareness alone changes nothing without action. Acceptance Month reflects that shift — a move from observing autism to actively including autistic people.",
    howToObserve: ["Learn from autistic voices — read essays, books, and posts written by autistic people", "Review your workplace or school's autism accommodations and identify gaps", "Use identity-first language ('autistic person') unless someone expresses a different preference", "Support autistic-led organizations rather than those that exclude autistic leadership", "Push back on puzzle piece imagery and blue light campaigns — ask why the autistic community objects"],
    relatedTopics: ["acceptance-vs-awareness", "identity-first-language", "neurodiversity"],
    tags: ["acceptance", "awareness", "community", "identity"]
  },
  {
    slug: "world-autism-acceptance-day",
    name: "World Autism Acceptance Day",
    month: 4,
    dayRange: "April 2",
    description: "A United Nations-designated day to promote understanding and acceptance of autistic people worldwide. While it began as an awareness day, many advocates now use it to center acceptance and autistic voices rather than awareness campaigns.",
    history: "The UN designated April 2 as World Autism Awareness Day in 2007. Many autism advocacy organizations and autistic self-advocates have since reframed it as World Autism Acceptance Day, reflecting the growing consensus that awareness without action is insufficient.",
    howToObserve: ["Share resources from autistic-led organizations", "Donate to organizations with autistic leadership and board members", "Host a conversation in your school, workplace, or community about what acceptance means in practice", "Read firsthand accounts from autistic people about what they want from allies", "Avoid 'light it up blue' campaigns — ask why many autistic advocates oppose them"],
    relatedTopics: ["acceptance-vs-awareness", "autistic-pride-day", "neurodiversity"],
    tags: ["acceptance", "global", "UN", "community"]
  },
  {
    slug: "autistic-pride-day",
    name: "Autistic Pride Day",
    month: 6,
    dayRange: "June 18",
    description: "A day created by and for autistic people to celebrate autistic identity, culture, and community. Unlike awareness campaigns organized by non-autistic people, Autistic Pride Day centers autistic voices and the neurodiversity perspective.",
    history: "Autistic Pride Day was established in 2005 by Aspies For Freedom, an autistic civil rights organization. The date — June 18 — was chosen deliberately. The infinity rainbow symbol, adopted by many autistic people and neurodiversity advocates, represents the diversity and complexity of the autistic experience.",
    howToObserve: ["Learn about neurodiversity and the autistic civil rights movement", "Amplify autistic voices on social media — share posts written by autistic people", "Celebrate autistic culture, art, music, and writing", "Reflect on the difference between pride and tragedy framings of autism", "Support autistic community spaces and self-advocacy organizations"],
    relatedTopics: ["neurodiversity", "identity-first-language", "autism-acceptance-month"],
    tags: ["pride", "identity", "community", "civil-rights"]
  },
  {
    slug: "neurodiversity-celebration-week",
    name: "Neurodiversity Celebration Week",
    month: 3,
    dayRange: "Third week of March",
    description: "A worldwide initiative to transform how neurodivergent individuals are viewed and supported, challenging stereotypes and celebrating the talents and strengths of people who think differently. Schools, universities, and workplaces participate globally.",
    history: "Neurodiversity Celebration Week was founded by Siena Castellon, an autistic teenager, in 2018 at her secondary school in the UK. It has since grown into a global movement with thousands of participating institutions.",
    howToObserve: ["Organize a neurodiversity event at your school or workplace", "Highlight neurodivergent strengths alongside support needs — not one without the other", "Invite autistic and neurodivergent speakers to share their experiences", "Review hiring and educational practices for unintentional barriers to neurodivergent people", "Share resources about the full range of neurodivergence: autism, ADHD, dyslexia, dyspraxia, and more"],
    relatedTopics: ["neurodiversity", "inclusion", "identity-first-language"],
    tags: ["neurodiversity", "schools", "workplaces", "global"]
  },
  {
    slug: "developmental-disabilities-awareness-month",
    name: "Developmental Disabilities Awareness Month",
    month: 3,
    dayRange: "All of March",
    description: "A month to raise awareness of the needs and potential of people with developmental disabilities, including autism, intellectual disabilities, Down syndrome, and cerebral palsy. Established by presidential proclamation in the US.",
    history: "President Ronald Reagan proclaimed March as Developmental Disabilities Awareness Month in 1987. The goal was to increase public awareness about including people with developmental disabilities in all aspects of community life.",
    howToObserve: ["Learn about the range of developmental disabilities and how they differ", "Support inclusive employment and housing initiatives in your community", "Advocate for Medicaid and waiver programs that keep people in their communities", "Connect with your state's developmental disability council", "Read first-person accounts from people with developmental disabilities about their lives"],
    relatedTopics: ["disability-pride-month", "autism-acceptance-month"],
    tags: ["developmental-disabilities", "awareness", "inclusion", "US"]
  },
  {
    slug: "disability-pride-month",
    name: "Disability Pride Month",
    month: 7,
    dayRange: "All of July",
    description: "A month to celebrate the disability community, honor the passage of the Americans with Disabilities Act, and promote disability culture, history, and identity. Disability Pride centers the idea that disability is a natural part of human diversity.",
    history: "Disability Pride Month coincides with the anniversary of the Americans with Disabilities Act, signed on July 26, 1990. The first Disability Pride Parade was held in Chicago in 2004. The movement has grown significantly, with parades and events in cities worldwide.",
    howToObserve: ["Attend or organize a local Disability Pride event", "Learn about disability history and the disability rights movement", "Center disabled voices in disability conversations — not just medical or caregiver perspectives", "Advocate for full accessibility in your workplace, school, or community", "Explore disability art, culture, and media created by disabled people"],
    relatedTopics: ["ada-anniversary", "autistic-pride-day", "self-advocacy-awareness-month"],
    tags: ["disability", "pride", "culture", "identity", "ADA"]
  },
  {
    slug: "ada-anniversary",
    name: "Americans with Disabilities Act Anniversary",
    month: 7,
    dayRange: "July 26",
    description: "The anniversary of the signing of the Americans with Disabilities Act — landmark civil rights legislation that prohibits discrimination against people with disabilities in employment, public accommodations, transportation, and government services.",
    history: "President George H.W. Bush signed the ADA on July 26, 1990. The law was the result of decades of disability rights activism, including the Capitol Crawl — a demonstration in which dozens of disabled people left their wheelchairs and crawled up the Capitol steps to urge passage. The ADA has transformed American life for disabled people, though enforcement and gaps remain ongoing challenges.",
    howToObserve: ["Review ADA accommodations at your workplace or school and identify gaps", "Learn your rights under Title II (public entities) and Title III (public accommodations)", "Read about the disability rights activists who made the ADA possible", "Advocate for ADA compliance in your community", "Support efforts to strengthen and expand disability civil rights protections"],
    relatedTopics: ["disability-pride-month", "school-rights", "adults-employment"],
    tags: ["ADA", "civil-rights", "disability", "law", "US"]
  },
  {
    slug: "self-advocacy-awareness-month",
    name: "Self-Advocacy Awareness Month",
    month: 9,
    dayRange: "All of September",
    description: "A month recognizing the self-advocacy movement — the movement of people with developmental disabilities speaking for themselves, making their own decisions, and fighting for their rights. Self-advocacy is foundational to disability justice.",
    history: "The self-advocacy movement grew out of the deinstitutionalization era of the 1970s. Organizations like People First (founded 1974 in Oregon) established the principle that people with developmental disabilities should lead their own advocacy efforts. The movement has shaped policy, services, and culture around disability.",
    howToObserve: ["Support autistic-led and disability-led organizations", "Learn about People First, ASAN, and other self-advocacy organizations", "Practice asking autistic and disabled people what they want rather than assuming", "Advocate for supported decision-making over guardianship where possible", "Amplify the voices of autistic and disabled self-advocates in policy discussions"],
    relatedTopics: ["autistic-pride-day", "disability-pride-month", "adults"],
    tags: ["self-advocacy", "rights", "community", "independence"]
  },
  {
    slug: "aac-awareness-month",
    name: "AAC Awareness Month",
    month: 10,
    dayRange: "All of October",
    description: "A month dedicated to raising awareness of Augmentative and Alternative Communication — the tools, strategies, and technologies that support communication for people who cannot rely on natural speech. AAC includes everything from picture boards to speech-generating devices.",
    history: "AAC Awareness Month has been recognized in October for over two decades. It grew from the work of AAC clinicians, researchers, and — most importantly — AAC users themselves, who advocated for the right to communicate in any way that works for them.",
    howToObserve: ["Learn about AAC options available to your child or client", "Practice aided language stimulation — model AAC use yourself before expecting it from others", "Presume competence: assume communication ability even when speech is absent", "Advocate for AAC access and funding in your school district or through insurance", "Follow AAC users and their families on social media — learn from their experiences directly"],
    relatedTopics: ["communication-aac", "nonspeaking", "presuming-competence"],
    tags: ["AAC", "communication", "nonspeaking", "technology"]
  },
  {
    slug: "world-aac-day",
    name: "World AAC Day",
    month: 10,
    dayRange: "October 2",
    description: "A global awareness day focused on Augmentative and Alternative Communication, held on the same day as World Autism Acceptance Day to highlight the intersection of autism and communication access. AAC users lead the day's advocacy.",
    history: "World AAC Day is organized by the International Society for Augmentative and Alternative Communication (ISAAC). It falls on October 2 — chosen to echo April 2, World Autism Acceptance Day — reflecting how closely autism and AAC advocacy are linked.",
    howToObserve: ["Share information about AAC devices, apps, and communication strategies", "Learn the phrase 'presume competence' and what it means in practice", "Watch videos created by AAC users about their communication experiences", "Ask your child's school about their AAC policy — every nonspeaking student deserves a robust communication system", "Support legislation and insurance coverage for AAC devices"],
    relatedTopics: ["aac-awareness-month", "communication-aac", "nonspeaking"],
    tags: ["AAC", "communication", "global", "inclusion"]
  },
  {
    slug: "iep-awareness-week",
    name: "IEP Awareness Week",
    month: 11,
    dayRange: "First week of November",
    description: "A week focused on educating families about Individualized Education Programs — the cornerstone of special education services in the US. IEP Awareness Week helps parents understand their rights and how to advocate effectively for their children.",
    history: "IEP Awareness Week emerged from parent and advocacy communities seeking to demystify the IEP process. The first week of November was chosen as it falls mid-school-year — a natural checkpoint for reviewing goals and services.",
    howToObserve: ["Read your child's current IEP in full — do you understand every goal and service?", "Request a copy of your procedural safeguards from your school district", "Connect with a parent training and information center in your state", "Learn the difference between accommodations and modifications", "Attend an IEP training workshop if available in your area"],
    relatedTopics: ["iep-resource-center", "school-rights", "ages-school-age"],
    tags: ["IEP", "education", "school-rights", "parents"]
  },
  {
    slug: "national-disability-employment-awareness-month",
    name: "National Disability Employment Awareness Month",
    month: 10,
    dayRange: "All of October",
    description: "A US observance recognizing the contributions of workers with disabilities and the importance of inclusive employment. Autistic adults face significant employment barriers — unemployment rates among autistic adults remain disproportionately high.",
    history: "Congress established NDEAM in 1945, originally as National Employ the Physically Handicapped Week. It was expanded to a full month in 1988. The US Department of Labor coordinates NDEAM activities.",
    howToObserve: ["Review your organization's disability inclusion practices in hiring and retention", "Learn about autism-specific employment support programs", "Advocate for workplace accommodations as a right, not a favor", "Support companies with genuine autism inclusion hiring programs", "Amplify the voices of autistic employees and job seekers"],
    relatedTopics: ["adults-employment", "ada-anniversary", "self-advocacy-awareness-month"],
    tags: ["employment", "adults", "inclusion", "US"]
  },
  {
    slug: "special-education-day",
    name: "National Special Education Day",
    month: 12,
    dayRange: "December 2",
    description: "A day marking the anniversary of the Individuals with Disabilities Education Act (IDEA) — the federal law guaranteeing students with disabilities the right to a free appropriate public education. Special Education Day honors the progress made and the work still to do.",
    history: "National Special Education Day marks the anniversary of the signing of the Education for All Handicapped Children Act in 1975 — the predecessor to IDEA. The law transformed American education by establishing that children with disabilities have the right to public education in the least restrictive environment.",
    howToObserve: ["Learn what IDEA guarantees and what it requires of schools", "Celebrate the special educators, therapists, and advocates who serve disabled students", "Reflect on gaps in implementation — rights on paper vs. rights in practice", "Advocate for adequate funding for special education services", "Support families navigating the IEP process for the first time"],
    relatedTopics: ["iep-resource-center", "school-rights", "iep-awareness-week"],
    tags: ["IDEA", "special-education", "IEP", "law", "US"]
  },
  {
    slug: "rosas-law-anniversary",
    name: "Rosa's Law Anniversary",
    month: 10,
    dayRange: "October 5",
    description: "The anniversary of Rosa's Law, signed in 2010, which replaced the term 'mental retardation' with 'intellectual disability' in federal health, education, and labor policy. The law recognized that language shapes dignity and treatment.",
    history: "Rosa's Law was named after Rosa Marcellino, a young girl with Down syndrome whose family advocated for the language change. President Barack Obama signed the law on October 5, 2010. Rosa's family argued that dehumanizing language in law perpetuated stigma and discrimination.",
    howToObserve: ["Reflect on the power of language in shaping how we see and treat people with disabilities", "Audit the language used in your organization's policies and communications", "Learn about the broader disability justice movement's approach to language", "Support advocacy efforts to update outdated and harmful language in remaining laws and institutions"],
    relatedTopics: ["identity-first-language", "acceptance-vs-awareness"],
    tags: ["language", "law", "dignity", "intellectual-disability"]
  },
  {
    slug: "epilepsy-awareness-month",
    name: "Epilepsy Awareness Month",
    month: 11,
    dayRange: "All of November",
    description: "A month dedicated to raising awareness of epilepsy — a neurological condition that co-occurs with autism at significantly higher rates than in the general population. Understanding epilepsy is essential for many autism families.",
    history: "November was designated Epilepsy Awareness Month decades ago by the Epilepsy Foundation. The color purple has been associated with epilepsy awareness since the late 1980s.",
    howToObserve: ["Learn about the relationship between autism and epilepsy", "Understand seizure first aid — what to do and what not to do", "Advocate for seizure action plans in schools and community settings", "Support research into the neurological connections between autism and epilepsy", "Connect with epilepsy support communities if your family is affected"],
    relatedTopics: ["conditions-epilepsy", "co-occurring-conditions", "safety"],
    tags: ["epilepsy", "seizures", "co-occurring", "health"]
  },
  {
    slug: "world-mental-health-day",
    name: "World Mental Health Day",
    month: 10,
    dayRange: "October 10",
    description: "A global day for raising awareness of mental health issues. For the autism community, mental health is particularly relevant: anxiety, depression, OCD, and autistic burnout are significantly more common in autistic people than in the general population.",
    history: "World Mental Health Day was established in 1992 by the World Federation for Mental Health. It is recognized by the World Health Organization and observed in more than 100 countries.",
    howToObserve: ["Learn about mental health conditions common in autistic people", "Understand that autistic burnout is distinct from depression — and that both deserve care", "Advocate for autism-informed mental health services in your area", "Check in with autistic adults and teens in your life — masking is exhausting", "Support access to mental health care for all members of the autism community"],
    relatedTopics: ["conditions-anxiety", "autistic-burnout", "adults-burnout"],
    tags: ["mental-health", "anxiety", "burnout", "global"]
  },
  {
    slug: "learning-disabilities-awareness-month",
    name: "Learning Disabilities Awareness Month",
    month: 10,
    dayRange: "All of October",
    description: "A month recognizing learning disabilities including dyslexia, dyscalculia, and dysgraphia — conditions that frequently co-occur with autism. Understanding learning differences helps educators and families provide appropriate support.",
    history: "Learning Disabilities Awareness Month has been observed in October in the US since the 1980s. The Learning Disabilities Association of America leads national awareness efforts.",
    howToObserve: ["Learn about the overlap between autism and learning disabilities", "Advocate for proper evaluation of learning disabilities in autistic students — they are often missed", "Support universal design for learning (UDL) in educational settings", "Learn about the difference between accommodations and modifications in school settings", "Connect with learning disability support networks in your area"],
    relatedTopics: ["iep-resource-center", "school-rights", "ages-school-age"],
    tags: ["learning-disabilities", "dyslexia", "education", "co-occurring"]
  },
  {
    slug: "ocd-awareness-week",
    name: "OCD Awareness Week",
    month: 10,
    dayRange: "First week of October",
    description: "A week to raise awareness of obsessive-compulsive disorder, which co-occurs with autism at high rates. Distinguishing OCD from autism is clinically important — they share some features but require different approaches.",
    history: "OCD Awareness Week is organized by the International OCD Foundation. It aims to reduce stigma, improve access to evidence-based treatment, and educate the public about what OCD actually is versus common misconceptions.",
    howToObserve: ["Learn about the clinical differences between autism and OCD — they can look similar", "Understand that exposure and response prevention (ERP) is the gold standard for OCD", "Advocate for mental health providers who understand both autism and OCD", "Support access to specialized OCD treatment for autistic individuals", "Share accurate OCD information — the disorder is often misrepresented in media"],
    relatedTopics: ["conditions-ocd", "co-occurring-conditions", "mental-health"],
    tags: ["OCD", "co-occurring", "mental-health", "treatment"]
  },
  {
    slug: "adhd-awareness-month",
    name: "ADHD Awareness Month",
    month: 10,
    dayRange: "All of October",
    description: "A month dedicated to raising awareness of ADHD — the most common co-occurring condition in autism. Roughly 50-70% of autistic people also have ADHD, making it essential to understand both conditions together.",
    history: "ADHD Awareness Month has been observed in October in the US since the early 2000s. CHADD (Children and Adults with ADHD) leads many national awareness efforts alongside the ADHD Awareness Coalition.",
    howToObserve: ["Learn about how ADHD and autism interact and present differently together than separately", "Understand that autism masking and ADHD inattention can look similar on the surface", "Advocate for dual assessments when evaluating either condition", "Support access to ADHD treatment options for autistic people", "Follow autistic ADHD (AuDHD) advocates who share firsthand experience"],
    relatedTopics: ["conditions-adhd", "co-occurring-conditions", "twice-exceptional"],
    tags: ["ADHD", "co-occurring", "AuDHD", "neurodivergent"]
  },
  {
    slug: "speech-language-hearing-month",
    name: "Better Hearing and Speech Month",
    month: 5,
    dayRange: "All of May",
    description: "A month recognizing the importance of communication and the professionals who support it — particularly relevant to the autism community, where speech-language pathologists play a central role in communication support.",
    history: "Better Hearing and Speech Month has been recognized in May since 1927, organized by the American Speech-Language-Hearing Association (ASHA). It is one of the longest-running public health awareness observances in the US.",
    howToObserve: ["Learn about the range of communication approaches beyond traditional speech therapy", "Understand the difference between speech therapy focused on function vs. normalization", "Advocate for communication support that builds on a child's natural communication style", "Explore AAC as a legitimate and effective communication support", "Support autistic people's right to communicate in the way that works for them"],
    relatedTopics: ["communication-aac", "aac-awareness-month", "world-aac-day"],
    tags: ["communication", "speech-therapy", "AAC", "professionals"]
  },
  {
    slug: "occupational-therapy-month",
    name: "Occupational Therapy Month",
    month: 4,
    dayRange: "All of April",
    description: "A month recognizing occupational therapists and their work supporting people with disabilities in daily life, sensory processing, motor skills, and independence. OT is one of the most common therapeutic supports for autistic children.",
    history: "Occupational Therapy Month has been recognized in April since 1980, organized by the American Occupational Therapy Association (AOTA). OT has roots in rehabilitation medicine following World War I.",
    howToObserve: ["Learn what occupational therapy actually involves for autistic children and adults", "Understand sensory diets and sensory integration approaches", "Ask your child's OT about their specific therapeutic goals and methods", "Advocate for OT services in school IEPs — they are covered under IDEA", "Learn about OT support for autistic adults in employment and daily living"],
    relatedTopics: ["sensory-processing", "iep-resource-center", "ages-toddler"],
    tags: ["OT", "sensory", "therapy", "professionals"]
  },
  {
    slug: "social-work-month",
    name: "Social Work Month",
    month: 3,
    dayRange: "All of March",
    description: "A month honoring social workers who support individuals and families with disabilities, including autism. Social workers connect families to services, advocate in systems, and support mental health.",
    history: "Social Work Month has been recognized in March since 1963, promoted by the National Association of Social Workers. It highlights the profession's role in addressing systemic inequalities and supporting vulnerable populations.",
    howToObserve: ["Learn about the social work resources available to autism families in your area", "Understand the role of school social workers in IEP processes", "Connect with a family support specialist if you are navigating new services", "Advocate for adequate social work staffing in schools and community agencies", "Thank the social workers who have supported your family"],
    relatedTopics: ["resources", "parents-self-care", "state-resources"],
    tags: ["social-work", "services", "community", "support"]
  },
  {
    slug: "world-disability-day",
    name: "International Day of Persons with Disabilities",
    month: 12,
    dayRange: "December 3",
    description: "A United Nations observance promoting the rights and well-being of persons with disabilities worldwide. The day calls attention to inclusion, accessibility, and the removal of barriers that prevent full participation in society.",
    history: "The UN General Assembly proclaimed December 3 as International Day of Persons with Disabilities in 1992. Each year focuses on a theme related to disability inclusion, set by the UN Department of Economic and Social Affairs.",
    howToObserve: ["Learn about disability rights from a global perspective", "Review the accessibility of your workplace, school, or public space", "Support international disability rights organizations", "Amplify disabled voices in conversations about disability policy", "Advocate for accessible design in your community"],
    relatedTopics: ["ada-anniversary", "disability-pride-month", "adults"],
    tags: ["global", "UN", "rights", "accessibility"]
  },
  {
    slug: "pda-awareness-day",
    name: "PDA Awareness Day",
    month: 5,
    dayRange: "May 15",
    description: "A day raising awareness of Pathological Demand Avoidance — an anxiety-driven profile associated with autism. PDA is often misunderstood and mismanaged. Awareness leads to better support strategies and reduced family conflict.",
    history: "PDA Awareness Day began in the UK, where the PDA Society has been central to raising awareness and developing evidence-based support strategies. Recognition of PDA as a distinct autism profile has grown significantly in the past decade.",
    howToObserve: ["Learn what PDA actually is and how it differs from oppositional behavior", "Understand why traditional behavior management approaches often fail with PDA", "Explore low-demand, collaborative support strategies", "Connect with PDA support communities for families", "Advocate for PDA awareness among educators and mental health professionals"],
    relatedTopics: ["conditions-pda", "glossary-pda", "school-rights"],
    tags: ["PDA", "demand-avoidance", "anxiety", "support"]
  },
  {
    slug: "autistic-burnout-awareness-day",
    name: "Autistic Burnout Awareness Day",
    month: 9,
    dayRange: "September 2",
    description: "A day dedicated to raising awareness of autistic burnout — a state of profound exhaustion caused by long-term masking, sensory overload, and social demands. Autistic burnout is distinct from regular burnout and requires specific recovery approaches.",
    history: "Autistic Burnout Awareness Day emerged from autistic community advocacy, with researchers like Dora Raymaker and Christina Nicolaidis bringing scientific attention to the phenomenon. A 2020 study in Autism in Adulthood formally documented autistic burnout as a distinct experience.",
    howToObserve: ["Learn the difference between autistic burnout and depression — they require different responses", "Reduce demands on autistic people in your life when burnout signs appear", "Understand that recovery from autistic burnout can take months to years", "Advocate for workplace and school adjustments that prevent burnout buildup", "Listen to autistic people describe their burnout experience without minimizing it"],
    relatedTopics: ["adults-burnout", "masking", "conditions-anxiety"],
    tags: ["burnout", "masking", "mental-health", "recovery"]
  },
  {
    slug: "nonspeaking-autism-awareness-day",
    name: "Nonspeaking Autism Awareness Day",
    month: 4,
    dayRange: "April 19",
    description: "A day within Autism Acceptance Month specifically focused on nonspeaking and minimally speaking autistic people — a group often overlooked in mainstream autism conversations. The day centers presuming competence and communication access.",
    history: "Nonspeaking Autism Awareness Day emerged from advocacy by nonspeaking autistic people and their families, who noted that most autism representation centers on speaking autistic people. Advocates like Ido Kedar and organizations like ASAN have pushed for more inclusive representation.",
    howToObserve: ["Learn what presuming competence means and why it matters", "Explore AAC options for nonspeaking autistic people", "Read or watch content created by nonspeaking autistic people", "Avoid functioning labels that imply nonspeaking means low intelligence", "Support communication access in all educational and community settings"],
    relatedTopics: ["communication-aac", "world-aac-day", "presuming-competence"],
    tags: ["nonspeaking", "AAC", "communication", "inclusion"]
  },
  {
    slug: "siblings-day",
    name: "National Siblings Day",
    month: 4,
    dayRange: "April 10",
    description: "A day honoring sibling relationships — particularly meaningful in autism families, where siblings often navigate unique experiences. Siblings of autistic children have their own needs for support, connection, and recognition.",
    history: "National Siblings Day was founded by Claudia Evart in 1995 to honor her siblings who died young. It is widely observed but not a federal holiday. For autism families, the day is an opportunity to celebrate all siblings and acknowledge the unique experiences of neurotypical siblings.",
    howToObserve: ["Check in with neurotypical siblings — do they have space to share their own feelings?", "Connect with Sibshops or similar sibling support programs", "Make space for siblings to have their own identity outside their autistic sibling's story", "Celebrate all sibling relationships in your family", "Support sibling-specific resources at autism conferences and organizations"],
    relatedTopics: ["siblings", "parents", "family"],
    tags: ["siblings", "family", "support", "community"]
  },
  {
    slug: "global-accessibility-awareness-day",
    name: "Global Accessibility Awareness Day",
    month: 5,
    dayRange: "Third Thursday of May",
    description: "A day focused on digital access and inclusion for people with disabilities. Accessible websites, apps, and digital tools are essential for autistic people and those who support them.",
    history: "Global Accessibility Awareness Day (GAAD) began in 2012 after a blog post by web developer Joe Devon prompted a community-wide conversation about digital accessibility. It has grown into a global movement involving thousands of companies and organizations.",
    howToObserve: ["Audit your website or app for WCAG 2.1 accessibility compliance", "Learn about screen reader compatibility and why it matters", "Test your digital materials with accessibility checking tools", "Advocate for accessible design from the start — not as an afterthought", "Support developers who prioritize accessibility in their work"],
    relatedTopics: ["accessibility", "inclusion", "resources"],
    tags: ["accessibility", "digital", "technology", "inclusion"]
  },
  {
    slug: "physical-therapy-month",
    name: "Physical Therapy Month",
    month: 10,
    dayRange: "All of October",
    description: "A month honoring physical therapists, who support autistic individuals with motor skills, proprioception, coordination, and physical fitness. PT addresses challenges with movement, balance, and physical development common in autism.",
    history: "Physical Therapy Month has been recognized in October since 1981, organized by the American Physical Therapy Association (APTA). Physical therapy has roots in the rehabilitation medicine of the early 20th century.",
    howToObserve: ["Learn how PT supports autistic children and adults with motor differences", "Understand proprioception and how it relates to sensory processing", "Advocate for PT services in IEPs when motor challenges are present", "Explore adaptive sports and movement programs for autistic individuals", "Appreciate the PT professionals supporting the autism community"],
    relatedTopics: ["sensory-processing", "iep-resource-center"],
    tags: ["physical-therapy", "motor-skills", "proprioception", "professionals"]
  },
  {
    slug: "assistive-technology-awareness-month",
    name: "Assistive Technology Awareness Month",
    month: 3,
    dayRange: "All of March",
    description: "A month promoting awareness of assistive technology — tools that help people with disabilities live, learn, and work more independently. For autistic people, AT includes AAC devices, visual schedules, sensory tools, and organizational apps.",
    history: "Assistive Technology Awareness Month has been promoted by ATIA (Assistive Technology Industry Association) and similar organizations. The Assistive Technology Act of 1998 established federal support for AT programs in every US state.",
    howToObserve: ["Learn about AT options for autistic children and adults beyond AAC", "Explore apps and tools designed for executive function support", "Advocate for AT assessments in IEPs — every student has the right to an AT evaluation", "Connect with your state's AT program for demonstration and loan programs", "Learn about low-tech AT options that are often overlooked"],
    relatedTopics: ["communication-aac", "iep-resource-center", "tools"],
    tags: ["assistive-technology", "AAC", "tools", "independence"]
  },
  {
    slug: "early-intervention-awareness-month",
    name: "Early Intervention Awareness Month",
    month: 3,
    dayRange: "All of March",
    description: "A month highlighting the importance of early intervention services for children from birth to age three with developmental delays or disabilities. Early intervention can significantly support autistic children's development across multiple domains.",
    history: "Early intervention programs were established under Part C of IDEA. March awareness efforts have grown from state early intervention programs, IDEA parent advocacy organizations, and early childhood professionals.",
    howToObserve: ["Learn about Part C of IDEA and what early intervention services include", "Know that you can refer your child for early intervention evaluation without a diagnosis", "Understand that early intervention is free for eligible children under age three", "Advocate for family-centered early intervention that respects parental values", "Connect with your state's early intervention program if your child may be eligible"],
    relatedTopics: ["ages-toddler", "diagnosis", "iep-resource-center"],
    tags: ["early-intervention", "toddler", "services", "development"]
  },
  {
    slug: "childrens-mental-health-week",
    name: "Children's Mental Health Awareness Week",
    month: 5,
    dayRange: "First week of May",
    description: "A week focused on the mental health needs of children, including the high rates of anxiety, depression, and other mental health conditions in autistic youth. Early mental health support can make a significant difference in long-term outcomes.",
    history: "Children's Mental Health Awareness Week is organized by Mental Health America and SAMHSA in the US, and by YoungMinds in the UK. It has been recognized annually since the early 2000s.",
    howToObserve: ["Learn about mental health conditions common in autistic children", "Know the signs of anxiety, depression, and OCD in autistic youth — they can present differently", "Advocate for school mental health services that understand autism", "Support access to autism-informed therapists and counselors", "Create space for autistic children to express their emotional experiences"],
    relatedTopics: ["conditions-anxiety", "conditions-ocd", "ages-school-age"],
    tags: ["mental-health", "children", "anxiety", "support"]
  },
  {
    slug: "disability-history-month",
    name: "Disability History Month",
    month: 11,
    dayRange: "All of November (US) / October (UK)",
    description: "A month dedicated to learning about disability history — the history of institutionalization, the disability rights movement, and the ongoing fight for inclusion and dignity. Understanding history is essential to building a more just future.",
    history: "Disability History Month began in the UK in 2012. In the US, disability history awareness has been promoted by disability rights organizations and academic programs. The history of disability is a history of advocacy, resistance, and hard-won rights.",
    howToObserve: ["Learn about the history of autism specifically — from early pathologizing to the neurodiversity movement", "Study the disability rights movement, including its radical wing", "Read disability memoirs and histories written by disabled people", "Teach disability history in your classroom or community", "Connect current disability rights struggles to their historical roots"],
    relatedTopics: ["acceptance-vs-awareness", "autistic-pride-day", "ada-anniversary"],
    tags: ["history", "disability", "rights", "culture"]
  },
  {
    slug: "world-kindness-day",
    name: "World Kindness Day",
    month: 11,
    dayRange: "November 13",
    description: "A global day promoting kindness and compassion. For the autism community, kindness means more than surface niceness — it means genuine inclusion, accommodation, and respect for neurodivergent ways of being.",
    history: "World Kindness Day was introduced in 1998 at the World Kindness Movement conference in Tokyo. It is now observed in more than 28 countries.",
    howToObserve: ["Practice accommodation as an act of kindness — meet autistic people where they are", "Push back on ableist behavior when you see it", "Recognize the exhaustion of masking and reduce demands on autistic people in your life", "Teach children that real kindness includes respecting differences in how people communicate", "Support sensory-friendly spaces in your community"],
    relatedTopics: ["acceptance-vs-awareness", "neurodiversity", "inclusion"],
    tags: ["kindness", "inclusion", "community", "global"]
  },
  {
    slug: "caregiver-appreciation-day",
    name: "Caregiver Appreciation Day",
    month: 11,
    dayRange: "Thursday before Thanksgiving",
    description: "A day recognizing the often invisible work of caregivers — including parents of autistic children who navigate complex systems, provide daily support, and advocate tirelessly. Caregiver burnout is real and deserves acknowledgment and support.",
    history: "Caregiver Appreciation Day is observed in November in connection with Thanksgiving themes of gratitude. Various healthcare and disability organizations have promoted caregiver recognition days at different points throughout the year.",
    howToObserve: ["Offer concrete support to caregiver families — not just kind words", "Learn about respite care and how to access it", "Advocate for caregiver support programs in your state's budget", "Support autistic adults' independence — it reduces long-term caregiver burden", "Check in with caregiver parents about their own wellbeing, not just their child's"],
    relatedTopics: ["parents-self-care", "resources", "state-resources"],
    tags: ["caregivers", "parents", "burnout", "support"]
  },
  {
    slug: "sensory-processing-awareness-month",
    name: "Sensory Processing Awareness Month",
    month: 10,
    dayRange: "All of October",
    description: "A month raising awareness of sensory processing differences — a hallmark feature of autism. Understanding sensory processing helps families, educators, and employers create environments where autistic people can function at their best.",
    history: "Sensory Processing Awareness Month has been promoted by occupational therapy communities and sensory processing advocacy organizations. October was chosen to align with other disability awareness months.",
    howToObserve: ["Learn about the eight sensory systems — not just the traditional five", "Create a sensory-friendly space in your home, classroom, or workplace", "Understand that sensory needs are not preferences — they are neurological realities", "Advocate for sensory accommodations in schools and public spaces", "Explore sensory profiles and what they mean for daily life planning"],
    relatedTopics: ["sensory-processing", "quiz", "tools"],
    tags: ["sensory", "processing", "accommodations", "OT"]
  },
  {
    slug: "late-diagnosis-awareness-day",
    name: "Late Diagnosis Awareness Day",
    month: 7,
    dayRange: "July 14",
    description: "A day raising awareness of the experience of being diagnosed autistic in adulthood. Late diagnosis is increasingly common, particularly among women, gender-diverse people, and people from marginalized communities who were missed by diagnostic systems designed for young white boys.",
    history: "Late Diagnosis Awareness Day emerged from autistic community advocacy. The late diagnosis experience — with its mix of relief, grief, anger, and clarity — has gained significant visibility through social media and first-person accounts.",
    howToObserve: ["Learn why late diagnosis happens and who is most likely to be missed", "Support adults pursuing late diagnosis — it is valid and meaningful at any age", "Read first-person accounts of late diagnosis experiences", "Advocate for diagnostic services that recognize autism across genders, races, and ages", "Connect with late-diagnosed autistic communities online"],
    relatedTopics: ["adults-late-diagnosis", "is-this-autism-in-adults", "is-this-autism-high-masking"],
    tags: ["late-diagnosis", "adults", "women", "identity"]
  },
  {
    slug: "world-voice-day",
    name: "World Voice Day",
    month: 4,
    dayRange: "April 16",
    description: "A global day celebrating the human voice in all its forms — including alternative forms of voice and communication used by autistic people. AAC, text-to-speech, and other communication tools are voices too.",
    history: "World Voice Day began in Brazil in 1999 and became a global observance by 2002. It is promoted by the American Academy of Otolaryngology. The autism community has embraced it as a day to affirm all forms of communication as valid voices.",
    howToObserve: ["Affirm that AAC is a real voice — not a lesser form of communication", "Learn about text-to-speech technology and how it supports autistic communicators", "Support autistic self-advocates who communicate through writing, art, or AAC", "Challenge the idea that speech is the only valid or real form of communication", "Celebrate the diversity of communication in your family or community"],
    relatedTopics: ["communication-aac", "nonspeaking-autism-awareness-day", "world-aac-day"],
    tags: ["voice", "communication", "AAC", "inclusion"]
  },
  {
    slug: "therapeutic-recreation-month",
    name: "National Therapeutic Recreation Month",
    month: 7,
    dayRange: "All of July",
    description: "A month honoring therapeutic recreation specialists who use recreation and leisure as tools for improving health, function, and quality of life. For autistic individuals, therapeutic recreation supports social connection, physical health, and joy.",
    history: "National Therapeutic Recreation Month has been recognized in July since 1984, promoted by the American Therapeutic Recreation Association (ATRA). Therapeutic recreation is recognized as a clinical healthcare profession.",
    howToObserve: ["Learn about adaptive sports and recreational programs for autistic individuals in your area", "Understand that play and recreation are not luxuries — they are health needs", "Explore sensory-friendly recreational activities for autistic children and adults", "Advocate for inclusive recreation programs in your community parks and recreation department", "Support autistic people in pursuing their special interests as legitimate recreational activities"],
    relatedTopics: ["tools", "resources", "ages"],
    tags: ["recreation", "therapy", "sports", "inclusion"]
  },
  {
    slug: "inclusive-education-week",
    name: "Inclusive Schools Week",
    month: 12,
    dayRange: "First week of December",
    description: "A week celebrating the progress schools have made in including students with disabilities and promoting the work that remains to be done. Truly inclusive education is a right, not a privilege.",
    history: "Inclusive Schools Week was established by the Inclusive Schools Network in 2001. It highlights successful inclusive practices and encourages schools to reflect on barriers to full inclusion.",
    howToObserve: ["Learn about the difference between integration and true inclusion", "Advocate for meaningful inclusion — not just physical presence in a general education classroom", "Support schools that prioritize belonging alongside academic achievement", "Learn about Universal Design for Learning (UDL) as an inclusion framework", "Celebrate educators who go above and beyond to include all students"],
    relatedTopics: ["school-rights", "iep-resource-center", "ages-school-age"],
    tags: ["inclusion", "education", "schools", "belonging"]
  },
  {
    slug: "anxiety-awareness-month",
    name: "Anxiety Awareness Month",
    month: 5,
    dayRange: "All of May (Mental Health Awareness Month)",
    description: "May is Mental Health Awareness Month, with anxiety as a central focus. Anxiety is the most common co-occurring condition in autism — affecting up to 50% of autistic people. Understanding anxiety in autism requires understanding how it presents differently than in non-autistic people.",
    history: "Mental Health Awareness Month was established in the US in 1949 by Mental Health America. Anxiety awareness has become a central component. The intersection of autism and anxiety has received growing research and clinical attention.",
    howToObserve: ["Learn how anxiety presents differently in autistic people — often through physical symptoms, meltdowns, or increased rigidity rather than verbal worry", "Advocate for autism-informed anxiety treatment", "Understand that reducing masking demands often reduces anxiety", "Support access to anxiety treatment for autistic individuals of all ages", "Learn about PDA as an anxiety-based autism profile"],
    relatedTopics: ["conditions-anxiety", "conditions-pda", "adults-burnout"],
    tags: ["anxiety", "mental-health", "co-occurring", "support"]
  },
  {
    slug: "neurodivergent-pride-day",
    name: "Neurodivergent Pride Day",
    month: 6,
    dayRange: "June 16",
    description: "A day within Pride Month celebrating neurodivergent identities, including autism, ADHD, dyslexia, and other neurological differences. The day affirms that neurodivergence is part of human diversity, not pathology.",
    history: "Neurodivergent Pride Day emerged from the intersection of disability pride and LGBTQ+ Pride Month in June. Many neurodivergent people identify with both communities, given the high overlap between autism and gender diversity.",
    howToObserve: ["Celebrate neurodivergent identity without framing it as tragedy or inspiration", "Learn about the intersection of neurodivergence and LGBTQ+ identities", "Support neurodivergent LGBTQ+ spaces and advocates", "Reflect on how neurodivergent experiences shape identity and community", "Center neurodivergent voices in neurodivergent celebrations"],
    relatedTopics: ["autistic-pride-day", "neurodiversity", "identity-first-language"],
    tags: ["pride", "neurodivergent", "identity", "community"]
  },
  {
    slug: "presuming-competence-day",
    name: "Presuming Competence Day",
    month: 4,
    dayRange: "April 18",
    description: "A day within Autism Acceptance Month dedicated to the principle of presuming competence — assuming that every autistic person, regardless of communication or support needs, has the capacity to learn, communicate, and grow.",
    history: "The principle of presuming competence was articulated by educator Anne Donnellan and championed by the disability rights movement. It has become central to modern autism support philosophy, replacing outdated assumptions based on IQ scores and speech ability.",
    howToObserve: ["Learn what 'presume competence' means in practice — how does it change your interactions?", "Examine your assumptions about nonspeaking or minimally speaking autistic people", "Advocate for communication access at every level — every autistic person deserves a way to communicate", "Challenge the use of functioning labels that presume incompetence", "Read or watch content by nonspeaking autistic people who are communicating in remarkable ways"],
    relatedTopics: ["communication-aac", "nonspeaking-autism-awareness-day", "glossary-presuming-competence"],
    tags: ["presuming-competence", "communication", "rights", "inclusion"]
  },
  {
    slug: "down-syndrome-awareness-month",
    name: "Down Syndrome Awareness Month",
    month: 10,
    dayRange: "All of October",
    description: "A month celebrating people with Down syndrome and promoting inclusion. Down syndrome and autism co-occur more frequently than in the general population, and many families navigate both diagnoses.",
    history: "Down Syndrome Awareness Month has been recognized in October since the 1980s. The National Down Syndrome Society and the National Down Syndrome Congress lead awareness efforts.",
    howToObserve: ["Learn about the co-occurrence of Down syndrome and autism", "Support inclusive education and employment for people with Down syndrome", "Amplify the voices of self-advocates with Down syndrome", "Challenge stereotypes about Down syndrome in media and everyday conversation", "Connect with Down syndrome community organizations"],
    relatedTopics: ["developmental-disabilities-awareness-month", "resources"],
    tags: ["Down-syndrome", "co-occurring", "inclusion", "awareness"]
  },
  {
    slug: "rare-disease-day",
    name: "Rare Disease Day",
    month: 2,
    dayRange: "Last day of February",
    description: "A global awareness day for rare diseases. Some genetic conditions associated with autism — including Fragile X syndrome, Rett syndrome, Tuberous Sclerosis, and Angelman syndrome — are considered rare diseases with specific research and advocacy communities.",
    history: "Rare Disease Day was established in Europe in 2008 by EURORDIS and now has over 100 country partners. The last day of February was chosen for its own rarity — most years it is February 28, but in leap years it is February 29.",
    howToObserve: ["Learn about genetic conditions associated with autism", "Support research into rare conditions that cause autism", "Connect with syndrome-specific communities if your child has a genetic diagnosis", "Advocate for rare disease research funding", "Understand that autism itself is not rare — but some of its associated conditions are"],
    relatedTopics: ["diagnosis", "co-occurring-conditions", "resources"],
    tags: ["rare-disease", "genetic", "research", "awareness"]
  },
  {
    slug: "autism-research-day",
    name: "Autism Science Foundation Day",
    month: 4,
    dayRange: "April 6",
    description: "A day recognizing evidence-based autism research and science literacy. The Autism Science Foundation was established by Alison Singer, a parent and autism researcher committed to rigorous, ethical autism science.",
    history: "The Autism Science Foundation was founded in April 2009 after Alison Singer departed Autism Speaks over disagreements about vaccine research. ASF focuses on funding rigorous science and combating misinformation in the autism community.",
    howToObserve: ["Learn to evaluate autism research critically — who funded it? What was the sample size?", "Follow the Autism Science Foundation for evidence-based research updates", "Push back on autism misinformation, including vaccine pseudoscience", "Support research that centers autistic people's quality of life — not just cause-finding", "Learn about the ethical debates in autism research, including the MSSNG project"],
    relatedTopics: ["diagnosis", "acceptance-vs-awareness", "resources"],
    tags: ["research", "science", "evidence-based", "awareness"]
  },
  {
    slug: "feeding-therapy-awareness-month",
    name: "Feeding Therapy Awareness Month",
    month: 3,
    dayRange: "All of March",
    description: "A month raising awareness of feeding differences and ARFID (Avoidant/Restrictive Food Intake Disorder), which is significantly more common in autistic people. Eating differences in autism are sensory-based, not behavioral, and deserve specialized support.",
    history: "Feeding therapy awareness efforts have grown alongside ARFID research. ARFID was added to the DSM-5 in 2013, providing diagnostic language for restrictive eating not driven by body image. Feeding therapy for autistic children has become a specialized field.",
    howToObserve: ["Learn about ARFID and how it differs from picky eating", "Understand that eating differences in autism are sensory-driven — not willful", "Avoid pressure-based feeding strategies — they typically worsen food anxiety", "Seek occupational therapists and feeding specialists trained in sensory-based approaches", "Connect with ARFID support communities for families"],
    relatedTopics: ["conditions-arfid", "sensory-processing", "co-occurring-conditions"],
    tags: ["feeding", "ARFID", "sensory", "support"]
  },
  {
    slug: "gender-autism-awareness-month",
    name: "Autism and Gender Diversity Month",
    month: 6,
    dayRange: "All of June (Pride Month)",
    description: "Pride Month offers a natural opportunity to highlight the significant overlap between autism and gender diversity. Research suggests autistic people are more likely to identify as transgender or gender nonconforming than non-autistic people.",
    history: "The relationship between autism and gender diversity has gained significant research attention since the 2010s. Studies consistently show elevated rates of gender diversity among autistic people, though the reasons remain debated. Advocacy spaces have increasingly recognized and centered autistic LGBTQ+ people.",
    howToObserve: ["Learn about the research on autism and gender diversity", "Support autistic LGBTQ+ young people who face intersecting challenges", "Create affirming spaces that acknowledge both autistic and gender-diverse identities", "Avoid treating gender diversity as a symptom of autism — it is not", "Connect with organizations that support autistic LGBTQ+ individuals and families"],
    relatedTopics: ["adults", "neurodivergent-pride-day", "late-diagnosis-awareness-day"],
    tags: ["gender", "LGBTQ", "Pride", "identity", "research"]
  },
  {
    slug: "sensory-friendly-month",
    name: "Sensory Friendly Month",
    month: 10,
    dayRange: "All of October",
    description: "A month encouraging businesses, venues, and organizations to create sensory-friendly environments — reducing overwhelming stimuli for autistic people and others with sensory sensitivities. Sensory-friendly spaces are a concrete act of inclusion.",
    history: "Sensory Friendly Month emerged from the work of autism organizations and disability advocates who pushed theaters, stores, museums, and restaurants to offer sensory-accommodating experiences. The movement has grown significantly in the past decade.",
    howToObserve: ["Ask your local movie theater, museum, or community center about sensory-friendly programming", "Reduce unnecessary sensory stimulation in your workplace or classroom", "Learn what makes a space sensory-friendly: lighting, sound, smell, crowding, predictability", "Advocate for sensory accommodations in public and private spaces", "Support businesses that proactively create sensory-friendly environments"],
    relatedTopics: ["sensory-processing", "tools", "resources"],
    tags: ["sensory", "inclusion", "community", "businesses"]
  },
  {
    slug: "acceptance-over-awareness-month",
    name: "Acceptance Over Awareness Month",
    month: 4,
    dayRange: "All of April",
    description: "A reframe of traditional autism awareness campaigns, promoted by autistic self-advocates. The distinction between awareness and acceptance is not semantic — awareness keeps autism at arm's length, while acceptance requires action, inclusion, and genuine respect for autistic identity.",
    history: "The acceptance-over-awareness framework gained momentum in the 2010s as autistic self-advocates pushed back against campaigns they found dehumanizing. The Autistic Self Advocacy Network (ASAN) and other organizations have championed the reframe.",
    howToObserve: ["Ask what acceptance looks like in your specific context — at home, at work, at school", "Evaluate the autism organizations you support: do they have autistic leadership?", "Push back on cure-focused messaging and puzzle piece imagery", "Center autistic people's stated needs and preferences in your advocacy", "Commit to ongoing action beyond awareness — accommodation, inclusion, and equity"],
    relatedTopics: ["acceptance-vs-awareness", "autism-acceptance-month", "autistic-pride-day"],
    tags: ["acceptance", "advocacy", "community", "identity"]
  },
];
