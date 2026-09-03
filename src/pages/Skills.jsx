import { useState } from 'react'
import { skills } from '../data.js'

export default function Skills() {
  const [openSkill, setOpenSkill] = useState(null)
  const toggleSkill = (name) => setOpenSkill((c) => (c === name ? null : name))
  const active = skills.find((s) => s.name === openSkill)

  return (
    <section className="page" id="page-skills">
      <div className="section-label">Capabilities</div>
      <h2 className="section-title">Skills</h2>

      <p className="bio-block">Click any skill below to learn what it is and how I use it.</p>

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
          <div className="skill-detail-header">{active.name}</div>
          <p className="skill-detail-body">{active.description}</p>
        </div>
      )}

    </section>
  )
}
