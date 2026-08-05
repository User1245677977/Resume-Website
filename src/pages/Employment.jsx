import { employment } from '../data.js'

export default function Employment() {
  return (
    <section className="page" id="page-employment">
      <div className="section-label">Work history</div>
      <h2 className="section-title">Employment</h2>

      {employment.map((job) => (
        <div className="job-entry" key={job.id}>
          <div className="job-meta">{job.meta}</div>
          <div className="job-title">{job.title}</div>
          <div className="job-org">{job.org}</div>
          <div className="job-desc">{job.desc}</div>
        </div>
      ))}
    </section>
  )
}