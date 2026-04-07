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
    title: 'SmartSOP',
    description: 'AI-powered document generation tool for Standard Operating Procedures and Batch Records. Uses a fine-tunable phi-2 model to generate professionally formatted documents for biotech manufacturing.',
    tags: ['Angular', 'Python', 'AI/ML', 'phi-2'],
    color: 'accent',
    repo: 'https://github.com/avaarm/smartsop',
    live: null,
  },
  {
    title: 'SmartCloset',
    description: 'Mobile wardrobe management app with outfit suggestions, wear tracking, cost-per-wear analytics, and wishlist management. Built for mindful fashion choices.',
    tags: ['React Native', 'TypeScript', 'Mobile', 'Analytics'],
    color: 'rose',
    repo: 'https://github.com/avaarm/smartcloset',
    live: null,
  },
  {
    title: 'AI Sequence Builder',
    description: 'DNA/protein sequence optimization platform leveraging DNABERT for intelligent sequence design. Optimizes codon usage, GC content, expression levels, and stability.',
    tags: ['Python', 'Streamlit', 'DNABERT', 'ML'],
    color: 'green',
    repo: 'https://github.com/avaarm/seqhelper',
    live: null,
  },
  {
    title: 'ETRA Consulting',
    description: 'Full-stack biotech consulting platform with project management, FDA guidelines integration, Auth0 authentication, and client engagement portal.',
    tags: ['React', 'Node.js', 'Auth0', 'MongoDB'],
    color: 'blue',
    repo: 'https://github.com/avaarm/etraversion2.1',
    live: null,
  },
  {
    title: 'Dream Life App',
    description: 'Mobile self-development app featuring guided journaling, categorized affirmations, 30-day habit tracking, meditation timer, and progress visualization.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    color: 'amber',
    repo: 'https://github.com/avaarm/birdy',
    live: null,
  },
  {
    title: 'Navak Academy',
    description: 'Web platform for Navak Academy, a program teaching coding skills to young Armenian women from underserved backgrounds. Built to increase access to tech education.',
    tags: ['React', 'JavaScript', 'Education'],
    color: 'accent',
    repo: 'https://github.com/avaarm/navak-academy',
    live: 'https://navakacademy.com',
  },
]

export const experience = [
  {
    role: 'Interim Manager / PD Scientist',
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
  { category: 'Frontend', icon: Globe, items: ['React', 'Angular', 'React Native', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Expo'] },
  { category: 'Backend', icon: Database, items: ['Python', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Flask', 'REST APIs'] },
  { category: 'AI / ML', icon: Brain, items: ['DNABERT', 'phi-2', 'LLM Fine-tuning', 'Streamlit', 'n8n', 'Power Automate'] },
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
