import {
  FlaskConical, Brain, Dna, Microscope, Factory,
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
    title: 'LabBench',
    kind: 'Electronic lab notebook',
    device: 'desktop',
    description: 'A Benchling-style ELN for molecular biology. Rich-text notebook entries with sign-and-lock e-signatures and version history, a sample registry with auto-generated IDs, circular plasmid maps with restriction-site and ORF tools, 96/384-well plate designers, and reusable protocols.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'TipTap', 'Supabase'],
    repo: null,
    live: null,
    screenshots: [
      { src: 'projects/labbench/01-dashboard.webp', alt: 'LabBench dashboard with recent activity and projects' },
      { src: 'projects/labbench/03-plasmid-map.webp', alt: 'Circular plasmid map with annotated features' },
      { src: 'projects/labbench/02-entry.webp', alt: 'Notebook entry with status, tags, and sign-and-lock' },
      { src: 'projects/labbench/04-plate.webp', alt: '96-well qPCR plate map with legend' },
      { src: 'projects/labbench/05-inventory.webp', alt: 'Inventory registry with freezer locations' },
      { src: 'projects/labbench/06-protocols.webp', alt: 'Plasmid miniprep protocol with timed steps' },
    ],
  },
  {
    title: 'SmartSOP',
    kind: 'GMP document platform',
    device: 'desktop',
    description: 'Builds GMP batch records, validation protocols, SOPs, and deviation forms with AI-filled sections and formatted Word export. Protocols run step by step with pass/fail/flag records, plus deviations, training, asset QR tags, and an audit trail.',
    tags: ['Angular', 'Flask', 'Ollama', 'python-docx'],
    repo: 'https://github.com/avaarm/smartsop',
    live: 'https://avaarm.github.io/smartsop/',
    screenshots: [
      { src: 'projects/smartsop/01-document-builder.webp', alt: 'GMP document builder template picker' },
      { src: 'projects/smartsop/04-run-record.webp', alt: 'Protocol run record with step outcomes' },
      { src: 'projects/smartsop/02-templates.webp', alt: 'Regulatory protocol templates' },
      { src: 'projects/smartsop/03-protocol-editor.webp', alt: 'Protocol editor with safety blocks' },
    ],
  },
  {
    title: 'Birdy: Dream Life',
    kind: 'iOS app',
    device: 'phone',
    description: 'A calm 30-day self-development practice: affirmations with mirror work, journaling, guided meditation, mood tracking, and Luna, an AI companion. Each practice notes the psychology research behind it.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Claude API'],
    repo: null,
    live: null,
    screenshots: [
      { src: 'projects/birdy/03-mood-calendar.webp', alt: 'Mood calendar' },
      { src: 'projects/birdy/04-meditation.webp', alt: 'Meditation options' },
      { src: 'projects/birdy/05-meditation-timer.webp', alt: 'Meditation timer' },
      { src: 'projects/birdy/06-luna-chat.webp', alt: 'Chat with Luna' },
    ],
  },
  {
    title: 'ETRA',
    kind: 'Client platform',
    device: 'desktop',
    description: 'Regulatory and clinical development software for cell and gene therapy. Guidance-grounded AI search, a citation-aware document studio for IND and CMC sections, and quality, QC, manufacturing, and ELN workspaces.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Auth0', 'Stripe'],
    repo: null,
    live: null,
    screenshots: [
      { src: 'projects/etra/01-overview.webp', alt: 'Program overview with prioritized action items' },
      { src: 'projects/etra/02-quality-control.webp', alt: 'Quality control hotlist and release queue' },
      { src: 'projects/etra/03-quality-assurance.webp', alt: 'Quality assurance dashboard' },
      { src: 'projects/etra/04-eln.webp', alt: 'Electronic lab notebook entries' },
      { src: 'projects/etra/05-landing.webp', alt: 'ETRA landing page' },
    ],
  },
  {
    title: 'SmartCloset',
    kind: 'Mobile app',
    description: 'Wardrobe manager with outfit suggestions, wear tracking, cost-per-wear analytics, and a wishlist budget.',
    tags: ['React Native', 'TypeScript', 'Supabase'],
    repo: 'https://github.com/avaarm/smartcloset',
    live: null,
  },
]

