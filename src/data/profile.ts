export const profile = {
  name: "Volodymyr Korablov",
  title: "Master · Heavy-Lift Vessels",
  tagline: "13+ years commanding heavy-lift operations worldwide",
  email: "volodymyr.korablov@gmail.com",
  phone: "+380507662038",
  telegram: "",
  cvPath: "/cv/CV_Volodymyr_Korablov.pdf",
  profileImage: "/images/profile.jpg",

  about:
    "Experienced Heavy-Lift Master with continuous service on heavy-lift vessels since 2012. Over 13 years of professional experience in heavy-lift and project cargo operations, including command as Master. Extensive background in handling complex, non-standard and oversized cargoes worldwide. Safety-oriented leader with calm decision-making under pressure.",

  keyFacts: [
    { value: "13+", label: "Years at Sea", sub: "Since 2012" },
    { value: "6", label: "Major Companies", sub: "Heavy-lift operators" },
    { value: "Master", label: "Certificate", sub: "Unlimited" },
    { value: "C1/D", label: "US Visa", sub: "Valid to 2027" },
  ],

  companies: [
    "BBC Chartering",
    "dship Carriers",
    "Intermarine",
    "SAL Heavy Lift",
    "Harren & Partner",
    "Combi Lift",
  ],

  cargoExpertise: [
    "Power plant modules",
    "Transformers",
    "Generators",
    "Industrial reactors",
    "Offshore equipment",
    "Cranes",
    "Wind turbine components",
    "Steel structures",
    "Heavy construction machinery",
    "Large project modules",
  ],

  operationsExpertise: [
    "Heavy-lift crane operations",
    "Tandem lifts",
    "Cargo securing & lashing plans",
    "Ballast & stability calculations",
    "Project cargo loading/discharging",
    "Marine Warranty Surveyor cooperation",
    "Oversized cargo transportation",
    "Port heavy-lift operations worldwide",
  ],

  experience: [
    {
      period: "Jun 2025 – Oct 2025",
      role: "Master",
      vessel: "Industrial Skipper",
      dwt: "12,329",
      owner: "Jaune International",
    },
    {
      period: "Dec 2024 – Feb 2025",
      role: "Master",
      vessel: "Industrial Skipper",
      dwt: "12,329",
      owner: "Jaune International",
    },
  ],

  gallery: [] as Array<{ src: string; alt: string }>,
} as const;
