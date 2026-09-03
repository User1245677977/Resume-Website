import { useState, useEffect } from 'react'
import { employment } from '../data.js'

export default function Employment() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section className="page" id="page-employment">
      <div className="section-label">Work history</div>
      <h2 className="section-title">Employment</h2>

      {employment.map((job) => (
        <button className="edu-card" key={job.id} onClick={() => setOpen(job)}>
          <div className="edu-card-top">
            <div>
              <div className="edu-institution">{job.title}</div>
              <div className="edu-location">{job.org}</div>
            </div>
            <div className="edu-date-col">
              <div className="edu-date">{job.meta}</div>
            </div>
          </div>
          <div className="edu-summary">{job.summary}</div>
          <div className="edu-more">Read more</div>
        </button>
      ))}

      {open && (
        <div className="edu-modal-backdrop" onClick={() => setOpen(null)}>
          <div className="edu-modal" onClick={(e) => e.stopPropagation()}>
            <button className="edu-modal-close" onClick={() => setOpen(null)} aria-label="Close">✕</button>
            <div className="edu-modal-eyebrow">{open.meta}</div>
            <h3 className="edu-modal-title">{open.title}</h3>
            <div className="edu-modal-location">{open.org}</div>
            <p className="edu-modal-story">{open.desc}</p>
          </div>
        </div>
      )}
    </section>
  )
}