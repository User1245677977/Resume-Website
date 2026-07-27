import { commits } from '../data.js'

export default function Employment() {
  return (
    <section className="page" id="page-employment">
      <div className="section-label">05 // work history</div>
      <h2 className="section-title">Employment</h2>

      <div className="section-label">git log --oneline</div>

      {commits.map((c) => (
        <div className="commit" key={c.hash}>
          <div className="commit-hash">{c.hash}</div>
          <div className="commit-body">
            <div className="commit-msg">{c.title}</div>
            <div className="commit-meta">{c.meta}</div>
            <div className="commit-desc">{c.desc}</div>
          </div>
        </div>
      ))}
    </section>
  )
}