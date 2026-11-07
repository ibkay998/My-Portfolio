import data from '@/data/leetcode-2022.json'
import { leetcode } from '@/data/site'

const days = data.days as Record<string, number>
const total = Object.values(days).reduce((sum, n) => sum + n, 0)
const activeDays = Object.keys(days).length

// The page quotes these numbers, so the build fails if the data stops backing them up.
if (total !== 905 || activeDays !== 346) {
  throw new Error(`LeetCode 2022 data mismatch: ${total} submissions, ${activeDays} active days`)
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const CELL = 11
const GAP = 3

const level = (n: number) => (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n <= 4 ? 3 : 4)

function Month({ index }: { index: number }) {
  const first = new Date(Date.UTC(2022, index, 1))
  const length = new Date(Date.UTC(2022, index + 1, 0)).getUTCDate()
  const offset = first.getUTCDay()
  const weeks = 6 // fixed so every month grid lines up

  const cells = Array.from({ length }, (_, i) => {
    const date = new Date(Date.UTC(2022, index, i + 1)).toISOString().slice(0, 10)
    const n = days[date] ?? 0
    const slot = offset + i
    return (
      <rect
        key={date}
        x={Math.floor(slot / 7) * (CELL + GAP)}
        y={(slot % 7) * (CELL + GAP)}
        width={CELL}
        height={CELL}
        rx={2}
        className={`heat heat--${level(n)}`}
      >
        <title>{`${date}: ${n} submission${n === 1 ? '' : 's'}`}</title>
      </rect>
    )
  })

  const monthTotal = Object.entries(days)
    .filter(([date]) => Number(date.slice(5, 7)) === index + 1)
    .reduce((sum, [, n]) => sum + n, 0)

  return (
    <div className="month">
      <svg
        viewBox={`0 0 ${weeks * (CELL + GAP) - GAP} ${7 * (CELL + GAP) - GAP}`}
        width={weeks * (CELL + GAP) - GAP}
        aria-hidden="true"
      >
        {cells}
      </svg>
      <span className="month__label">
        {MONTHS[index]}
        <span className="month__badge" data-earned={leetcode.monthlyBadges[index]} title={leetcode.monthlyBadges[index] ? 'Monthly challenge badge earned' : 'Badge missed'} />
      </span>
      <span className="sr-only">{`${MONTHS[index]}: ${monthTotal} submissions`}</span>
    </div>
  )
}

export default function Heatmap() {
  return (
    <figure className="heatmap">
      <div className="heatmap__months">
        {MONTHS.map((_, i) => (
          <Month key={i} index={i} />
        ))}
      </div>
      <figcaption className="heatmap__legend">
        <span>Fewer</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span key={l} className={`swatch heat--${l}`} aria-hidden="true" />
        ))}
        <span>More</span>
        <span className="heatmap__key">
          <span className="month__badge" data-earned="true" aria-hidden="true" /> monthly challenge badge
        </span>
      </figcaption>
      <p className="receipt receipt--light">
        Rendered from LeetCode&apos;s public submission calendar for 2022, user ibkay998. The build fails if these
        cells don&apos;t sum to {total} submissions across {activeDays} days.
      </p>
    </figure>
  )
}
