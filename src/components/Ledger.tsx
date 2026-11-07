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
                <span
                  key={i}
                  className={`glyph glyph--${row.glyph}`}
                  data-state={i < row.approved ? 'approved' : i < row.approved + row.review ? 'review' : 'open'}
                />
              ))}
            </div>
            <ul className="glyph-legend" aria-hidden="true">
              {row.legend.map((label, i) => (
                <li key={label}>
                  <span className={`glyph glyph--${row.glyph}`} data-state={i === 0 && row.approved > 0 ? 'approved' : 'review'} />{' '}
                  {label}
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