export const stats = [
  { value: '10+', label: 'years in cell and gene therapy' },
  { value: '15', label: 'IND submissions authored' },
  { value: '$3.4M', label: 'innovation funding secured' },
  { value: '15+', label: 'person cross-functional team' },
]

export const experience = [
  {
    role: 'PD Scientist',
    company: 'Fred Hutchinson Cancer Center',
    location: 'Seattle, WA',
    period: 'Jan 2020 – Present',
    highlights: [
      'Led development and IND submissions for 15 clinical trial products (CAR-T, TCR); authored CMC and analytical sections and drafted responses to FDA information requests',
      'Direct autologous and allogeneic CAR-T, TCR, NK, B-cell, and large-scale HSC programs with multi-million-dollar budget oversight',
      'Integrated Xuri, Cocoon, and Prodigy closed-system platforms; built 12+ color flow panels with FACS, cytokine, and cytotoxicity readouts',
      'Built the internal automation stack (Power BI, SQL, Power Automate, n8n, Smartsheet, WMS) that modernized CDMO operations',
      'Secured $3.4M in competitive innovation funding; recruited and mentored a team of 15+ across PD, MSAT, manufacturing, engineering, and QC',
    ],
  },
  {
    role: 'Senior Teaching Assistant, Full-Stack Web Development',
    company: 'University of Washington Professional & Continuing Education',
    location: 'Remote',
    period: 'Nov 2020 – Oct 2023',
    highlights: [
      'Taught JavaScript, React, Node.js, Express, MongoDB, and REST APIs to bootcamp cohorts over three years',
      'Ran code reviews, office hours, and pair-programming sessions, and helped improve the curriculum',
    ],
  },
  {
    role: 'Research Technician, Gene Therapy',
    company: 'Poseida Therapeutics',
    location: 'San Diego, CA',
    period: 'Aug 2016 – Sep 2019',
    highlights: [
      'Produced and sequenced lentiviral and piggyBac transposon vectors for gene-modified cell therapies',
      'Drove comparative transduction and transfection studies for non-viral CAR-T and designed high-throughput screening assays',
      'Led AAV vector study renewal in collaboration with Stanford University',
    ],
  },
  {
    role: 'Research Intern, Immunology',
    company: 'The Scripps Research Institute',
    location: 'San Diego, CA',
    period: 'Jun 2015 – Jun 2016',
    highlights: [
      'Ran in vivo mouse work, multi-parameter flow cytometry, and FACS sorting',
      'Trained graduate students on PCR, sequencing, and flow cytometry',
    ],
  },
]

export const community = [
  {
    role: 'Founder',
    org: 'Navak Academy',
    period: '2022 – Present',
    description: 'Consulting company serving the Armenian community. Projects include translating the Django Girls tutorial into Armenian and building a searchable directory of Armenian-owned businesses.',
    link: 'https://navakacademy.com',
  },
  {
    role: 'Director, Strategy & Operations',
    org: 'Friends of Fronteras Saludables',
    period: '2018 – 2023',
    description: 'Directed a 501(c)(3) funding medical equipment and public-health programs across the US–Mexico border region; secured grants from $10K to $1M.',
    link: null,
  },
]

