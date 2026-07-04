export const siteConfig = {
  name: "Pinnacle HR",
  legalName: "Pinnacle Human Resource Pvt. Ltd.",
  tagline: "Making The Basics Right",
  description:
    "Since 2008, Pinnacle HR has grown into a leading Human Resource Consulting firm and a one-stop shop for Recruitment, Staffing, Training, Campus Hiring, Background Verification, Higher Education, Compliance Services, and Digital Marketing.",
  founder: "Mr. Santosh Kumar Dash",
  foundedYear: 2008,
  phones: ["+91-9090507070", "+91-9237248555"],
  landline: "+91-0674-2541555",
  emails: {
    career: "career@pinnaclejobs.in",
    corporate: "corporate@pinnaclejobs.in",
  },
  headOffice: {
    label: "Bhubaneswar (HQ)",
    address: "Plot No. A/118, Saheed Nagar, Bhubaneswar, Odisha 751007",
  },
  businessHours: "Mon–Fri, 10:00 AM – 6:00 PM",
  branches: ["Bhubaneswar", "Kolkata", "Bangalore", "Chandigarh", "Mumbai"],
  social: {
    facebook: "https://www.facebook.com/pinnaclehrpvtltd/",
    twitter: "https://www.twitter.com/Pinnacle_HR",
    linkedin: "https://www.linkedin.com/company/pinnaclehr08",
    instagram: "https://www.instagram.com/pinnacle_hr",
    youtube: "https://youtube.com/channel/UCpOXKuvJi-JUiENINCmgQqg",
  },
  stats: [
    { label: "Candidates Placed", value: "9,200+" },
    { label: "Years of Experience", value: "18+" },
    { label: "ISO 9001:2015 Certified", value: "✓" },
    { label: "Branch Offices", value: "5" },
  ],
};

export const aboutLinks = [
  { href: "/about/who-we-are", label: "Who We Are" },
  { href: "/about/mission-vision-values", label: "Mission, Vision & Values" },
  { href: "/about/awards-journey", label: "Awards & Journey" },
  { href: "/about/csr", label: "CSR" },
];

