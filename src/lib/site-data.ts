export const CONTACT = {
  phone: "07412754646",
  phoneHref: "tel:07412754646",
  emailGeneral: "admin@excellentfutureltd.com",
  emailAppointments: "julie@excellentfutureltd.com",
  location: "United Kingdom",
  hours: "24 Hours",
};

export const COMING_SOON_MESSAGE =
  "We are currently in the process of setting up this service. More information coming soon.";

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
};

export const SERVICES: Service[] = [
  {
    slug: "dementia-care",
    title: "Dementia Care",
    short:
      "Specialist, patient support for people living with dementia and their families.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=85",
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
    slug: "domiciliary-care",
    title: "Domiciliary Care",
    short:
      "Scheduled visiting care at home, including personal care and support for older adults living independently.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=85",
    description:
      "Our domiciliary care service brings professional support directly into the home, from short daily visits to several calls a day. It combines discreet personal care with the attentive, unhurried support that helps older adults stay safe, well and independent in familiar surroundings. Every visit is planned around routines, preferences, culture and family relationships so the care feels natural rather than clinical.",
    who: [
      "Older adults who want to remain at home",
      "Adults living with reduced mobility or long term conditions",
      "People recovering from surgery, illness or a hospital stay",
      "Families seeking reliable, ongoing scheduled support",
    ],
    provide: [
      "Bathing, showering, grooming and dressing",
      "Continence care and toileting support with full dignity",
      "Medication reminders and management",
      "Meal preparation and nutritional assistance",
      "Mobility, transfers and falls prevention support",
      "Light housekeeping, laundry and shopping",
      "Companionship and daily wellbeing checks",
      "Support to attend appointments and community activities",
    ],
    benefits: [
      "Comfort, dignity and independence at home",
      "Continuity of care from familiar carers",
      "Improved confidence and quality of life day to day",
      "Peace of mind for the whole family",
    ],
  },
  {
    slug: "live-in-care",
    title: "Live-in Care",
    short:
      "A trusted carer living in the home to provide round the clock support and companionship.",
    image:
      "https://images.unsplash.com/photo-1543333995-a78aea2eee50?auto=format&fit=crop&w=1400&q=85",
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
    slug: "companionship",
    title: "Companionship",
    short:
      "Warm, friendly company that keeps loneliness at bay and life full of small joys.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=85",
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
    slug: "domestic-support",
    title: "Domestic Support",
    short:
      "Practical help around the home so daily life stays calm and manageable.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85",
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
    slug: "palliative-care",
    title: "Palliative Care",
    comingSoon: true,
    short: COMING_SOON_MESSAGE,
    image:
      "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&w=1400&q=85",
    description: COMING_SOON_MESSAGE,
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
  {
    slug: "respite-care",
    title: "Respite Care",
    comingSoon: true,
    short: COMING_SOON_MESSAGE,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=85",
    description: COMING_SOON_MESSAGE,
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
];

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
  return SERVICES.find((s) => s.slug === slug);
}