export const techSkills = [
  { category: 'Frontend', icon: Globe, items: ['React', 'React Native', 'Angular', 'Expo', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', icon: Database, items: ['Python', 'Node.js', 'Express', 'Flask', 'Supabase', 'MongoDB', 'MySQL', 'REST APIs'] },
  { category: 'AI / Data', icon: Brain, items: ['Claude API', 'Ollama', 'phi-2 fine-tuning', 'DNABERT', 'pandas', 'scikit-learn', 'SQL', 'Power BI'] },
  { category: 'Tools', icon: GitBranch, items: ['Git', 'Docker', 'CI/CD', 'GitHub Actions', 'n8n', 'Power Automate'] },
]

export const biotechSkills = [
  { category: 'Cell Therapy', icon: FlaskConical, items: ['CAR-T / TCR / NK / B-cell', 'Large-scale HSC', 'Autologous & allogeneic', 'MSAT, PD, tech transfer', 'Comparability & validation'] },
  { category: 'Gene Modification', icon: Dna, items: ['Lentiviral & AAV vectors', 'CRISPR Cas9/Cas12a', 'piggyBac transposon', 'Base editing', 'Electroporation (MaxCyte, GTx, Neon, Nucleofector)'] },
  { category: 'Immunology', icon: Microscope, items: ['12+ color flow cytometry', 'FACS sorting', 'MSD / ELISA', 'Cytotoxicity assays', 'qPCR'] },
  { category: 'Manufacturing', icon: Factory, items: ['Xuri', 'Cocoon', 'Prodigy', 'LOVO', 'Scale-up & scale-out'] },
  { category: 'Regulatory', icon: FileText, items: ['IND submissions (15)', 'CMC & analytical sections', 'FDA information requests', 'ICH GCP', 'FACT & FDA audit readiness'] },
  { category: 'Leadership', icon: Users, items: ['CDMO program management', '$M budgets', 'Team of 15+', 'Mentorship'] },
]

export const publications = [
  {
    title: 'Sequential Development of a Non-Viral Gene Editing and Manufacturing Platform for Primary Human NK Cells',
    venue: 'Binaytara National Summit on Hematologic Cancers, Oct 2026 · E. Donnall Thomas Symposium, Sep 2026',
    type: 'Poster',
    role: 'Co-First Author',
  },
  {
    title: 'Manufacturing Optimization of TCR-Engineered T Cells Across Six Development Programs',
    venue: 'ISCT Annual Meeting, Dublin, 2026',
    type: 'Poster',
    role: 'First Author',
  },
  {
    title: 'Optimizing a Single-Vessel CAR-T Production Platform: G-Rex Activation & Transduction Reagent Optimization',
    venue: 'Fred Hutch AMT Symposium, 2026',
    type: 'Talk',
    role: 'Co-Author',
  },
  {
    title: 'Evaluation of Prodigy for Automated, Closed-System T Cell Manufacturing',
    venue: 'Fred Hutch AMT Symposium, 2025',
    type: 'Talk',
    role: 'Speaker, First Author',
  },
  {
    title: 'Phase I Study of FH FOLR1 CAR T for Pediatric Patients with FOLR1+/CBFA2T3::GLIS2+ Relapsed or Refractory AML',
    venue: 'Blood, Volume 146 (Supplement 1), 2025',
    type: 'Abstract',
    role: 'Co-Author',
  },
  {
    title: 'Efficient Cell Therapy Manufacturing: Comparative Analysis of LOVO Cell Processing System and Manual Centrifugation',
    venue: 'ISCT Regional Meeting, 2023',
    type: 'Oral',
    role: 'Co-Author',
  },
  {
    title: 'Non-Viral Engineered Human CAR-T Cells for Safe and Specific Stem Cell Transplant Conditioning',
    venue: 'ASH Annual Meeting (oral) · ASGCT Annual Meeting, Chicago, 2018 (poster)',
    type: 'Oral & Poster',
    role: 'Co-Author',
  },
  {
    title: 'High-Efficiency Cell Engineering Using Scalable Electroporation Platforms',
    venue: 'BioFactorial, University of British Columbia (with MaxCyte)',
    type: 'Seminar',
    role: 'Co-Author',
  },
]
