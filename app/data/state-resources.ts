export type StateResource = {
  slug: string;
  name: string;
  abbreviation: string;
  medicaidWaivers: { name: string; description: string }[];
  insuranceMandate: boolean;
  insuranceMandateDetails: string;
  autismSocietyChapter: string;
  schoolRightsNote: string;
  crisisLine: string;
  notableOrgs: { name: string; url: string }[];
};

export const stateResources: StateResource[] = [
  {
    slug: "alabama",
    name: "Alabama",
    abbreviation: "AL",
    medicaidWaivers: [
      { name: "Alabama Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Alabama — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Alabama students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — AL Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Alabama Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "alaska",
    name: "Alaska",
    abbreviation: "AK",
    medicaidWaivers: [
      { name: "Alaska Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Alaska — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Alaska students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — AK Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Alaska Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbreviation: "AZ",
    medicaidWaivers: [
      { name: "Arizona Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Arizona — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Arizona students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — AZ Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Arizona Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "arkansas",
    name: "Arkansas",
    abbreviation: "AR",
    medicaidWaivers: [
      { name: "Arkansas Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Arkansas — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Arkansas students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — AR Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Arkansas Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    medicaidWaivers: [
      { name: "California Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of California — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "California students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — CA Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "California Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbreviation: "CO",
    medicaidWaivers: [
      { name: "Colorado Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Colorado — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Colorado students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — CO Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Colorado Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbreviation: "CT",
    medicaidWaivers: [
      { name: "Connecticut Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Connecticut — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Connecticut students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — CT Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Connecticut Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "delaware",
    name: "Delaware",
    abbreviation: "DE",
    medicaidWaivers: [
      { name: "Delaware Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Delaware — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Delaware students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — DE Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Delaware Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    medicaidWaivers: [
      { name: "Florida Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Florida — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Florida students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — FL Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Florida Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbreviation: "GA",
    medicaidWaivers: [
      { name: "Georgia Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Georgia — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Georgia students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — GA Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Georgia Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    abbreviation: "HI",
    medicaidWaivers: [
      { name: "Hawaii Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Hawaii — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Hawaii students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — HI Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Hawaii Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "idaho",
    name: "Idaho",
    abbreviation: "ID",
    medicaidWaivers: [
      { name: "Idaho Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Idaho — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Idaho students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — ID Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Idaho Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbreviation: "IL",
    medicaidWaivers: [
      { name: "Illinois Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Illinois — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Illinois students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — IL Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Illinois Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "indiana",
    name: "Indiana",
    abbreviation: "IN",
    medicaidWaivers: [
      { name: "Indiana Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Indiana — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Indiana students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — IN Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Indiana Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "iowa",
    name: "Iowa",
    abbreviation: "IA",
    medicaidWaivers: [
      { name: "Iowa Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Iowa — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Iowa students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — IA Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Iowa Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "kansas",
    name: "Kansas",
    abbreviation: "KS",
    medicaidWaivers: [
      { name: "Kansas Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Kansas — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Kansas students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — KS Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Kansas Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    abbreviation: "KY",
    medicaidWaivers: [
      { name: "Kentucky Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Kentucky — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Kentucky students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — KY Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Kentucky Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    abbreviation: "LA",
    medicaidWaivers: [
      { name: "Louisiana Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Louisiana — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Louisiana students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — LA Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Louisiana Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "maine",
    name: "Maine",
    abbreviation: "ME",
    medicaidWaivers: [
      { name: "Maine Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Maine — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Maine students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — ME Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Maine Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbreviation: "MD",
    medicaidWaivers: [
      { name: "Maryland Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Maryland — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Maryland students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — MD Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Maryland Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbreviation: "MA",
    medicaidWaivers: [
      { name: "Massachusetts Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Massachusetts — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Massachusetts students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — MA Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Massachusetts Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "michigan",
    name: "Michigan",
    abbreviation: "MI",
    medicaidWaivers: [
      { name: "Michigan Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Michigan — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Michigan students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — MI Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Michigan Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    abbreviation: "MN",
    medicaidWaivers: [
      { name: "Minnesota Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Minnesota — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Minnesota students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — MN Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Minnesota Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "mississippi",
    name: "Mississippi",
    abbreviation: "MS",
    medicaidWaivers: [
      { name: "Mississippi Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Mississippi — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Mississippi students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — MS Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Mississippi Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "missouri",
    name: "Missouri",
    abbreviation: "MO",
    medicaidWaivers: [
      { name: "Missouri Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Missouri — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Missouri students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — MO Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Missouri Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "montana",
    name: "Montana",
    abbreviation: "MT",
    medicaidWaivers: [
      { name: "Montana Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Montana — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Montana students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — MT Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Montana Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "nebraska",
    name: "Nebraska",
    abbreviation: "NE",
    medicaidWaivers: [
      { name: "Nebraska Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Nebraska — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Nebraska students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — NE Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Nebraska Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbreviation: "NV",
    medicaidWaivers: [
      { name: "Nevada Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Nevada — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Nevada students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — NV Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Nevada Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    abbreviation: "NH",
    medicaidWaivers: [
      { name: "New Hampshire Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of New Hampshire — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "New Hampshire students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — NH Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "New Hampshire Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbreviation: "NJ",
    medicaidWaivers: [
      { name: "New Jersey Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of New Jersey — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "New Jersey students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — NJ Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "New Jersey Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    abbreviation: "NM",
    medicaidWaivers: [
      { name: "New Mexico Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of New Mexico — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "New Mexico students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — NM Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "New Mexico Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    medicaidWaivers: [
      { name: "New York Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of New York — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "New York students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — NY Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "New York Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbreviation: "NC",
    medicaidWaivers: [
      { name: "North Carolina Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of North Carolina — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "North Carolina students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — NC Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "North Carolina Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "north-dakota",
    name: "North Dakota",
    abbreviation: "ND",
    medicaidWaivers: [
      { name: "North Dakota Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of North Dakota — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "North Dakota students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — ND Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "North Dakota Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbreviation: "OH",
    medicaidWaivers: [
      { name: "Ohio Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Ohio — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Ohio students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — OH Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Ohio Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    abbreviation: "OK",
    medicaidWaivers: [
      { name: "Oklahoma Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Oklahoma — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Oklahoma students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — OK Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Oklahoma Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbreviation: "OR",
    medicaidWaivers: [
      { name: "Oregon Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Oregon — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Oregon students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — OR Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Oregon Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbreviation: "PA",
    medicaidWaivers: [
      { name: "Pennsylvania Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Pennsylvania — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Pennsylvania students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — PA Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Pennsylvania Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbreviation: "RI",
    medicaidWaivers: [
      { name: "Rhode Island Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Rhode Island — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Rhode Island students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — RI Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Rhode Island Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbreviation: "SC",
    medicaidWaivers: [
      { name: "South Carolina Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of South Carolina — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "South Carolina students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — SC Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "South Carolina Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "south-dakota",
    name: "South Dakota",
    abbreviation: "SD",
    medicaidWaivers: [
      { name: "South Dakota Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of South Dakota — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "South Dakota students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — SD Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "South Dakota Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    abbreviation: "TN",
    medicaidWaivers: [
      { name: "Tennessee Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Tennessee — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Tennessee students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — TN Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Tennessee Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    medicaidWaivers: [
      { name: "Texas Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Texas — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Texas students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — TX Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Texas Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "utah",
    name: "Utah",
    abbreviation: "UT",
    medicaidWaivers: [
      { name: "Utah Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Utah — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Utah students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — UT Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Utah Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "vermont",
    name: "Vermont",
    abbreviation: "VT",
    medicaidWaivers: [
      { name: "Vermont Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Vermont — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Vermont students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — VT Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Vermont Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbreviation: "VA",
    medicaidWaivers: [
      { name: "Virginia Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Virginia — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Virginia students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — VA Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Virginia Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "washington",
    name: "Washington",
    abbreviation: "WA",
    medicaidWaivers: [
      { name: "Washington Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Washington — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Washington students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — WA Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Washington Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "west-virginia",
    name: "West Virginia",
    abbreviation: "WV",
    medicaidWaivers: [
      { name: "West Virginia Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of West Virginia — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "West Virginia students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — WV Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "West Virginia Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "wisconsin",
    name: "Wisconsin",
    abbreviation: "WI",
    medicaidWaivers: [
      { name: "Wisconsin Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Wisconsin — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Wisconsin students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — WI Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Wisconsin Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    abbreviation: "WY",
    medicaidWaivers: [
      { name: "Wyoming Medicaid HCBS Waiver", description: "Home and community-based services waiver for individuals with developmental disabilities. Covers respite care, supported employment, community habilitation, and other services. Contact your state Medicaid office for current eligibility and waitlist status." },
      { name: "Developmental Disability Waiver", description: "Provides supports for autistic individuals and those with other developmental disabilities to live in the community. Services vary by state — contact your regional center or state DD agency for current offerings." }
    ],
    insuranceMandate: true,
    insuranceMandateDetails: "All 50 states have enacted autism insurance mandates requiring coverage of autism spectrum disorder treatment. Coverage scope, age limits, and dollar caps vary significantly by state and plan type. Contact your state insurance commissioner or an autism advocacy organization for current details specific to your plan.",
    autismSocietyChapter: "Autism Society of Wyoming — visit https://autism-society.org to find your local chapter and connect with state-specific resources, support groups, and advocacy efforts.",
    schoolRightsNote: "Wyoming students with autism are protected under IDEA, which guarantees a free appropriate public education (FAPE) in the least restrictive environment (LRE). Your child has the right to an IEP and procedural safeguards. Contact your state's Parent Training and Information Center for free advocacy support.",
    crisisLine: "988 Suicide and Crisis Lifeline (call or text 988). Crisis Text Line: text HOME to 741741. For autism-specific crisis support, contact your regional autism center or state developmental disability agency.",
    notableOrgs: [
      { name: "Autism Society of America — WY Chapter", url: "https://autism-society.org/living-with-autism/find-your-local-chapter" },
      { name: "Wyoming Council on Developmental Disabilities", url: "https://acl.gov/programs/aging-and-disability-networks/state-councils-developmental-disabilities" },
      { name: "PACER Center / Parent Training Information", url: "https://parentcenterhub.org/find-your-center" }
    ]
  },
];
