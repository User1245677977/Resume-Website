export default function About() {
  return (
    <section className="page" id="page-about">
      <div className="section-label">03 // about me</div>
      <h2 className="section-title">About</h2>

      <p className="bio-block">
        I'm Sophia — a full stack developer based in Southgate, MI. I've been writing code
        since high school, starting with autonomous robot programming on my school's FIRST
        Robotics team, and I've been building production software ever since. Outside of work
        I'm into <strong>[hobby one]</strong>, <strong>[hobby two]</strong>, and{' '}
        <strong>[hobby three]</strong> — tell me what to put here and I'll swap it in.
      </p>

      <div className="section-label" style={{ marginTop: '8px' }}>quick facts</div>
      <div className="commit">
        <div className="commit-hash">loc</div>
        <div className="commit-body">
          <div className="commit-desc">Southgate, MI</div>
        </div>
      </div>
      <div className="commit">
        <div className="commit-hash">now</div>
        <div className="commit-body">
          <div className="commit-desc">Building production sites for early-stage clients</div>
        </div>
      </div>
      <div className="commit">
        <div className="commit-hash">fun</div>
        <div className="commit-body">
          <div className="commit-desc">[a fun fact about you goes here]</div>
        </div>
      </div>
    </section>
  )
}