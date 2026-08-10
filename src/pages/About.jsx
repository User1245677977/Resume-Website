export default function About() {
  return (
    <section className="page" id="page-about">
      <div className="section-label">About me</div>
      <h2 className="section-title">About</h2>

      <p className="bio-block">
        I'm Sophia — a full stack developer based in Southgate, MI. I've been writing code
        since high school, starting with autonomous robot programming on my school's FIRST
        Robotics team, and I've been building production software ever since. Outside of
        work I'm into <em>reading</em>, <em>painting</em>, and <em>gaming</em>.
      </p>

      <hr className="rule" />

      <div className="fact-row">
        <div className="fact-label">Based in</div>
        <div className="fact-value">Southgate, MI</div>
      </div>
      <div className="fact-row">
        <div className="fact-label">Currently</div>
        <div className="fact-value">Building production sites for early-stage clients</div>
      </div>
      <div className="fact-row">
        <div className="fact-label">Fun fact</div>
        <div className="fact-value">I'm very good at riddle and puzzle-solving games.</div>
      </div>
    </section>
  )
}