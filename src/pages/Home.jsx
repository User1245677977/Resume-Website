export default function Home({ onNavigate }) {
  return (
    <section className="page" id="page-home">
      <div className="eyebrow"><span className="pip-live"></span> available for full-time roles</div>
      <h1 className="name">Sophia Guseth</h1>
      <div className="role">Full Stack Developer</div>
      <p className="tagline">
        I build fast, functional web applications — from client-facing brand experiences
        to internal tools that turn raw data into decisions people actually use.
      </p>

      <div className="code-block">
        <div className="code-header">
          <span className="dot"></span><span className="dot"></span><span className="dot"></span>
          <span className="fname">about-me.js</span>
        </div>
        <div className="code-body">
          <span className="tok-kw">const</span> <span className="tok-fn">sophia</span> <span className="tok-punc">=</span> <span className="tok-punc">{'{'}</span><br />
          &nbsp;&nbsp;<span className="tok-prop">based</span><span className="tok-punc">:</span> <span className="tok-str">"Southgate, MI"</span><span className="tok-punc">,</span><br />
          &nbsp;&nbsp;<span className="tok-prop">stack</span><span className="tok-punc">:</span> <span className="tok-punc">[</span><span className="tok-str">"React"</span><span className="tok-punc">,</span> <span className="tok-str">"Node"</span><span className="tok-punc">,</span> <span className="tok-str">"Python"</span><span className="tok-punc">]</span><span className="tok-punc">,</span><br />
          &nbsp;&nbsp;<span className="tok-prop">shipping</span><span className="tok-punc">:</span> <span className="tok-str">"production sites since 2024"</span><span className="tok-punc">,</span><br />
          &nbsp;&nbsp;<span className="tok-prop">status</span><span className="tok-punc">:</span> <span className="tok-str">"open to work"</span><br />
          <span className="tok-punc">{'}'}</span><span className="tok-punc">;</span>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={() => onNavigate('projects')}>View Projects →</button>
        <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        <button className="btn btn-ghost" onClick={() => onNavigate('contact')}>Contact Me</button>
      </div>

      <div className="status-row">
        <span>📍 Southgate, MI</span>
        <span className="on">● Open to full-time work</span>
        <span className="on">● Remote / Hybrid</span>
      </div>
    </section>
  )
}