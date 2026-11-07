import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Manrope } from 'next/font/google'
import { links } from '@/data/site'
import './globals.css'

const display = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-display' })
const body = Manrope({ subsets: ['latin'], variable: '--font-body' })

const description =
  'Full-stack engineer in Lagos: backend, frontend, mobile, DevOps and AI evaluation. Developer of the Year at Babban Gona, AI evaluation expert at AfterQuery, founder of Master Anything.'

const ogAlt =
  'Ibukunoluwa Oyeniyi: I make software prove itself. 13.7 s to 45.5 ms median latency on a controlled 20,000-record benchmark, 0 rejections in an AI-evaluation review cycle, Developer of the Year.'

export const metadata: Metadata = {
  metadataBase: new URL('https://ibukunoluwa-oyeniyi.vercel.app'),
  title: 'Ibukunoluwa Oyeniyi · Full-stack engineer',
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ibukunoluwa Oyeniyi · Full-stack engineer',
    description,
    url: '/',
    type: 'profile',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: ogAlt }],
  },
  twitter: { card: 'summary_large_image', images: [{ url: '/og.png', alt: ogAlt }] },
}

export const viewport: Viewport = { themeColor: '#f2f0e8' }

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ibukunoluwa Oyeniyi',
  jobTitle: 'Full-stack engineer (backend, frontend, mobile, DevOps, AI evaluation)',
  worksFor: [
    { '@type': 'Organization', name: 'Babban Gona' },
    { '@type': 'Organization', name: 'AfterQuery Experts' },
    { '@type': 'Organization', name: 'Master Anything', url: 'https://masteranything.app' },
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Lagos' },
  award: 'Developer of the Year, Babban Gona',
  email: 'ibukun46@gmail.com',
  url: 'https://ibukunoluwa-oyeniyi.vercel.app',
  sameAs: [links.linkedin, links.github, links.leetcode],
  knowsAbout: [
    'TypeScript', 'React', 'Next.js', 'React Native', 'Expo', 'Python', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB',
    'Redis', 'GraphQL', 'Rust', 'Java', 'GCP', 'AWS', 'Docker', 'Playwright', 'AI agent evaluation', 'Benchmark design',
    'Sanitizer-backed fuzzing', 'LLM product engineering', 'SQLite', 'Convex', 'GitHub Actions', 'SonarQube',
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </body>
    </html>
  )
}
