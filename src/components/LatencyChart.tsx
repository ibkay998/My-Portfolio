const BEFORE_S = 13.7
const AFTER_S = 0.0455
const MIN_LOG = -2 // 10 ms
const MAX_LOG = 2 // 100 s
const W = 640
const LEFT = 84
const RIGHT = 24
const plot = W - LEFT - RIGHT

const x = (seconds: number) => LEFT + ((Math.log10(seconds) - MIN_LOG) / (MAX_LOG - MIN_LOG)) * plot

const ticks = [
  { s: 0.01, label: '10 ms' },
  { s: 0.1, label: '100 ms' },
  { s: 1, label: '1 s' },
  { s: 10, label: '10 s' },
  { s: 100, label: '100 s' },
]

export default function LatencyChart() {
  const speedup = Math.round(BEFORE_S / AFTER_S / 10) * 10
  const linearAfter = Math.max((AFTER_S / BEFORE_S) * plot, 1.5)

  return (
    <figure className="latency">
      <svg viewBox={`0 0 ${W} 236`} role="img" aria-labelledby="latency-title latency-desc">
        <title id="latency-title">Median request latency before and after the fix</title>
        <desc id="latency-desc">
          On a logarithmic axis, latency falls from 13.7 seconds to 45.5 milliseconds, about {speedup} times faster. A
          linear inset shows the new latency as a sliver next to the old one.
        </desc>

        {ticks.map((t) => (
          <g key={t.label}>
            <line x1={x(t.s)} x2={x(t.s)} y1={14} y2={128} className="latency__grid" />
            <text x={x(t.s)} y={146} className="latency__tick" textAnchor="middle">
              {t.label}
            </text>
          </g>
        ))}

        <text x={0} y={46} className="latency__label">Before</text>
        <rect x={LEFT} y={30} height={26} width={x(BEFORE_S) - LEFT} className="latency__bar latency__bar--before" />
        <text x={x(BEFORE_S) + 8} y={48} className="latency__value">13.7 s</text>

        <text x={0} y={100} className="latency__label">After</text>
        <rect x={LEFT} y={84} height={26} width={x(AFTER_S) - LEFT} className="latency__bar latency__bar--after" />
        <text x={x(AFTER_S) + 8} y={102} className="latency__value">45.5 ms</text>

        <text x={W - RIGHT} y={102} textAnchor="end" className="latency__speedup">≈{speedup}× faster</text>

        <text x={0} y={186} className="latency__label">Linear</text>
        <rect x={LEFT} y={174} height={14} width={plot} className="latency__bar latency__bar--before latency__bar--thin" />
        <rect x={LEFT} y={196} height={14} width={linearAfter} className="latency__bar latency__bar--after latency__bar--thin" />
        <text x={LEFT + 10} y={208} className="latency__note">← the new request, drawn to scale</text>
      </svg>
      <figcaption className="receipt">
        Median request latency in a controlled 20,000-record benchmark. Fix: pagination plus query and index
        optimization, done with backend engineers. Source: CV and Mercor profile.
      </figcaption>
    </figure>
  )
}
