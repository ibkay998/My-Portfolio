// The page is static HTML with no client components, so the Next.js runtime
// only delays rendering. Remove every script except JSON-LD structured data.
import { readFile, writeFile } from 'node:fs/promises'

const file = 'out/index.html'
const html = (await readFile(file, 'utf8'))
  .replace(/<script\b(?![^>]*ld\+json)[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<link[^>]*as="script"[^>]*>/g, '')

if (/<script(?![^>]*ld\+json)/.test(html)) throw new Error('A runtime script survived stripping')
await writeFile(file, html)
console.log(`Stripped runtime scripts from ${file}`)
