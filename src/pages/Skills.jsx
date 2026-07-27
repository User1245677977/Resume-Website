import { useState } from 'react'
import { skills } from '../data.js'

export default function Skills() {
  const [openSkill, setOpenSkill] = useState(null)

  const toggleSkill = (name) => {
    setOpenSkill((current) => (current === name ? null : name))
  }

  const active = skills.find((s) => s.name === openSkill)

  return (
    <section className="page" id="page-skills">
      <div className="section-label">04 // capabilities</div>
      <h2 className="section-title">Skills</h2>

      <p className="bio-block" style={{ marginBottom: '32px' }}>
        Click any skill below to see how I actually use it.
      </p>

      <div className="skills-grid">
        {skills.map((s) => (
          <button
            key={s.name}
            className={`skill-chip${openSkill === s.name ? ' active' : ''}`}
            onClick={() => toggleSkill(s.name)}
            aria-expanded={openSkill === s.name}
          >
            {s.name}
          </button>
        ))}
      </div>

      {active && (
        <div className="skill-detail">
          <div className="skill-detail-header">
            <span className="tok-punc">// </span>{active.name}
          </div>
          <p className="skill-detail-body">{active.description}</p>
        </div>
      )}

      <div className="learning-line">
        <span className="amber">▸</span> currently learning:
        <span className="amber">&nbsp;TBD — tell me what's next</span>
      </div>
    </section>
  )
}