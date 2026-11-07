// Every claim here must trace to docs/evidence.md.

export const links = {
  email: 'mailto:ibukun46@gmail.com',
  emailLabel: 'ibukun46@gmail.com',
  discuss: 'mailto:ibukun46@gmail.com?subject=Your%20AgricOS%20and%20systems%20work',
  cv: '/Ibukunoluwa-Oyeniyi-CV.pdf',
  linkedin: 'https://www.linkedin.com/in/ibukunoluwa-oyeniyi-86b202159/',
  github: 'https://github.com/ibkay998',
  leetcode: 'https://leetcode.com/ibkay998',
  repo: 'https://github.com/ibkay998/My-Portfolio',
  council: 'https://github.com/ibkay998/My-Portfolio/tree/main/docs/council',
  evidence: 'https://github.com/ibkay998/My-Portfolio/blob/main/docs/evidence.md',
}

export const heroProofs = [
  {
    href: '#latency',
    value: '13.7 s → 45.5 ms',
    label: 'Median latency after a query fix · controlled 20,000-record benchmark',
  },
  {
    href: '#afterquery',
    value: '0 rejections in one cycle',
    label: 'AfterQuery Project Gold: 14 tasks, 3 approved, 11 in human review',
  },
  {
    href: '#career',
    value: 'Developer of the Year',
    label: 'Intern to Developer II at Babban Gona in 2½ years',
  },
]

export const engineeringFacts = [
  { value: '79 → 0', label: 'ESLint warning backlog, plus changed-line quality gates and coverage checks' },
  { value: '10s of millions', label: 'Records kept in sync through Odoo integrations' },
  { value: '20+', label: 'Projects and workstreams delivered for a platform used by 10,000+ people' },
  { value: '5 services', label: 'Cross-service work across Config, Entity, Workflow, Inventory and IAM: identity, permission and mobile-sync failures' },
]

export const exportSteps = [
  { title: 'Frontend', detail: 'React integration' },
  { title: 'API', detail: 'Tenant-scoped permission check' },
  { title: 'Job queue', detail: 'PostgreSQL-backed async job' },
  { title: 'Worker', detail: 'Recoverable worker' },
  { title: 'Stream', detail: 'Streamed CSV generation' },
  { title: 'Download', detail: 'Private download' },
]

export type LedgerRow = {
  name: string
  type: string
  total: number
  approved: number
  review: number
  glyph: 'square' | 'shield'
  headline: string
  detail: string
  legend: string[]
}

export const afterQuery: LedgerRow[] = [
  {
    name: 'Project Gold',
    type: 'Repository task design',
    total: 14,
    approved: 3,
    review: 11,
    glyph: 'square',
    headline: '14 tasks · 0 rejections in the cycle',
    detail:
      'Production-shaped coding tasks built from real repository histories, with robust test contracts, refined using model trajectories for fairness and signal. In one documented delivery cycle: 3 approved, 11 advanced to human review, none rejected.',
    legend: ['Approved', 'In human review'],
  },
  {
    name: 'Project Pluto',
    type: 'Benchmark authoring',
    total: 18,
    approved: 0,
    review: 18,
    glyph: 'square',
    headline: '18 packages Ready for Review',
    detail:
      'Terminal-agent engineering tasks in Python, Rust and Java that pair realistic bugs with deterministic integration suites, oracle solutions kept separate from no-op baselines, fair specifications and multi-model difficulty probes.',
    legend: ['Ready for Review (not yet approved)'],
  },
  {
    name: 'Project Fenrir',
    type: 'Systems security research',
    total: 3,
    approved: 3,
    review: 0,
    glyph: 'shield',
    headline: '3 approved paid findings',
    detail:
      'Found, reproduced and repaired memory-safety bugs using sanitizer-backed fuzzing, including a cross-call heap use-after-free in a Rust archive pipeline.',
    legend: ['Approved paid finding'],
  },
]

export const failureBoundary = ['Environment', 'Contract', 'Tests', 'Verifier', 'Model reasoning', 'Infrastructure']

export const aiPractice = [
  {
    kicker: 'At work',
    title: 'I lead AI adoption across engineering teams',
    body: 'At Babban Gona I help engineers pick the right tool for implementation, debugging, testing and review, and I build the shared repository context and validation steps that make AI-written code checkable before it merges.',
  },
  {
    kicker: 'In product',
    title: 'I build an AI product',
    body: 'Master Anything turns a learner’s goal, experience and available time into a personal roadmap, curriculum and assessments. I built it end to end as founder and product engineer.',
    href: 'https://masteranything.app',
    cta: 'Visit masteranything.app',
  },
  {
    kicker: 'On this page',
    title: 'This site is reviewed by a model council',
    body: 'Claude Opus, GPT (Codex) and Gemini score each round of this portfolio against one shared rubric, and I fix what they find. The scorecard is below; the full critiques are in the repository.',
    href: links.council,
    cta: 'Read the council log',
  },
]

