export const CONTACT = {
  phone: "07412754646",
  phoneHref: "tel:07412754646",
  emailGeneral: "admin@excellentfutureltd.com",
  emailAppointments: "julie@excellentfutureltd.com",
  location: "Wales, United Kingdom",
  hours: "24 Hours",
  phoneDisplay: "07412 754646",
  emailInfo: "info@excellentfutureltd.com",
  websiteUrl: "https://excellentfutureltd.com",
  websiteDisplay: "excellentfutureltd.com",
};

/** Consistent coverage wording used across the whole website. */
export const COVERAGE_STATEMENT =
  "Based in Wales, expanding to serve communities across the UK soon.";

export const COMING_SOON_MESSAGE =
  "Our registration is currently in progress and this service will launch soon. You are welcome to register your interest now and we will contact you as soon as we go live.";

export const SUB_SERVICE_NOTICE =
  "This is part of our Domiciliary Care service and will become available when Domiciliary Care launches.";

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  description: string;
  who: string[];
  provide: string[];
  benefits: string[];
  comingSoon?: boolean;
  /** Slugs of services grouped beneath this one. */
  subServices?: string[];
  /** Slug of the parent service this belongs to. */
  parent?: string;
};

/** Primary, standalone services shown in navigation, cards and the footer. */
export const SERVICES: Service[] = [
  {
    slug: "domiciliary-care",
    title: "Domiciliary Care",
    comingSoon: true,
    subServices: [
      "elderly-care",
      "personal-care",
      "live-in-care",
      "respite-care",
      "palliative-care",
    ],
    short:
      "Our core care-at-home service, covering elderly care, personal care, live-in, respite and palliative support. Registration in progress, launching soon.",
    image:
      "/__l5e/assets-v1/86bbbd56-d14f-4ae8-a38d-b1d5dd5279f1/hero-2.jpg",
    description:
      "Domiciliary Care is our primary care-at-home service, bringing professional support directly into the home from short daily visits to several calls a day. It combines discreet personal care with attentive, unhurried support that helps people stay safe, well and independent in familiar surroundings. Elderly care, personal care, live-in care, respite care and palliative care all sit within this service. Our registration is currently in progress and Domiciliary Care will launch soon.",
    who: [
      "Older adults who want to remain at home",
      "Adults living with reduced mobility or long term conditions",
      "People recovering from surgery, illness or a hospital stay",
      "Families seeking reliable, ongoing scheduled support",
    ],
    provide: [
      "Elderly care and daily wellbeing checks",
      "Personal care delivered with full dignity",
      "Live-in care for round the clock support",
      "Respite care for family carers",
      "Palliative care alongside clinical teams",
      "Medication reminders and management",
      "Meal preparation and nutritional assistance",
      "Light housekeeping, laundry and shopping",
    ],
    benefits: [
      "Comfort, dignity and independence at home",
      "Continuity of care from familiar carers",
      "One coordinated plan across every type of support",
      "Peace of mind for the whole family",
    ],
  },
  {
    slug: "dementia-care",
    title: "Dementia Care",
    short:
      "Specialist, patient support for people living with dementia and their families.",
    image:
      "/__l5e/assets-v1/1a8b5e92-5344-43e0-8654-45afbc1e81ca/hero-4.jpg",
    description:
      "Living with dementia can feel unsettling for everyone involved. Our trained carers use gentle, person centred techniques to reduce anxiety, encourage familiar routines and support memory in everyday moments.",
    who: [
      "People at any stage of a dementia diagnosis",
      "Families needing respite from full time caring",
      "Carers looking for specialist expertise",
    ],
    provide: [
      "Structured daily routines that feel familiar",
      "Memory and cognitive stimulation activities",
      "Safe environment reviews at home",
      "Nutrition, hydration and medication support",
      "Family guidance and communication",
    ],
    benefits: [
      "Calmer days and better sleep",
      "Reduced risk of falls or wandering",
      "Meaningful moments of connection",
    ],
  },
  {
    slug: "domestic-support",
    title: "Domestic Support",
    short:
      "Practical help around the home so daily life stays calm and manageable.",
    image:
      "/__l5e/assets-v1/88c5b66c-daef-420c-a3cc-6c3ade01957d/hero-5.jpg",
    description:
      "A tidy, well run home makes a real difference to wellbeing. Our carers handle everyday chores with care and attention, keeping the household running smoothly.",
    who: [
      "People who find housework challenging",
      "Adults living with mobility issues",
      "Families needing a helping hand at home",
    ],
    provide: [
      "Light cleaning and laundry",
      "Meal preparation and shopping",
      "Bill and post organisation",
      "Errands and prescription collection",
      "Bed changing and general tidying",
    ],
    benefits: [
      "A safer, cleaner living environment",
      "More time for the things that matter",
      "Reduced stress at home",
    ],
  },
  {
    slug: "companionship",
    title: "Companionship",
    short:
      "Warm, friendly company that keeps loneliness at bay and life full of small joys.",
    image:
      "/__l5e/assets-v1/766d28f8-2980-4f3b-81f5-adeaf26d0e7f/hero-3.jpg",
    description:
      "Companionship visits are about connection. Whether it is a cup of tea and a chat, a walk in the park or an outing to a favourite place, our carers bring warmth and consistency to each visit.",
    who: [
      "Older adults who live alone",
      "People whose family lives far away",
      "Anyone needing regular social contact",
    ],
    provide: [
      "Friendly conversation and companionship",
      "Walks, outings and hobby support",
      "Help with letters, calls and technology",
      "Support to attend appointments and events",
      "Shared meals and activities",
    ],
    benefits: [
      "Better mood and mental wellbeing",
      "Stronger daily routines",
      "Ongoing social connection",
    ],
  },
  {
    slug: "staffing-solutions",
    title: "Staffing Solutions",
    short:
      "Temporary and permanent health and social care staff for hospitals, care homes, schools, prisons and supported living.",
    image:
      "/__l5e/assets-v1/87c6dc38-01c7-44e1-85a5-87abdb79c049/hero-1.jpg",
    description:
      "We supply reliable, fully vetted health and social care professionals to organisations that cannot afford gaps in cover. Every candidate is interviewed, referenced and DBS checked before placement, and our team is contactable 24 hours a day for urgent shift requests.",
    who: [
      "Hospitals and NHS services needing ward cover",
      "Care homes filling day, night and weekend shifts",
      "Schools requiring learning and pastoral support staff",
      "Prisons needing cleared healthcare professionals",
      "Supported living and complex needs services",
    ],
    provide: [
      "Registered nurses and healthcare assistants",
      "Support workers and care assistants",
      "Learning support and pastoral staff",
      "Temporary, block booking and permanent placements",
      "Rapid response cover 24 hours a day",
      "Full compliance, referencing and DBS checks",
    ],
    benefits: [
      "Safe staffing levels maintained at all times",
      "Consistent, familiar professionals on your rota",
      "One accountable partner for all your cover",
    ],
  },
];

