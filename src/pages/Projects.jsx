export default function Projects() {
  return (
    <section className="page" id="page-projects">
      <div className="section-label">Selected work</div>
      <h2 className="section-title">Projects</h2>

      <div className="project-card">
        <img className="project-shot" src="/bossmode-screenshot.png" alt="Boss Mode teaser site screenshot" />
        <div className="project-title-row">
          <div className="project-title">Boss Mode™ — Pre-Launch Teaser Site</div>
          <span className="project-tag">Live</span>
        </div>
        <p className="project-desc">
          Designed and launched a fully responsive teaser site for a pre-launch functional
          beverage brand, including email capture and waitlist integration. Built a reusable
          component system and a deployment pipeline that pushes straight from GitHub to production.
        </p>
        <div className="stack-row">React · Cloudflare Pages · GitHub Actions · Custom Design System</div>
        <div className="project-links">
          <a className="btn" href="https://www.bossmode.com" target="_blank" rel="noreferrer">Live Site</a>
          <a className="btn" href="https://github.com/User1245677977/bossmodeteaser" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="placeholder-card">
        A second project slot — robotics team, the engine-data reporting platform, or the investor site once it's live. Your call.
      </div>
    </section>
  )
}