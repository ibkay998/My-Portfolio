import { afterQuery } from '@/data/site'

export default function Ledger() {
  return (
    <ol className="ledger">
      {afterQuery.map((row) => (
        <li key={row.name} className="ledger__row">
          <div className="ledger__name">
            <p className="kicker">{row.type}</p>
            <h4>{row.name}</h4>
          </div>
          <div className="ledger__body">
            <p className="ledger__headline">{row.headline}</p>
            <div className="glyphs" aria-hidden="true">
              {Array.from({ length: row.total }, (_, i) => (
                <span key={i} className={`glyph glyph--${row.glyph}`} data-approved={i < row.approved} />
              ))}
            </div>
            <ul className="glyph-legend" aria-hidden="true">
              {row.legend.map((label, i) => (
                <li key={label}>
                  <span className={`glyph glyph--${row.glyph}`} data-approved={i === 0} /> {label}
                </li>
              ))}
            </ul>
            <p className="ledger__detail">{row.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