/** Sub-services grouped beneath Domiciliary Care. */
export const SUB_SERVICES: Service[] = [
  {
    slug: "elderly-care",
    title: "Elderly Care",
    parent: "domiciliary-care",
    comingSoon: true,
    short:
      "Attentive daily support for older adults who want to stay safe, well and independent at home.",
    image:
      "/__l5e/assets-v1/766d28f8-2980-4f3b-81f5-adeaf26d0e7f/hero-3.jpg",
    description:
      "Elderly care is planned around routines, preferences, culture and family relationships so support feels natural rather than clinical. Visits can be short daily calls or several calls a day.",
    who: [
      "Older adults living alone or with a partner",
      "People living with long term conditions",
      "Families who want dependable daily reassurance",
    ],
    provide: [
      "Help getting up, washed, dressed and settled at night",
      "Medication reminders and management",
      "Meal preparation and nutritional support",
      "Mobility, transfers and falls prevention",
      "Daily wellbeing checks and companionship",
    ],
    benefits: [
      "Independence maintained at home for longer",
      "Familiar carers who know the person well",
      "Early spotting of changes in health",
    ],
  },
  {
    slug: "personal-care",
    title: "Personal Care",
    parent: "domiciliary-care",
    comingSoon: true,
    short:
      "Discreet, respectful help with washing, dressing and continence, always delivered with dignity.",
    image:
      "/__l5e/assets-v1/88c5b66c-daef-420c-a3cc-6c3ade01957d/hero-5.jpg",
    description:
      "Personal care is the most intimate support we provide, so it is always delivered by a carer the person knows and trusts, at a pace that feels comfortable.",
    who: [
      "Adults who need help with washing and dressing",
      "People living with reduced mobility",
      "Anyone recovering after surgery or illness",
    ],
    provide: [
      "Bathing, showering, grooming and dressing",
      "Continence care and toileting support",
      "Skin, oral and nail care",
      "Safe transfers and moving assistance",
      "Support getting ready for the day or for bed",
    ],
    benefits: [
      "Dignity and privacy protected at all times",
      "Confidence and comfort in daily routines",
      "Reduced risk of infection and skin problems",
    ],
  },
  {
    slug: "live-in-care",
    title: "Live-in Care",
    parent: "domiciliary-care",
    comingSoon: true,
    short:
      "A trusted carer living in the home to provide round the clock support and companionship.",
    image:
      "/__l5e/assets-v1/86bbbd56-d14f-4ae8-a38d-b1d5dd5279f1/hero-2.jpg",
    description:
      "Live-in care offers a warm alternative to residential care. A dedicated carer moves into the home, becoming a familiar and steadying presence that shapes each day around the person they support.",
    who: [
      "People who want to avoid moving into a care home",
      "Couples who wish to stay together at home",
      "Adults with complex or fluctuating needs",
    ],
    provide: [
      "24 hour on hand support",
      "Personal care and mobility assistance",
      "Cooking, cleaning and household management",
      "Companionship, hobbies and outings",
      "Coordination with GPs and healthcare teams",
    ],
    benefits: [
      "Full independence at home",
      "One consistent, trusted carer",
      "Tailored routines and full privacy",
    ],
  },
  {
    slug: "respite-care",
    title: "Respite Care",
    parent: "domiciliary-care",
    comingSoon: true,
    short:
      "Short term cover that gives family carers a genuine break, without disrupting routines.",
    image:
      "/__l5e/assets-v1/1a8b5e92-5344-43e0-8654-45afbc1e81ca/hero-4.jpg",
    description:
      "Respite care picks up an existing care plan exactly where the family leaves off, from a few hours a week to full 24 hour cover for a holiday or recovery period.",
    who: [
      "Family members who need a break from caring",
      "Adults needing temporary support after illness",
      "People planning a holiday or time away",
    ],
    provide: [
      "Short visits or extended stays",
      "Full continuation of existing care plans",
      "Personal care and household support",
      "Overnight or 24 hour cover",
    ],
    benefits: [
      "Rest and recovery for family carers",
      "Uninterrupted care routines",
      "Total peace of mind",
    ],
  },
  {
    slug: "palliative-care",
    title: "Palliative Care",
    parent: "domiciliary-care",
    comingSoon: true,
    short:
      "Compassionate comfort focused support at home, working alongside clinical and hospice teams.",
    image:
      "/__l5e/assets-v1/87c6dc38-01c7-44e1-85a5-87abdb79c049/hero-1.jpg",
    description:
      "Palliative care focuses on comfort, dignity and calm. We work closely with district nurses, GPs and hospice teams so the person and their family are fully supported at home.",
    who: [
      "People living with a life limiting illness",
      "Families needing coordinated end of life support",
      "Anyone wishing to remain at home in their final months",
    ],
    provide: [
      "Symptom and pain management support",
      "Personal and emotional care",
      "Coordination with clinical teams",
      "Overnight sitting and family respite",
    ],
    benefits: [
      "Comfort, dignity and calm at home",
      "Consistent, compassionate presence",
      "Full family support at every stage",
    ],
  },
];

export const ALL_SERVICES: Service[] = [...SERVICES, ...SUB_SERVICES];

export const SECTORS: { title: string; desc: string }[] = [
  { title: "Hospitals", desc: "Registered nurses and healthcare assistants for ward and unit cover." },
  { title: "Care Homes", desc: "Day, night and weekend shifts filled with vetted, experienced staff." },
  { title: "Schools", desc: "Learning support and pastoral staff who understand additional needs." },
  { title: "Prisons", desc: "Cleared healthcare professionals for secure environment placements." },
  { title: "Supported Living", desc: "Support workers for complex needs, mental health and learning disability services." },
  { title: "Home Care", desc: "Carers delivering scheduled visits and live-in support in the community." },
];

export const AVAILABLE_SERVICES = SERVICES.filter((s) => !s.comingSoon);

export function getService(slug: string) {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getSubServices(slug: string) {
  return SUB_SERVICES.filter((s) => s.parent === slug);
}
