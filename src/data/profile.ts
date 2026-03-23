export const profile = {
  name: "Volodymyr Korablov",
  title: "Master · Heavy-Lift Vessels",
  tagline: "13+ years commanding heavy-lift operations worldwide",
  email: "volodymyr.korablov@gmail.com",
  phone: "+380507662038",
  telegram: "CaptKorablov",
  linkedin: "https://www.linkedin.com/in/capt-korablov",
  cvPath: "/cv/CV_Volodymyr_Korablov.pdf",
  profileImage: "/images/main-official-20260323-v3.jpg",

  about:
    "Experienced Heavy-Lift Master with continuous service on heavy-lift vessels since 2012. Over 13 years of professional experience in heavy-lift and project cargo operations, including command as Master. Extensive background in handling complex, non-standard and oversized cargoes worldwide. Safety-oriented leader with calm decision-making under pressure.",

  keyFacts: [
    { value: "13+", label: "Years at Sea", sub: "Since 2012" },
    { value: "7", label: "Major Companies", sub: "Heavy-lift operators" },
    { value: "Master", label: "Certificate", sub: "Unlimited" },
    { value: "Available", label: "Availability", sub: "Master on Heavy Lift / MPP vessels" },
  ],

  companies: [
    { name: "BBC Chartering", url: "https://www.bbc-chartering.com" },
    { name: "dship Carriers", url: "https://dship-carriers.com" },
    { name: "Intermarine", url: "https://www.intermarine.com" },
    { name: "SAL Heavy Lift", url: "https://sal.global" },
    { name: "Harren & Partner", url: "https://www.harren-group.com" },
    { name: "Combi Lift", url: "https://www.combi-lift.net" },
    { name: "Jumbo Shipping", url: "https://www.jumbomaritime.nl" },
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

  gallery: [
    { src: "/images/image01.png", alt: "Heavy-lift vessel night loading operations at port" },
    { src: "/images/image02.png", alt: "Tandem crane lift of industrial reactor" },
    { src: "/images/image03.png", alt: "Luxury yacht heavy-lift loading" },
    { src: "/images/image04.png", alt: "Liebherr crane discharge at tropical port" },
    { src: "/images/image05.png", alt: "Tandem lift of transformer module" },
    { src: "/images/image06.png", alt: "Industrial vessels crane loading operation" },
    { src: "/images/image07.png", alt: "Liebherr crane loading at Inter Marine vessel" },
    { src: "/images/image08.png", alt: "Tugboat heavy-lift operation" },
    { src: "/images/image09.png", alt: "Industrial reactor loading into cargo hold" },
    { src: "/images/image10.png", alt: "Patrol boat offshore crane discharge" },
    { src: "/images/image11.png", alt: "Crawler crane loading at Inter Marine" },
    { src: "/images/image12.png", alt: "Heavy crane discharge at coastal port" },
  ],
} as const;
