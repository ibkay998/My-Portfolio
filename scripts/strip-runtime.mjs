// The page is static HTML with no client components, so the Next.js runtime
// only delays rendering. Remove every script except JSON-LD structured data.
import { readFile, readdir, rm, writeFile } from 'node:fs/promises'

const file = 'out/index.html'
const html = (await readFile(file, 'utf8'))
  .replace(/<script\b(?![^>]*ld\+json)[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<link[^>]*as="script"[^>]*>/g, '')

if (/<script(?![^>]*ld\+json)/.test(html)) throw new Error('A runtime script survived stripping')
await writeFile(file, html)

// RSC payload files are only fetched by the runtime we just removed.
for (const name of await readdir('out')) {
  if (name.endsWith('.txt') && name !== 'llms.txt') await rm(`out/${name}`)
}
console.log(`Stripped runtime scripts and RSC payloads from out/`)
