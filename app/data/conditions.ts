export type Condition = {
  slug: string;
  name: string;
  prevalenceWithAutism: string;
  description: string;
  howItPresents: string;
  treatmentNotes: string;
  resources: { name: string; url: string }[];
  relatedTerms: string[];
};

export const conditions: Condition[] = [
  {
    slug: "adhd",
    name: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    prevalenceWithAutism: "50-70% of autistic people also have ADHD, compared to roughly 5-10% of the general population. The combination is sometimes called AuDHD.",
    description: "ADHD is a neurodevelopmental condition affecting attention regulation, impulse control, and activity level. It comes in inattentive, hyperactive-impulsive, and combined presentations. In autism, ADHD adds layers of executive function difficulty, emotional dysregulation, and working memory challenges.",
    howItPresents: "In autistic people, ADHD may present as hyperfocus on special interests alongside inability to attend to non-preferred tasks, significant time blindness, emotional dysregulation that exceeds typical autism meltdowns, impulsive communication, and executive function difficulties more pronounced than autism alone would explain.",
    treatmentNotes: "Stimulant medications (methylphenidate, amphetamines) are effective for many people with AuDHD. Response may differ from non-autistic people with ADHD. Behavioral strategies, executive function coaching, and environmental modifications support daily functioning. Sensory considerations affect medication tolerance.",
    resources: [{ name: "CHADD", url: "https://chadd.org" }, { name: "ADDitude Magazine", url: "https://additudemag.com" }, { name: "ADHD Foundation (UK)", url: "https://adhdfoundation.org.uk" }],
    relatedTerms: ["executive-function", "working-memory", "rejection-sensitive-dysphoria", "twice-exceptional"]
  },
  {
    slug: "anxiety-disorder",
    name: "Anxiety Disorder",
    prevalenceWithAutism: "Up to 50% of autistic people have a co-occurring anxiety disorder. It is the most common mental health co-occurrence in autism.",
    description: "Anxiety disorders include generalized anxiety disorder, social anxiety disorder, specific phobias, panic disorder, and separation anxiety. In autism, anxiety is often driven by sensory differences, demand for social masking, unpredictability, and difficulty reading social situations.",
    howItPresents: "Anxiety in autistic people often presents through physical symptoms, increased rigidity, more frequent meltdowns, avoidance, increased stimming, and withdrawal — rather than the verbal worry more common in non-autistic anxiety presentations. This can cause anxiety to be missed or attributed to autism itself.",
    treatmentNotes: "CBT adapted for autism (cognitive-behavioral therapy) has the strongest evidence base. Exposure therapy approaches must be modified — forcing exposure to sensory triggers is not appropriate. Reducing masking demands often significantly reduces anxiety. Medication (SSRIs) is used when therapy alone is insufficient.",
    resources: [{ name: "Anxiety and Depression Association of America", url: "https://adaa.org" }, { name: "IOCDF (OCD and anxiety)", url: "https://iocdf.org" }],
    relatedTerms: ["masking", "pda", "autistic-burnout", "rejection-sensitive-dysphoria"]
  },
  {
    slug: "ocd",
    name: "OCD (Obsessive-Compulsive Disorder)",
    prevalenceWithAutism: "Roughly 17-37% of autistic people have OCD, compared to about 1-3% of the general population. The distinction between OCD and autism is clinically important and sometimes difficult.",
    description: "OCD involves intrusive obsessions (unwanted thoughts, images, or urges) that cause distress, and compulsions (repetitive behaviors or mental acts) performed to reduce anxiety. OCD and autism share surface features — repetitive behaviors, rigidity — but the underlying mechanisms differ.",
    howItPresents: "In autism, repetitive behaviors are often pleasurable or regulatory. In OCD, they are distressing and ego-dystonic — the person does not want to do them but feels compelled. An autistic person who counts ceiling tiles for comfort is not OCD. An autistic person who counts ceiling tiles because something terrible will happen if they do not is more consistent with OCD.",
    treatmentNotes: "Exposure and response prevention (ERP) is the gold standard for OCD. It must be adapted for autism — some triggers may be sensory, not purely anxiety-based. Standard ERP protocols may need modification. Combined OCD and autism expertise is rare and valuable.",
    resources: [{ name: "IOCDF", url: "https://iocdf.org" }, { name: "OCD Action (UK)", url: "https://ocdaction.org.uk" }],
    relatedTerms: ["anxiety-disorder", "perseveration", "demand-avoidance"]
  },
  {
    slug: "depression",
    name: "Depression",
    prevalenceWithAutism: "Depression affects 40-70% of autistic adults at some point in their lifetime — significantly higher than general population rates. It is often linked to chronic masking, social isolation, and unmet support needs.",
    description: "Depression is a mood disorder characterized by persistent low mood, loss of interest, fatigue, cognitive changes, and in severe cases, thoughts of suicide. In autistic people, depression is frequently triggered by the cumulative cost of living in a neurotypical world — years of masking, exclusion, and mismatch.",
    howItPresents: "Depression in autistic people may present with reduced engagement with special interests (a significant warning sign), increased shutdown behavior, withdrawal, reduced communication, and physical symptoms. The verbal expression of sadness common in non-autistic depression may be absent due to alexithymia.",
    treatmentNotes: "Autism-informed therapy is essential — standard CBT approaches require adaptation. Reducing masking demands can significantly reduce depressive symptoms. Medication works similarly in autistic people as in non-autistic people, though sensory side effects require attention. Community and connection with other autistic people is a protective factor.",
    resources: [{ name: "NAMI", url: "https://nami.org" }, { name: "Mental Health America", url: "https://mhanational.org" }],
    relatedTerms: ["autistic-burnout", "masking", "alexithymia", "unmasking"]
  },
  {
    slug: "epilepsy",
    name: "Epilepsy and Seizure Disorders",
    prevalenceWithAutism: "Epilepsy affects 20-30% of autistic people, compared to about 1-2% of the general population. The risk is higher in people with intellectual disabilities alongside autism.",
    description: "Epilepsy is a neurological condition characterized by recurrent seizures — episodes of uncontrolled electrical activity in the brain. Seizures range from absence (brief blank stares) to tonic-clonic (full body involvement). The autism-epilepsy connection reflects shared neurological underpinnings.",
    howItPresents: "In autistic people, seizures may be more difficult to identify — absence seizures can be mistaken for zoning out or shutdown. Behavioral changes before and after seizures (postictal state) may look like meltdowns or extreme fatigue. Any new repetitive motor behavior should be assessed for seizure activity.",
    treatmentNotes: "Anti-seizure medications are the primary treatment. Many autistic people try multiple medications before finding effective control. Ketogenic diet has evidence for some seizure types. Vagus nerve stimulation is an option for drug-resistant epilepsy. Seizure action plans should be in place at school and home.",
    resources: [{ name: "Epilepsy Foundation", url: "https://epilepsy.com" }, { name: "CURE Epilepsy", url: "https://cureepilepsy.org" }],
    relatedTerms: ["co-occurring-conditions", "safety"]
  },
  {
    slug: "dyspraxia-dcd",
    name: "Dyspraxia / Developmental Coordination Disorder (DCD)",
    prevalenceWithAutism: "DCD occurs in an estimated 80% of autistic people to some degree, making it one of the most common co-occurring motor challenges.",
    description: "DCD affects the planning and execution of coordinated physical movements. It impacts fine motor skills (handwriting, using tools, fastening buttons), gross motor skills (catching, running, sports), and sequencing of multi-step motor tasks.",
    howItPresents: "In autistic people, DCD may present as difficulty with handwriting, avoidance of sports or physical activities, slow to learn self-care tasks, difficulty with tools and utensils, and physical clumsiness. It can significantly affect school performance and self-esteem.",
    treatmentNotes: "Occupational therapy and physical therapy are the primary supports. Task-specific training and environmental modifications help significantly. Keyboarding as an alternative to handwriting is appropriate and often allows academic performance to shine. Physical adaptations in sports (rule modifications, different equipment) support participation.",
    resources: [{ name: "Dyspraxia Foundation (UK)", url: "https://dyspraxiafoundation.org.uk" }, { name: "DCD/Dyspraxia Network", url: "https://dcddyspraxia.org" }],
    relatedTerms: ["proprioception", "sensory-processing", "apraxia"]
  },
  {
    slug: "hypermobility-eds",
    name: "Hypermobility and Ehlers-Danlos Syndrome",
    prevalenceWithAutism: "Research consistently shows elevated rates of hypermobility and EDS in autistic populations. A 2021 study found autistic people were 7.4 times more likely to have EDS than non-autistic people.",
    description: "Hypermobile Ehlers-Danlos Syndrome (hEDS) and Hypermobility Spectrum Disorders (HSD) are chronic connective tissue conditions causing joint hypermobility, chronic pain, fatigue, and dysautonomia. The connection to autism likely reflects shared genetic pathways.",
    howItPresents: "In autistic people, hypermobility may present as chronic pain that is difficult to communicate, fatigue that is attributed to autism rather than a physical condition, proprioceptive differences (seeking deep pressure input), and frequent joint injuries. Interoceptive differences may mean pain is noticed later or differently.",
    treatmentNotes: "Physical therapy focused on joint stabilization is central to treatment. Pain management must be multimodal. Dysautonomia (often accompanying EDS) requires specific treatment. Many autistic people with EDS go undiagnosed for years — particularly because pain reporting differences are attributed to autism.",
    resources: [{ name: "The Ehlers-Danlos Society", url: "https://ehlers-danlos.com" }, { name: "POTS UK", url: "https://potsuk.org" }],
    relatedTerms: ["proprioception", "interoception", "sensory-processing"]
  },
  {
    slug: "gi-issues",
    name: "Gastrointestinal Issues",
    prevalenceWithAutism: "GI problems affect 46-84% of autistic people, compared to about 10-20% of the general population. The gut-brain axis is an active area of autism research.",
    description: "Common GI issues in autism include constipation, diarrhea, irritable bowel syndrome, reflux, abdominal pain, and nausea. The causes are likely multifactorial: sensory differences affecting food intake (ARFID), gut microbiome differences, and nervous system dysregulation.",
    howItPresents: "GI pain in autistic people may present as increased irritability, aggression, meltdowns, sleep disruption, or behavioral changes rather than direct reports of stomach pain — particularly in nonspeaking people. Identifying GI issues as a contributing factor to behavioral changes is essential.",
    treatmentNotes: "Dietary assessment (including ARFID evaluation), gastroenterology referral, and treatment of specific GI conditions is appropriate. Addressing sensory-based food restriction may improve nutritional status. Probiotic research in autism is ongoing but not yet conclusive.",
    resources: [{ name: "Autism Speaks GI Resource", url: "https://autismspeaks.org/gastrointestinal-conditions" }, { name: "American Gastroenterological Association", url: "https://gastro.org" }],
    relatedTerms: ["arfid", "interoception", "sensory-processing"]
  },
  {
    slug: "sleep-disorders",
    name: "Sleep Disorders",
    prevalenceWithAutism: "Sleep problems affect 50-80% of autistic children and up to 50% of autistic adults. Insomnia, difficulty initiating sleep, and disrupted sleep architecture are the most common.",
    description: "Autistic people have higher rates of insomnia, delayed sleep phase, night waking, and sleep-disordered breathing. Melatonin dysregulation, sensory sensitivities affecting sleep onset, anxiety, and irregular circadian rhythms all contribute.",
    howItPresents: "Sleep deprivation significantly worsens sensory sensitivity, executive function, emotional regulation, and social functioning. Poor sleep is frequently the hidden factor behind increased meltdowns, reduced tolerance, and worse school performance.",
    treatmentNotes: "Melatonin has the most research support for autism-related sleep difficulties. Sleep hygiene adaptations for sensory needs (weighted blankets, blackout curtains, white noise, consistent routines) help significantly. Cognitive behavioral therapy for insomnia (CBT-I) adapted for autism can be effective. Sleep apnea requires its own assessment and treatment.",
    resources: [{ name: "Autism Science Foundation Sleep Resources", url: "https://autismsciencefoundation.org" }, { name: "Sleep Foundation", url: "https://sleepfoundation.org" }],
    relatedTerms: ["sensory-processing", "autistic-burnout", "executive-dysfunction"]
  },
  {
    slug: "rejection-sensitive-dysphoria",
    name: "Rejection Sensitive Dysphoria (RSD)",
    prevalenceWithAutism: "RSD is most documented in ADHD, where it affects an estimated 99% of adults. Its prevalence in autism specifically is less studied but clinical observation suggests it is common, particularly in AuDHD individuals.",
    description: "RSD is an intense emotional response to perceived or actual rejection, criticism, failure, or exclusion. The emotional pain is described as overwhelming and out of proportion by the person experiencing it — not a choice, but a neurological response.",
    howItPresents: "In autistic people, RSD may contribute to school refusal, avoidance of new activities, difficulty accepting feedback, intense reactions to perceived social failures, and withdrawal from relationships. It can be mistaken for manipulative behavior.",
    treatmentNotes: "Alpha-2 agonists (guanfacine, clonidine) used for ADHD have some evidence for RSD. Therapy focused on cognitive reappraisal and identifying RSD triggers supports management. Understanding that RSD is neurological — not character — reduces shame and enables more effective coping.",
    resources: [{ name: "ADDitude Magazine on RSD", url: "https://additudemag.com/rejection-sensitive-dysphoria" }],
    relatedTerms: ["adhd", "anxiety-disorder", "masking", "autistic-burnout"]
  },
  {
    slug: "alexithymia",
    name: "Alexithymia",
    prevalenceWithAutism: "Alexithymia affects roughly 50% of autistic people, compared to about 10% of the general population.",
    description: "Alexithymia is difficulty identifying and describing one's own emotions. It is not the absence of emotion — it is a disconnection between the emotional experience and the cognitive recognition and labeling of it. Emotions may be experienced as physical sensations rather than feelings.",
    howItPresents: "In autistic people, alexithymia may present as difficulty answering 'how do you feel?', expressing emotions primarily through behavior, delayed recognition of one's own distress, difficulty identifying needs, and communication that focuses on facts rather than feelings.",
    treatmentNotes: "Interoceptive awareness activities (recognizing body signals as precursors to emotions) support alexithymia. Therapy that does not rely on verbal emotional expression is most accessible. Identifying physical signals as emotional data ('my chest is tight, that might mean anxiety') builds emotional literacy gradually.",
    resources: [{ name: "Alexithymia.us", url: "https://alexithymia.us" }, { name: "NeuroDivergent Insights", url: "https://neurodivergentinsights.com" }],
    relatedTerms: ["interoception", "masking", "autistic-burnout"]
  },
  {
    slug: "sensory-processing-disorder",
    name: "Sensory Processing Differences",
    prevalenceWithAutism: "Sensory processing differences are a core feature of autism, now included in the DSM-5 diagnostic criteria. Nearly all autistic people experience sensory differences to some degree.",
    description: "Sensory processing differences refer to how the nervous system receives and responds to sensory input from the eight sensory systems: sight, sound, touch, smell, taste, proprioception, vestibular, and interoception. Responses can be hypersensitive, hyposensitive, or mixed across systems.",
    howItPresents: "Sensory differences present across every aspect of daily life: what clothes are tolerable, what foods are edible, what environments are navigable, what sounds are bearable. The same person may be hypersensitive to sound and hyposensitive to pain — sensory profiles are individual.",
    treatmentNotes: "Occupational therapy with a sensory integration approach is the primary support. Sensory diets — structured plans for providing sensory input throughout the day — can reduce dysregulation. Environmental modifications are often the most immediately impactful intervention.",
    resources: [{ name: "STAR Institute", url: "https://sensoryhealth.org" }, { name: "American Occupational Therapy Association", url: "https://aota.org" }],
    relatedTerms: ["sensory-overload", "sensory-diet", "proprioception", "interoception", "vestibular-processing"]
  },
  {
    slug: "pda",
    name: "PDA (Pathological Demand Avoidance Profile)",
    prevalenceWithAutism: "PDA is considered an autism profile rather than a separate diagnosis in most frameworks. Prevalence estimates vary — it is likely underdiagnosed, particularly outside the UK.",
    description: "PDA is an autism profile characterized by extreme, anxiety-driven avoidance of ordinary demands and expectations. People with PDA often use sophisticated social strategies to avoid demands, have significant rigidity around control, and respond very differently to typical autism support approaches.",
    howItPresents: "PDA may present as extreme non-compliance with even preferred activities when they are framed as demands, use of social strategies (negotiating, excusing, distracting) to avoid demands, significant distress when control is removed, and relatively stronger social awareness than stereotypical autism.",
    treatmentNotes: "Traditional behavioral approaches consistently fail with PDA — they increase anxiety and avoidance. Low-demand, collaborative, autonomy-supportive approaches are more effective. The PDA Society (UK) has developed resource guides. Reducing demands and building trust is the starting point.",
    resources: [{ name: "PDA Society (UK)", url: "https://pdasociety.org.uk" }, { name: "PDA North America", url: "https://pdanorthamerica.com" }],
    relatedTerms: ["demand-avoidance", "anxiety-disorder", "fawn-response", "autistic-burnout"]
  },
  {
    slug: "arfid",
    name: "ARFID (Avoidant/Restrictive Food Intake Disorder)",
    prevalenceWithAutism: "ARFID is significantly more common in autistic people — estimates suggest 15-35% of autistic children meet criteria for ARFID, compared to about 3-5% of children generally.",
    description: "ARFID is characterized by restricted eating based on sensory properties (texture, smell, appearance, temperature), fear of adverse events (choking, vomiting), or low interest in eating — not body image concerns. It is distinct from other eating disorders.",
    howItPresents: "In autistic people, ARFID typically presents with highly selective eating based on sensory characteristics, strong preference for specific brands or preparation methods, significant distress around new foods, and nutritional limitations that may affect health. Mealtimes can be a significant source of family stress.",
    treatmentNotes: "Sensory-based feeding therapy by trained occupational therapists or feeding specialists is most appropriate. Pressure-based approaches (hiding foods, forcing exposure) consistently worsen ARFID. Nutritional support (supplements, fortified foods) addresses immediate health needs while therapy addresses the underlying avoidance.",
    resources: [{ name: "ARFID Awareness UK", url: "https://arfidawarenessuk.org" }, { name: "FEAST (Families Empowered)", url: "https://feast-ed.org" }],
    relatedTerms: ["sensory-processing", "sensory-avoiding", "gi-issues"]
  },
];
