import { useState, useEffect } from 'react'
import { education } from '../data.js'

export default function Education() {
  const [open, setOpen] = useState(null) // holds the education object, or null

  // close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section className="page" id="page-education">
      <div className="section-label">06 // credentials</div>
      <h2 className="section-title">Education</h2>

      {education.map((e) => (
        <button className="edu-card" key={e.institution} onClick={() => setOpen(e)}>
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
          <div className="edu-summary">{e.summary}</div>
          <div className="edu-more">view details →</div>
        </button>
      ))}

      {open && (
        <div className="edu-modal-backdrop" onClick={() => setOpen(null)}>
          <div className="edu-modal" onClick={(e) => e.stopPropagation()}>
            <button className="edu-modal-close" onClick={() => setOpen(null)} aria-label="Close">
              ✕
            </button>
            <div className="edu-modal-eyebrow">
              {open.date}{open.badge ? ` · ${open.badge}` : ''}
            </div>
            <h3 className="edu-modal-title">{open.institution}</h3>
            <div className="edu-modal-location">{open.location}</div>
            <div className="edu-modal-credential">{open.credential}</div>
            <p className="edu-modal-story">{open.story}</p>
          </div>
        </div>
      )}
    </section>
  )
}