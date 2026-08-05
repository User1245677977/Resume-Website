export default function Home({ onNavigate }) {
  return (
    <section className="page" id="page-home">
      <div className="eyebrow">Available for full-time roles</div>
      <h1 className="name">Sophia Guseth</h1>
      <div className="role">Full Stack Developer</div>
      <p className="tagline">
        I build fast, functional web applications — from client-facing brand experiences
        to internal tools that turn raw data into decisions people actually use.
      </p>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={() => onNavigate('projects')}>View Projects</button>
        <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download Résumé</a>
        <button className="btn" onClick={() => onNavigate('contact')}>Contact Me</button>
      </div>

      <div className="status-row">
        <span>Southgate, MI</span>
        <span>Open to full-time work</span>
        <span>Remote / Hybrid</span>
      </div>
    </section>
  )
}