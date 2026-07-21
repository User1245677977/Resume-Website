import { skills, commits } from '../data.js'

export default function About() {
  return (
    <section className="page" id="page-about">
      <div className="section-label">03 // background</div>
      <h2 className="section-title">About</h2>

      <p className="bio-block">
        I'm a full stack developer based in Southgate, MI, currently building production sites
        and internal tools for early-stage clients. I hold a{' '}
        <strong>Professional Certificate in Full Stack Development (<code>MERN</code>)</strong> from
        MIT, and I've been writing code since high school — starting with autonomous robot
        programming on my school's FIRST Robotics team.
      </p>

      <div className="section-label" style={{ marginTop: '8px' }}>git log --oneline</div>

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

      <div className="section-label" style={{ marginTop: '52px' }}>skills</div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-chip" key={s}>{s}</div>
        ))}
      </div>
      <div className="learning-line">
        <span className="amber">▸</span> currently learning:
        <span className="amber">&nbsp;TBD — tell me what's next</span>
      </div>
    </section>
  )
}