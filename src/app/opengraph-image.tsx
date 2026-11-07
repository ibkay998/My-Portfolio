import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Ibukunoluwa Oyeniyi: I make software prove itself. 13.7 s to 45.5 ms, 0 rejections, Developer of the Year.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function googleFont(family: string, query: string) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}:${query}`)).text()
  const url = css.match(/src: url\((.+?)\) format/)?.[1]
  if (!url) throw new Error(`Font not found: ${family}`)
  return (await fetch(url)).arrayBuffer()
}

export default async function OpengraphImage() {
  const [serif, serifItalic, sans, portrait] = await Promise.all([
    googleFont('DM+Serif+Display', 'ital@0'),
    googleFont('DM+Serif+Display', 'ital@1'),
    googleFont('Manrope', 'wght@700'),
    readFile(join(process.cwd(), 'public/media/portrait.jpg')),
  ])
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`

  const proof = (value: string, label: string) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
      <div style={{ fontFamily: 'Serif', fontSize: 34, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: 'Sans', fontSize: 16, color: '#5f635a' }}>{label}</div>
    </div>
  )

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#f2f0e8', color: '#11130f', padding: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 740 }}>
          <div style={{ fontFamily: 'Sans', fontSize: 22, letterSpacing: 3 }}>IBUKUNOLUWA OYENIYI · LAGOS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontFamily: 'Serif', fontSize: 92, lineHeight: 0.95, letterSpacing: -3 }}>
            <span>I make software&nbsp;</span>
            <span style={{ fontFamily: 'SerifItalic', color: '#b83c17' }}>prove</span>
            <span>&nbsp;itself.</span>
          </div>
          <div style={{ display: 'flex', gap: 28, borderTop: '2px solid #11130f', paddingTop: 20 }}>
            {proof('13.7 s → 45.5 ms', 'median latency')}
            {proof('0 rejections', 'AI-agent tasks')}
            {proof('Dev of the Year', 'Babban Gona')}
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <img
            src={portraitSrc}
            width={330}
            height={440}
            style={{ objectFit: 'cover', borderRadius: '165px 165px 12px 12px', background: '#c9ff45' }}
            alt=""
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Serif', data: serif, style: 'normal' },
        { name: 'SerifItalic', data: serifItalic, style: 'normal' },
        { name: 'Sans', data: sans, weight: 700, style: 'normal' },
      ],
    },
  )
}