export const services = [
  {
    slug: "recruitment",
    title: "Recruitment",
    summary: "Finding the right talent for the right job since 2008.",
    details: [
      "Lateral hiring with skill and package verification",
      "Manpower sourcing for established companies",
      "Executive search for CEO, CFO, CIO, COO and HRD roles",
      "Head-hunting for specialized, hard-to-fill positions",
    ],
  },
  {
    slug: "staffing",
    title: "Staffing",
    summary:
      "Temporary and permanent staffing across building materials, FMCG, engineering, retail, IT/ITES, and BFSI.",
    details: [
      "Precise skill-matching against client requirements",
      "Both temporary and permanent placements",
      "Specialists in ERP/CRM, database, QA, and networking roles",
      "Serving building materials, FMCG, engineering, retail, IT/ITES and BFSI",
    ],
  },
  {
    slug: "campus-hiring",
    title: "Campus Hiring",
    summary:
      "Identifying and nurturing talent at premium B-Schools and engineering institutes across the state.",
    details: [
      "Pre-placement talks and eligibility screening",
      "Written aptitude tests and group discussions",
      "Technical and HR interview rounds",
      "Offer letters and joining guidance",
    ],
  },
  {
    slug: "background-verification",
    title: "Background Verification",
    summary:
      "Thorough screening to catch false tenures, titles, and credentials before you hire.",
    details: [
      "Address, identity, and reference checks",
      "Education and employment history verification",
      "Full compliance with data protection and information-security standards",
      "Zero tolerance to non-compliance",
    ],
  },
  {
    slug: "training",
    title: "Training Programs",
    summary:
      "A knowledge-driven approach that values transparent business practices in every program we deliver.",
    details: [
      "FRM — Fashion Retail Management, delivered with Shoppers Stop Ltd.",
      "HRM — Human Resource Management training",
      "CSM — Channel Sales & Marketing training",
    ],
  },
  {
    slug: "higher-education",
    title: "Higher Education",
    summary: "Full-time MBA and PGDM programs run with academic partners.",
    details: [
      "AICTE/BPUT-approved full-time MBA, with NM Group",
      "AIMA-affiliated PGDM, approved by AICTE / Ministry of HRD",
      "Provisional admission available for candidates just under the 50% graduation cutoff",
      "Admission counselling and placement support",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary: "PinTek Digital helps businesses reach a wider audience online.",
    details: [
      "SEO — on-page and off-page optimization for Google, Yahoo, MSN",
      "SMO — social media growth across Facebook, Twitter, YouTube, Instagram",
      "PPP — Pay Per Performance targeting for measurable results",
    ],
  },
  {
    slug: "compliance",
    title: "Compliance Services",
    summary: "Statutory and labour-law compliance, delivered via our partner LegaSource.",
    details: [
      "Payroll and statutory compliance audits",
      "Labour law advisory",
      "Documentation and reporting support",
    ],
    externalUrl: "http://www.legasource.com",
  },
];

export const serviceLinks = services.map((service) => ({
  href: service.externalUrl ?? `/services/${service.slug}`,
  label: service.title,
  external: Boolean(service.externalUrl),
}));

export const serviceDetails = {
  recruitment: {
    intro:
      "Since 2008, Pinnacle HR has focused on identifying and placing the right talent in the right job. We evaluate candidates thoroughly to ensure their capabilities genuinely align with what the role demands — not just what the résumé claims.",
    subServices: [
      {
        title: "Lateral Hiring",
        body: "Hiring an expert to fill a requirement, typically from another organization, with skill verification and competitive package assessment.",
      },
      {
        title: "Manpower Sourcing",
        body: "Partnering with external organizations to fulfil staffing needs for established companies.",
      },
      {
        title: "Executive Search",
        body: "Specialized recruitment for senior leadership roles — CEO, CFO, CIO, COO, and HRD positions.",
      },
      {
        title: "Head Hunting",
        body: "Targeted recruitment of specific candidates for specialized, hard-to-fill positions.",
      },
      {
        title: "Right Talent, Right Job",
        body: "Our core philosophy: thorough candidate evaluation to ensure alignment between capabilities and job requirements before every placement.",
      },
    ],
  },
  staffing: {
    intro:
      "Customer satisfaction and fulfilling each customer's specific needs has been our motto since inception, serving job seekers at every level with both temporary and permanent placements.",
    specializations: [
      "ERP/CRM systems",
      "Database administration",
      "Quality assurance",
      "Networking roles",
    ],
    image: "/images/hero-collaboration.jpg",
  },
  campusHiring: {
    intro:
      "Pinnacle visits select management and engineering campuses across the state to attract the best talent — identifying qualified professionals before graduation and reducing hiring timelines for our clients.",
    steps: [
      { title: "Pre-Placement Talk", body: "Company information and benefits presented to the batch." },
      { title: "Qualification Screening", body: "Educational qualification and eligibility review." },
      { title: "Written Test", body: "Aptitude assessment for shortlisted candidates." },
      { title: "Group Discussion", body: "Evaluating communication and leadership skills." },
      { title: "Technical Interview", body: "Assessing subject-matter expertise." },
      { title: "Formal Interview", body: "Personality and practical-knowledge review." },
      { title: "Post-Placement Talk", body: "Offer letters and joining guidance for selected candidates." },
    ],
    recruitFor: ["Graduates", "MBA / PGDM", "Diploma / ITI", "BTech / MTech"],
  },
  backgroundVerification: {
    intro:
      "Fraud in recruitment is on the rise, and the job market is no exception. We conduct thorough background screenings and assessments for every application to catch false tenures, titles, and credentials before you hire.",
    whyPinnacle: [
      "Industry-standard screening customized to client needs",
      "A dedicated team manages the complete verification and reporting process",
      "Full compliance with global regulations, information security, confidentiality, and data protection laws",
    ],
    strengths: [
      "Zero tolerance to non-compliance",
      "The state's largest audited screening services provider",
      "Global reach combined with local expertise",
      "Continuous availability for high-profile clients",
    ],
    verificationTypes: [
      { title: "Address Verification", body: "Confirming current and permanent residential address." },
      { title: "Identity Verification", body: "Validating government-issued identity documents." },
      { title: "Education Verification", body: "Confirming degrees, certifications, and institutions attended." },
      { title: "Employment Verification", body: "Validating past tenures, titles, and salary history." },
      { title: "Reference Check", body: "Direct checks with professional references." },
    ],
  },
  training: {
    vision: "To be the preferred training partner for job-oriented, industry-relevant skill development.",
    mission: "Deliver knowledge-driven, transparent training programs that make candidates genuinely employable from day one.",
    focusAreas: [
      "Success Profile Management",
      "Selection & Assessment",
      "Leadership & Workforce Development",
      "Succession & Performance Management",
    ],
    aboutTraining:
      "Pinnacle HR's training division is a knowledge-driven practice that values transparent business practices, offering comprehensive solutions across diverse industries like IT, Telecom, Security, Hospitality, Sales & Marketing, FMCG, and Manufacturing — leveraging experienced facilitators to build effective talent management strategies.",
    programs: [
      {
        code: "FRM",
        title: "Fashion Retail Management",
        body: "Delivered in partnership with Shoppers Stop Ltd.",
        href: "/services/training/frm",
      },
      {
        code: "HRM",
        title: "Human Resource Management",
        body: "Core HR skills for aspiring HR professionals.",
        href: "/services/training/hrm",
      },
      {
        code: "CSM",
        title: "Channel Sales & Marketing",
        body: "Sales and channel management training.",
        href: "/services/training/csm",
      },
      {
        code: "AFM",
        title: "Accounts & Finance Management",
        body: "Foundational accounting and finance skills.",
        href: "/services/training/afm",
      },
      {
        code: "SCM",
        title: "Supply Chain Management",
        body: "Logistics and supply chain operations training.",
        href: "/services/training/scm",
      },
      {
        code: "Corporate Training",
        title: "Corporate Training",
        body: "Custom soft-skills and onboarding programs for client organizations.",
        href: "/services/training/corporate-training",
      },
    ],
  },
  higherEducation: {
    intro:
      "Full-time MBA and PGDM programs run with academic partners, designed for students seeking a direct path from classroom to career.",
    eligibility: [
      "Graduation from a recognized university",
      "Provisional admission available for candidates just under the 50% graduation cutoff",
      "Entrance test / counselling as per program requirements",
    ],
    highlights: [
      "AICTE/BPUT-approved full-time MBA, with NM Group",
      "AIMA-affiliated PGDM, approved by AICTE / Ministry of HRD",
      "Admission counselling and placement support included",
    ],
  },
  digitalMarketing: {
    intro:
      "PinTek Digital, Pinnacle HR's digital marketing arm, helps businesses reach a wider audience online — reducing reliance on traditional physical campaigns and storefronts.",
    cards: [
      {
        title: "SEO",
        body: "On-page and off-page optimization to improve rankings across Google, Yahoo, and MSN, boosting sales through organic traffic.",
      },
      {
        title: "SMO",
        body: "Social media growth across Facebook, Twitter, YouTube, and Instagram to expand reach and globalize operations.",
      },
      {
        title: "PPP",
        body: "Pay Per Performance targeting — pay based on actual results, identifying where your products and posts perform best.",
      },
    ],
  },
};

export const trainingLinks = serviceDetails.training.programs.map((p) => ({
  href: p.href,
  label: p.code,
}));

export const frmDetails = {
  whatIs:
    "The outlook of the Indian consumer has been changing dramatically, with the limelight shifting from low price to convenience, high value, and a finer shopping experience. India is witnessing a \"Retail Boom\" — driven by major players like Walmart and Shoppers Stop — bringing significant employment opportunities and career growth potential.",
  aboutPartner:
    "The first Shoppers Stop outlet was launched in 1991 in a Mumbai suburb with only menswear. By 2010, Shoppers Stop had 51 stores across 22 Indian cities, offering women's and kids wear, home furnishings, books, makeup, and more — operating multiple brands and aiming to open eight new stores a year, which requires a steady pipeline of skilled retail professionals.",
  whoCanJoin: [
    "Batch size varies from 20 to 60 students per institution",
    "Selection involves a written test, followed by a group discussion and interviews with institute and company representatives",
    "Good communication skills, a keen interest in retail, and negotiation and persuasion skills give you an edge",
    "You must be below 25 years of age",
    "Class 10 students and graduates are both eligible",
  ],
  courseContent:
    "The course was designed by IIM-Ahmedabad exclusively for Shoppers Stop. It spans 18 months in total — nine months in the classroom and nine months of training at a Shoppers Stop outlet as a Trainee Fashion Assistant.",
  courseTopics: [
    "Visual Merchandising",
    "Retail Selling Skills",
    "Loyalty Programme",
    "Fashion Product Knowledge",
    "Store Operations",
  ],
  learningExperience:
    "Students spend six months at the institute campus and twelve months on the shop floor of a Shoppers Stop outlet. Classroom instruction covers both the business and creative sides of retail management. To proceed to the next stage, students must score an average of 50% on a quarterly test. On completion, Shoppers Stop extends an appointment letter with a clearly defined Balanced Scorecard.",
  earnWhileYouLearn:
    "Candidates are paid approximately ₹10,000 per month during the training — meaning a candidate earns back roughly 80% of the course fee by the end of the 18 months, making the program financially accessible.",
  firstJob:
    "On successful completion, with a minimum of 50% on the BSC, trainees are extended a certificate of course completion and confirmed as a Fashion Assistant, with starting salaries of around ₹1.8 lakh per annum plus incentives.",
  growthPath:
    "Within six to twelve months, Fashion Assistants can pursue a management position through assessment, entering \"Baby Kangaroo\" — a specialized development program involving varied projects and reassessment. On successful advancement, candidates qualify for the role of Department Manager, with compensation ranging between ₹2.75 and ₹3 lakh, depending on creativity, strategy, and good ideas.",
};

export const hrmDetails = {
  intro:
    "In order to supplement theoretical knowledge with practical inputs, regular HR training exposure is required. Our program uses the case method — an active learning approach that requires participation and involvement from every student.",
  areasCovered: [
    "Manpower planning",
    "Performance appraisal and feedback",
    "Training, education & development",
    "Potential appraisal and promotion",
    "Career development and planning",
    "Compensation and reward",
    "O.D. techniques",
    "Role analysis and development",
    "Quality of work life and welfare",
    "Participative devices",
    "Communication",
    "Counseling",
    "Grievance redressal",
    "Data storage and research",
    "Industrial relations",
  ],
  areaDetails: [
    {
      title: "Manpower Planning",
      body: "Assessment of manpower needs, including forecasting such needs based on an analysis of the company's policies.",
    },
    {
      title: "Performance Appraisal",
      body: "Employees, in collaboration with their managers, periodically appraise performance — with a focus on development rather than pure evaluation.",
    },
    {
      title: "Career Development",
      body: "Helping new employees become aware of the various phases of development, and plan their specific career path together with seniors.",
    },
    {
      title: "Compensation",
      body: "Salary structure is based on job analysis, and salary increases are linked directly to performance.",
    },
    {
      title: "Participative Devices",
      body: "Bi-partite meetings between management and workers, information sharing on business performance, joint surveys on worker morale, task forces addressing absenteeism and indiscipline, collaborative projects, and Quality Circles — small groups of employees who meet to discuss work-related problems.",
    },
  ],
  rolesTable: [
    {
      phase: "Before Class",
      teacher: "Assigns case and often readings",
      student: "Receives case and assignment; prepares individually; may consult colleagues",
    },
    {
      phase: "During Class",
      teacher: "Leads case discussion",
      student: "Participates in discussion",
    },
    {
      phase: "After Class",
      teacher: "Evaluates and records student participation",
      student: "Compares personal analysis with colleagues' analysis",
    },
  ],
  personalityDevelopment:
    "Pinnacle lays special emphasis on personality grooming through presentations, public speaking, mock interviews, aptitude tests, and industry interactions. Instruction incorporates case studies, group discussions and debates, seminars, business games, simulation exercises, and field and industrial visits.",
  placementCell:
    "Pinnacle gives imperative priority to the placement of its students through a dedicated Placement Cell, providing personalized counselling, communication training, resume writing, and mock interviews.",
};

export const csmDetails = {
  intro:
    "Marketing and sales training from Pinnacle can deliver significant business benefits. Training employees in better sales technique, customer service skills, and marketing expertise helps boost sales and improve customer satisfaction.",
  trainingOptions:
    "The program emphasizes practical skill-building through role-play exercises, accompanying employees on sales calls, and thorough debriefing. We offer workshops and seminars, and can bring in sales coaches or marketing consultants when internal resources are limited.",
  programTopics: [
    "Business Marketing",
    "Consumer Marketing",
    "New Product Development and Innovation",
    "Brand Management",
    "Marketing Planning",
  ],
  approach:
    "To ensure that in-company training meets the specific needs of our clients, we first conduct a Needs Assessment. Following the Needs Assessment, we design and develop the training curriculum, and facilitate — or co-facilitate — the programs.",
  results:
    "Our training programs are designed to help clients accomplish their marketing and sales objectives and ultimately improve business performance. The 3-month Executive Training Programme leads to advancement in Sales & Marketing roles.",
  whoCanJoin: {
    profile: [
      "Flexibility and an extroverted nature",
      "Leadership qualities and strong interpersonal skills",
      "Grooming and negotiation abilities",
      "Commitment, without excessive time-consciousness",
    ],
    qualifications: [
      "Diploma or Bachelor's in Hotel Management",
      "Graduation from a reputed institution",
      "MBA or equivalent",
      "No failed subjects in the final academic year",
    ],
  },
};

// AFM, SCM, and Corporate Training have no dedicated pages on the old site
// (dead nav links, no source content) — the copy below is original, written
// to match the style of the other programs rather than sourced from Pinnacle HR.
export const afmDetails = {
  intro:
    "Our Accounts & Finance Management program builds foundational accounting and finance skills for candidates entering finance, accounts, and reporting roles.",
  topics: [
    "Basic accounting principles and bookkeeping",
    "Financial statement preparation",
    "Taxation and statutory compliance basics",
    "Budgeting and cost control",
    "Payroll and reconciliation processes",
  ],
  whoCanJoin: [
    "Commerce graduates or candidates pursuing CA/CMA/CS",
    "Freshers seeking entry into accounts and finance roles",
    "Working professionals looking to formalize practical finance skills",
  ],
};

export const scmDetails = {
  intro:
    "Our Supply Chain Management program covers the fundamentals of logistics, procurement, and warehouse operations for candidates entering supply chain and operations roles.",
  topics: [
    "Procurement and vendor management",
    "Inventory and warehouse management",
    "Logistics and distribution planning",
    "Demand forecasting basics",
    "Supply chain documentation and compliance",
  ],
  whoCanJoin: [
    "Graduates in any discipline interested in operations or logistics",
    "Candidates targeting roles in manufacturing, FMCG, or e-commerce supply chains",
    "Working professionals seeking a structured refresher in SCM fundamentals",
  ],
};

export const corporateTrainingDetails = {
  intro:
    "We design and deliver customized soft-skills, onboarding, and leadership programs for client organizations, tailored to each company's specific team and goals.",
  topics: [
    "New-hire onboarding and induction",
    "Communication and workplace etiquette",
    "Leadership and people-management skills",
    "Team-building and collaboration workshops",
    "Sector-specific upskilling on request",
  ],
  whoCanJoin: [
    "Organizations onboarding new batches of employees",
    "Teams looking to strengthen leadership or communication skills",
    "Companies seeking a training partner for ongoing L&D needs",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/who-we-are", label: "About Us", children: aboutLinks },
  { href: "/services", label: "Services", children: serviceLinks },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    title: "Making The Basics Right",
    body: "Documenting a job description is at the core of every job search. We understand that top professionals need proper statements and directional points about career opportunities.",
  },
  {
    title: "Hiring Isn't Easy, But We Make It So",
    body: "We maintain open communication and facilitate the negotiation process, for we understand what recruitment expectations are really like.",
  },
  {
    title: "With Us, Your Goals Are Not Far",
    body: "Striving to know your organization, competitors, market, and requirements, we make your hiring process many steps easier.",
  },
];

export const whyChooseUs = [
  {
    title: "People Cohesion",
    body: "Creating a culture that encourages team cohesion with intelligent policies.",
  },
  {
    title: "Team Leadership",
    body: "Taking a radically different approach by consultancy services.",
  },
  {
    title: "Team Build Up",
    body: "Building the capacity of our clients to apply learning directly.",
  },
  {
    title: "Strategy",
    body: "Providing superior creativity in employee benefits plan design.",
  },
  {
    title: "Communication",
    body: "Assisting our clients in maximizing the performance of their organization's.",
  },
  {
    title: "Find A Job",
    body: "Recruiting the right people with good expertise and abilities to deliver.",
  },
];

export const team = [
  {
    name: "Santosh Kumar Dash",
    title: "Director",
    tag: "Founder",
    bio: "Founded Pinnacle HR in 2008 and has led its growth into a multi-branch HR consulting firm.",
    image: "/images/team/santosh-kumar-dash.jpg",
  },
  {
    name: "Abinash Tripathy",
    title: "Chief Operating Officer",
    tag: "Leadership",
    bio: "Oversees day-to-day operations, service quality, and delivery across all branches.",
    image: "/images/team/abinash-tripathy.jpg",
  },
];

export const clients = [
  "Aditya Birla Hindalco",
  "Sterlite Tech",
  "ASL Ardent Steel",
  "RSB",
  "India Carbon Limited",
  "Bhaskar Steels Limited",
  "Mesco Steel",
];

export const founderBio =
  "Mr. Santosh Dash, a young man from Bhubaneswar, had a dream not many dared to tread upon in those days. In 2008, that dream became reality when Pinnacle — today a leading Human Resource Consulting firm — saw the light of day. What was once a one-man, one-location, one-product show has grown into a multi-product, professionally managed HR consulting firm, fulfilling the aspirations of freshers, experienced professionals, and recruiting companies alike.";

export const workingProcess = [
  {
    step: "1",
    title: "Research",
    body: "We study your organization, industry, and hiring goals to understand exactly what you need.",
  },
  {
    step: "2",
    title: "Analysis",
    body: "We benchmark the market and shortlist the right sourcing strategy for the role.",
  },
  {
    step: "3",
    title: "Planning",
    body: "We map out a clear hiring timeline and screening process tailored to the position.",
  },
  {
    step: "4",
    title: "Execution",
    body: "We source, screen, and place the right candidate — on time, every time.",
  },
];

export const values = [
  {
    title: "Accountability",
    body: "Complete ownership and responsibility of outcomes.",
  },
  {
    title: "Innovation",
    body: "Embed innovation in organizational processes at all levels.",
  },
  {
    title: "Integrity",
    body: "Being ethical and honest in our behaviour.",
  },
  {
    title: "Respect",
    body: "Care and respect all our associates and clients.",
  },
  {
    title: "Excellence",
    body: "Strive to achieve the highest standards of performance.",
  },
  {
    title: "Teamwork",
    body: "Success is Attitude.",
  },
];

export const mission = [
  "Creating a revolution in recruitment",
  "Building a diverse workplace",
  "Making employment accessible — “We will make you Employable”",
  "Facilitating campus-corporate connections",
  "Optimizing talent screening and onboarding",
  "Maintaining strict compliance standards",
  "Developing management talent",
];

export const vision =
  "To be among the top solution providers in the field of Recruitment, Outsourcing, Management Consulting, and Service Infrastructure.";

export const timeline = [
  { year: "2008", body: `Incorporated by ${"Mr. Santosh Kumar Dash"} in Bhubaneswar; began recruitment services.` },
  { year: "2010", body: "Opened the Kolkata branch and built a client base of 91 companies, including 21 MNCs." },
  { year: "2012", body: "Opened the Bangalore branch and organized the Talent Exchange job fair with ISTD — 23 companies, 4,000+ candidates." },
  { year: "2013", body: "Partnered with Shoppers Stop Ltd. to deliver the Fashion Retail Management program, generating 306 offers." },
  { year: "2015", body: "Delivered 1,500+ offers through 63 campus recruitment drives." },
  { year: "2016", body: "Partnered with NM Group to launch an AICTE/BPUT-approved full-time MBA program." },
  { year: "2019", body: "Entered compliance services and digital marketing." },
];

export const awards = [
  "ISO 9001:2015 Certified",
  "NASSCOM Member",
  "AIMA Authorized Coordination Centre",
  "Featured in SiliconIndia Magazine",
];

export const csr = {
  name: "KHUSHI — Spread Happinez",
  tagline: "Doing good is good business.",
  body: "Our CSR division runs programs centred on social development, women's empowerment, and road safety initiatives across the communities we operate in.",
};

export const csrInitiatives = [
  {
    title: "Social Development",
    body: "Skill-development drives and career guidance workshops that improve employability for first-time job seekers in the communities we serve.",
    image: "/images/csr-social-development.jpg",
  },
  {
    title: "Women's Empowerment",
    body: "Programs supporting women re-entering the workforce and building sustainable, long-term careers.",
    image: "/images/csr-women-empowerment.jpg",
  },
  {
    title: "Road Safety",
    body: "Awareness campaigns promoting safer road habits across the communities where we operate.",
    image: "/images/csr-road-safety.jpg",
  },
];

// Placeholder gallery — swap with real photos from Pinnacle HR's CSR activities.
export const csrGallery = [
  { src: "/images/csr-social-development.jpg", alt: "Social development initiative" },
  { src: "/images/csr-women-empowerment.jpg", alt: "Women's empowerment initiative" },
  { src: "/images/csr-road-safety.jpg", alt: "Road safety awareness initiative" },
  { src: "/images/about-team.jpg", alt: "Pinnacle HR team at work" },
  { src: "/images/hero-collaboration.jpg", alt: "Team collaboration" },
  { src: "/images/services-graduation.jpg", alt: "Campus graduation" },
];

// Placeholder quotes — the old site did not publish attributed client
// testimonials, so these are generic and unattributed to any real company.
// Replace with real client feedback when available.
export const testimonials = [
  {
    quote:
      "Pinnacle HR filled three critical plant roles for us in under two weeks. Documentation was spotless and communication never went quiet.",
    name: "HR Head",
    role: "Manufacturing Sector Client",
  },
  {
    quote:
      "Their campus hiring drive brought us sharper graduate talent than we expected, and the whole process felt organized from day one.",
    name: "Talent Acquisition Lead",
    role: "IT Services Client",
  },
  {
    quote:
      "Background verification turnaround is fast and thorough — it's one less thing our internal team has to worry about.",
    name: "Compliance Manager",
    role: "BFSI Client",
  },
];

export const industries = [
  "Building Materials",
  "FMCG & Electronics",
  "Engineering",
  "Retail & E-commerce",
  "IT & ITES",
  "BFSI",
];

export const hiringCategories = [
  "Engineering & IT",
  "Sales & Retail",
  "Finance & BFSI",
  "HR & Operations",
  "FMCG & Manufacturing",
  "Campus / Entry-Level",
];
