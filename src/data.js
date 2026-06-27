import elasticLogo from './assets/logos/elastic.png'
import netcompanyLogo from './assets/logos/netcompany.png'
import linqLogo from './assets/logos/linq.png'

export const personal = {
  name: 'Yiannis Nikolopoulos',
  title: 'Software Engineer',
  tagline:
    'Full-stack engineer building observability tools, AI-driven automation, and scalable web experiences.',
  location: 'Athens, Greece',
  email: 'ioannis.nikolopoulos@yahoo.com',
  phone: '+30 694 482 7369',
  linkedin: 'https://www.linkedin.com/in/ioannis-nikolopoulos/',
  github: 'https://github.com/johnnikolo',
  resume: 'https://drive.google.com/file/d/1_tjlBQ-GaoIYsZA7O9YIo26tQEhQm-Eo/view?usp=sharing',
  portfolio: 'https://johnnikolo.github.io/portfolio/',
}

export const experience = [
  {
    id: 'elastic',
    company: 'Elastic',
    role: 'Software Engineer',
    period: '09/2025 – Present',
    location: 'Athens, Greece',
    type: 'Full-stack',
    color: '#00bfb3',
    logo: elasticLogo,
    description: 'Full-stack Software Engineer on the Actionable Observability team, owning Synthetics, SLOs, and Rules and Alerts, with a growing focus on AI-driven tooling and agentic workflows.',
    bullets: [
      'Shipped embeddable schema registration for Synthetics and implemented global ingest pipelines for SLOs, leading cross-team collaboration for the majority of these initiatives.',
      'Served as a go-to point of support across Synthetics, SLOs, and Rules and Alerts, triaging and resolving customer-reported issues and bugs.',
      'Actively contributed to a full revamp of the alerting framework, spanning the core engine, rule management, rule authoring, and the overall alerting experience.',
      "Built an agentic rule authoring experience on top of Elastic's Agent Builder, letting users create and configure rules conversationally through a chat-based, AI agent-driven interface.",
      'Organized and led the migration of FTR tests to Scout (Playwright), improving CI run times and reducing flakiness, and presented best practices to the wider team.',
      'Built AI-driven automation skills to streamline engineering workflows, including one that investigates and resolves flaky tests end-to-end and others that check code against team best practices.',
    ],
  },
  {
    id: 'netcompany',
    company: 'Netcompany',
    role: 'Software Engineer',
    period: '03/2024 – 09/2025',
    location: 'Athens, Greece',
    type: 'Frontend',
    color: '#3b82f6',
    logo: netcompanyLogo,
    description: 'Frontend-focused Software Engineer on the Vodafone Travel eSIM project, delivering scalable web features within a micro-frontend architecture.',
    bullets: [
      "Led design and development of Vodafone's component library from scratch, translating Figma designs into a production React.js library, building components personally and reviewing the work of engineers contributing to it.",
      "Replaced Vodafone's legacy CMS with Contentful (GraphQL) and used it to ship key features, including guest checkout, homepage product selection, and region-based UX across Europe, Asia, Africa, and North America, within a ~12-person engineering team.",
      'Onboarded and mentored 5 new team members, ensuring smooth handover of technical knowledge and alignment with project architecture and best practices.',
    ],
  },
  {
    id: 'linq',
    company: 'Linq (former Collegelink)',
    role: 'Software Engineer',
    period: '01/2022 – 12/2023',
    location: 'Athens, Greece',
    type: 'Full-stack',
    color: '#8b5cf6',
    logo: linqLogo,
    description: 'Full-stack Software Engineer working across frontend and backend, from UI features to PHP/MySQL-based systems.',
    bullets: [
      'Took ownership of full-stack features end-to-end within a 5-engineer team, including a full revamp of the company\'s recruiting platform and an internal ATS-style hiring tool built from scratch.',
      'Used React.js, Vanilla JS, jQuery, HTML5, CSS/SASS, PHP (5-8), and MySQL across these projects, including WordPress-based builds.',
      'Wrote end-to-end tests for new features using Cypress.js.',
      'Worked in Agile development cycles using Jira and Git, documenting new features and tracking development status.',
    ],
  },
]

export const skills = {
  'AI Tools': [
    'Cursor',
    'Claude',
    'GitHub Copilot',
    'Elastic Agent Builder',
    'Agentic Workflows',
  ],
  Frontend: [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'React Hook Form',
    'HTML5',
    'CSS3 / SCSS',
    'Styled Components',
    'Responsive Design',
    'Accessibility (a11y)',
  ],
  'Kibana / Elastic': [
    'Kibana Plugin Architecture',
    'Saved Objects',
    'Embeddables',
    'ES|QL',
    'Query DSL',
    'Elasticsearch',
    'Elastic UI (EUI)',
    'Dashboard Framework',
  ],
  'Backend / Database': [
    'Node.js',
    'PHP',
    'MySQL',
    'REST APIs',
    'GraphQL',
  ],
  'Testing & Tools': [
    'Jest',
    'React Testing Library',
    'Cypress',
    'Scout (Playwright)',
    'Git',
    'Jira',
    'Agile / Scrum',
    'Contentful',
  ],
}

export const education = {
  institution: 'Athens University of Economics and Business',
  degree: 'B.Sc., Management Science and Technology',
  period: '10/2016 – 01/2021',
  location: 'Athens, Greece',
  note: 'Completed 100% of degree while working part-time as a sales assistant at Inditex.',
  thesis: {
    title: 'Gamification Applications in Human Resource Management',
    description:
      'Explored gamification techniques in HR processes and their impact on employee engagement, motivation, and recruitment.',
    score: '10 / 10',
    note: 'Selected as a model of academic excellence and invited to present to the following thesis cohort.',
  },
}

export const languages = [
  { lang: 'Greek', level: 'Native' },
  { lang: 'English', level: 'Bilingual' },
  { lang: 'French', level: 'Intermediate' },
]