export type CareerStep = { date: string; role: string; org: string; note?: string; star?: boolean }

export const careerSteps: CareerStep[] = [
  { date: 'Apr 2022', role: 'Civil Engineer', org: 'Torek Engineering', note: 'B.Sc. Civil Engineering, University of Lagos. Did the HNG software internship on the side.' },
  { date: 'Jan 2023', role: 'Technical Accelerator intern', org: 'Babban Gona', note: 'Switched careers into software full time.' },
  { date: 'Aug 2023', role: 'Associate Developer', org: 'Babban Gona' },
  { date: 'Year 2', role: 'Developer of the Year', org: 'Babban Gona', note: 'For delivery impact, engineering quality and consistent ownership across critical products.', star: true },
  { date: 'Feb 2025', role: 'Developer I', org: 'Babban Gona' },
  { date: 'Jul 2025', role: 'Developer II', org: 'Babban Gona', note: 'Today: lead a frontend team of about five engineers (three years of leadership responsibility) and own the AgricOS configuration platform.' },
]

export const sideLanes = [
  { date: '2018', label: 'React intern, Tuteria' },
  { date: '2021', label: 'Backend intern, Side Hustle' },
  { date: '2022', label: 'Full-stack intern, HNG' },
  { date: '2023 →', label: 'Mobile & full-stack, PennyTots' },
  { date: '2026 →', label: 'AI evaluation expert, AfterQuery' },
  { date: '2026 →', label: 'Founder, Master Anything' },
]

export type Product = {
  name: string
  kicker: string
  description: string
  role: string
  stack: string[]
  status: string
  href?: string
  image?: { src: string; width: number; height: number; alt: string }
}

export const products: Product[] = [
  {
    name: 'Master Anything',
    kicker: 'A personal curriculum for anything you want to learn.',
    description:
      'An AI learning platform that turns a goal, prior experience and weekly study time into a structured roadmap with lessons, assessments and progress tracking.',
    role: 'Founder & product engineer',
    stack: ['Next.js 16', 'TypeScript', 'Convex', 'Clerk', 'LLM integrations'],
    status: 'Live',
    href: 'https://masteranything.app',
    image: { src: '/media/masteranything.webp', width: 1200, height: 596, alt: 'Master Anything homepage: “Master Anything You Dream Of”' },
  },
  {
    name: 'Wholeflo',
    kicker: 'A private cycle and wellbeing companion.',
    description:
      'An offline-first wellbeing app: data stays on the device in SQLite, with biometric lock, optional sync, reminders, localization and RevenueCat subscriptions.',
    role: 'Independent product',
    stack: ['React Native', 'Expo Router', 'SQLite', 'RevenueCat'],
    status: 'Pre-launch · waitlist open',
    href: 'https://wholeflo.com',
    image: { src: '/media/wholeflo.webp', width: 1200, height: 750, alt: 'Wholeflo landing page: “Understand your body, embrace your rhythm”' },
  },
  {
    name: 'PennyTots',
    kicker: 'A real-time community app.',
    description:
      'A React Native community app with real-time chat, profiles, following, push notifications, deep links and payments. I hardened unread state, pagination, group messaging and helpdesk notifications.',
    role: 'Mobile & full-stack developer, 2023 →',
    stack: ['React Native', 'Expo', 'NestJS', 'GraphQL', 'Socket.IO', 'MongoDB', 'AWS'],
    status: 'Live',
    href: 'https://pennytots.com',
  },
  {
    name: 'Quikaar',
    kicker: 'Multi-store commerce.',
    description:
      'Product discovery, deals, multi-store carts, checkout, delivery estimates, vendor onboarding and real-time order operations.',
    role: 'Marketplace build',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    status: 'No public URL',
  },
]

export const leetcode = {
  solved: 573,
  easy: 196,
  medium: 308,
  hard: 69,
  topics: [
    ['Hash table', 126],
    ['Dynamic programming', 85],
    ['Depth-first search', 80],
    ['Math', 66],
    ['Trees', 64],
    ['Breadth-first search', 60],
    ['Greedy', 56],
    ['Binary search', 45],
  ] as [string, number][],
  // Monthly daily-challenge badges earned in 2022 (May missed).
  monthlyBadges: [true, true, true, true, false, true, true, true, true, true, true, true],
}

export const nav = [
  { href: '#evidence', label: 'Evidence' },
  { href: '#ai', label: 'AI' },
  { href: '#career', label: 'Career' },
  { href: '#products', label: 'Products' },
  { href: '#discipline', label: 'Discipline' },
  { href: '#contact', label: 'Contact' },
]

// Weighted scores out of 10 from docs/council/r*-*.md. R0 scored the old live site.
export const council = {
  models: ['Codex (GPT)', 'Gemini', 'Claude Opus'],
  rounds: [
    { label: 'R0 · old site', scores: ['6.30', null, null] },
    { label: 'R1 · first rebuild', scores: ['7.40', '7.90', '7.98'] },
  ] as { label: string; scores: (string | null)[] }[],
}
