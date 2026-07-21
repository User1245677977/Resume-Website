import { education } from '../data.js'

export default function Education() {
  return (
    <section className="page" id="page-education">
      <div className="section-label">04 // credentials</div>
      <h2 className="section-title">Education</h2>

      {education.map((e) => (
        <div className="edu-card" key={e.institution + e.credential}>
          <div className="edu-card-top">
            <div>
              <div className="edu-institution">{e.institution}</div>
              <div className="edu-location">{e.location}</div>
            </div>
            <div className="edu-date-col">
              <div className="edu-date">{e.date}</div>
              {e.badge && <span className="edu-badge">{e.badge}</span>}
            </div>
          </div>
          <div className="edu-credential">{e.credential}</div>
          {e.details.length > 0 && (
            <ul className="edu-details">
              {e.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  )
}