import {
  FlaskConical, Brain, Dna, Microscope,
  Database, Globe, GitBranch,
  FileText, Users
} from 'lucide-react'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    title: 'Birdy: Dream Life',
    kind: 'iOS app',
    featured: true,
    description: 'A calm 30-day self-development practice: affirmations with mirror work, journaling, guided meditation, mood tracking, and Luna, an AI companion. Each practice notes the psychology research behind it.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Claude API'],
    repo: null,
    live: null,
    screenshots: [
      { src: 'projects/birdy/01-home.webp', alt: 'Home screen with today\'s lesson and mood check-in' },
      { src: 'projects/birdy/02-daily-ritual.webp', alt: 'Daily ritual' },
      { src: 'projects/birdy/03-mood-calendar.webp', alt: 'Mood calendar' },
      { src: 'projects/birdy/04-meditation.webp', alt: 'Meditation options' },
      { src: 'projects/birdy/05-meditation-timer.webp', alt: 'Meditation timer' },
      { src: 'projects/birdy/06-luna-chat.webp', alt: 'Chat with Luna' },
    ],
  },
  {
    title: 'SmartSOP',
    kind: 'Web app',
    description: 'GMP document builder for SOPs, batch records, validation protocols, and deviation forms. AI fills in each section, pulls methods from published papers, and exports formatted Word documents.',
    tags: ['Angular', 'Flask', 'Ollama', 'python-docx'],
    repo: 'https://github.com/avaarm/smartsop',
    live: 'https://avaarm.github.io/smartsop/',
  },
  {
    title: 'SmartCloset',
    kind: 'Mobile app',
    description: 'Wardrobe manager with outfit suggestions, wear tracking, cost-per-wear analytics, and a wishlist.',
    tags: ['React Native', 'TypeScript', 'Analytics'],
    repo: 'https://github.com/avaarm/smartcloset',
    live: null,
  },
  {
    title: 'ETRA Consulting',
    kind: 'Web platform',
    description: 'Biotech consulting platform with project management, FDA guidance lookup, Auth0 sign-in, and a client portal.',
    tags: ['React', 'Node.js', 'Auth0', 'MongoDB'],
    repo: 'https://github.com/avaarm/etraversion2.1',
    live: null,
  },
]

export const stats = [
  { value: '10+', label: 'years in cell therapy' },
  { value: '15+', label: 'IND-enabling programs' },
  { value: '$3.4M', label: 'innovation grants secured' },
  { value: '40%', label: 'ops cost cut through automation' },
]

export const experience = [
  {
    role: 'PD Scientist',
    company: 'Fred Hutchinson Cancer Research Center',
    location: 'Seattle, WA',
    period: '2020 - Present',
    highlights: [
      'Direct a portfolio of CAR-T, TCR, and B-cell client programs with multi-million-dollar budget oversight',
      'Architected end-to-end automation solutions (WMS, Smartsheet, Power Automate) reducing operational costs by 40%',
      'Secured $3.4M in competitive innovation grants for cell therapy manufacturing',
      'Recruited and developed a cross-functional team of 15+ across PD, manufacturing, engineering, and QC',
      'Led 15+ IND-enabling process characterization and technology transfer programs',
    ],
  },
  {
    role: 'Research Technician - Gene Therapy',
    company: 'Poseida Therapeutics, Inc.',
    location: 'San Diego, CA',
    period: '2016 - 2019',
    highlights: [
      'Managed preclinical-to-clinical transitions for gene-modified cell therapies',
      'Led AAV vector study renewal in collaboration with Stanford University',
      'Designed high-throughput screening assays increasing development efficiency',
    ],
  },
  {
    role: 'Research Intern - Immunology',
    company: 'The Scripps Research Institute',
    location: 'San Diego, CA',
    period: '2015 - 2016',
    highlights: [
      'Executed mouse IV injections, multipanel flow cytometry, and FACS sorting',
      'Trained graduate students in PCR, sequencing, and flow cytometry',
    ],
  },
  {
    role: 'Director',
    company: 'Friends of Fronteras Saludables',
    location: 'San Diego, CA',
    period: '2018 - 2023',
    highlights: [
      'Secured targeted grants ($10K-$1M) to fund critical medical equipment',
      'Directed strategic planning and end-to-end project execution for clinic sustainability',
    ],
  },
]

export const techSkills = [
  { category: 'Frontend', icon: Globe, items: ['React', 'Angular', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', icon: Database, items: ['Python', 'Flask', 'Node.js', 'Express', 'Supabase', 'MongoDB', 'MySQL'] },
  { category: 'AI / ML', icon: Brain, items: ['Claude API', 'Ollama', 'DNABERT', 'phi-2', 'LLM Fine-tuning', 'n8n', 'Power Automate'] },
  { category: 'DevOps & Tools', icon: GitBranch, items: ['Git', 'GitHub Actions', 'Vite', 'Docker', 'Heroku', 'Figma', 'Jira'] },
]

export const biotechSkills = [
  { category: 'Cell Therapy', icon: FlaskConical, items: ['CAR-T / TCR / NK / B Cell', 'Autologous & Allogeneic', 'Process Development & MSAT', 'Technology Transfer', 'Scale-Up & Scale-Out'] },
  { category: 'Gene Modification', icon: Dna, items: ['Lentiviral Vectors', 'CRISPR Cas9/Cas12a', 'Transposon Systems', 'Base Editing', 'Electroporation'] },
  { category: 'Laboratory', icon: Microscope, items: ['Multi-panel Flow Cytometry', 'FACS Sorting', 'PCR & Sequencing', 'CFU Assays', 'Cell Culture (GMP)'] },
  { category: 'Leadership', icon: Users, items: ['CDMO Program Management', 'IND Submissions', 'Budget Oversight ($M)', 'Team Building (15+)', 'GMP/FACT Audit Readiness'] },
]

export const publications = [
  {
    title: 'High-Efficiency Cell Engineering Using Scalable Electroporation Platforms',
    venue: 'BioFactorial, University of British Columbia (with MaxCyte)',
    type: 'Seminar',
    role: 'Co-Author',
  },
  {
    title: 'Phase I Study of FH FOLR1 CAR T for Pediatric Patients with FOLR1+/CBFA2T3::GLIS2+ Relapsed or Refractory AML',
    venue: 'Blood, Volume 146 (Supplement 1), 2025',
    type: 'Poster Abstract',
    role: 'Co-Author',
  },
  {
    title: 'Efficient Cell Therapy Manufacturing: Comparative Analysis of LOVO Cell Processing System and Manual Centrifugation',
    venue: 'ISCT Regional Meeting, 2023',
    type: 'Oral Abstract',
    role: 'Co-Author',
  },
  {
    title: 'Non-Viral Engineered Human CAR-T Cells for Safe and Specific Stem Cell Transplant Conditioning',
    venue: 'ASH Annual Meeting',
    type: 'Oral Abstract',
    role: 'Co-Author',
  },
]
