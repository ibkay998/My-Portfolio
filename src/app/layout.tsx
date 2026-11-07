import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Manrope } from 'next/font/google'
import { links } from '@/data/site'
import './globals.css'

const display = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-display' })
const body = Manrope({ subsets: ['latin'], variable: '--font-body' })

const description =
  'Full-stack, mobile and AI engineer in Lagos. Developer of the Year at Babban Gona, AI evaluation expert at AfterQuery, founder of Master Anything. Every claim comes with a receipt.'

export const metadata: Metadata = {
  metadataBase: new URL('https://myportforlio.vercel.app'),
  title: 'Ibukunoluwa Oyeniyi · Full-stack, mobile & AI engineer',
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ibukunoluwa Oyeniyi · Full-stack, mobile & AI engineer',
    description,
    url: '/',
    type: 'profile',
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = { themeColor: '#f2f0e8' }

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ibukunoluwa Oyeniyi',
  jobTitle: 'Developer II, Frontend Lead',
  worksFor: { '@type': 'Organization', name: 'Babban Gona' },
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Lagos' },
  award: 'Developer of the Year, Babban Gona',
  email: 'ibukun46@gmail.com',
  url: 'https://myportforlio.vercel.app',
  sameAs: [links.linkedin, links.github, links.leetcode],
  knowsAbout: ['TypeScript', 'React', 'Next.js', 'React Native', 'Python', 'PostgreSQL', 'AI agent evaluation', 'LLM product engineering'],
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
