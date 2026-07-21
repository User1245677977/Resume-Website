import { useState } from 'react'

export default function Projects() {
  const [view, setView] = useState('preview') // 'preview' | 'code'

  return (
    <section className="page" id="page-projects">
      <div className="section-label">02 // selected work</div>
      <h2 className="section-title">Projects</h2>

      <div className="project-card">
        <div className="project-toggle">
          <button
            className={`toggle-btn${view === 'preview' ? ' active' : ''}`}
            onClick={() => setView('preview')}
          >
            preview
          </button>
          <button
            className={`toggle-btn${view === 'code' ? ' active' : ''}`}
            onClick={() => setView('code')}
          >
            the stack
          </button>
        </div>

        {view === 'preview' ? (
          <div className="project-shot">
            [ screenshot pending — drop one in and swap this div for an &lt;img&gt; ]
          </div>
        ) : (
          <div className="project-code">
            <span className="tok-kw">export</span> <span className="tok-kw">const</span> <span className="tok-fn">deploy</span> <span className="tok-punc">=</span> <span className="tok-kw">async</span> <span className="tok-punc">()</span> <span className="tok-punc">{'=>'}</span> <span className="tok-punc">{'{'}</span><br />
            &nbsp;&nbsp;<span className="tok-kw">await</span> <span className="tok-fn">push</span><span className="tok-punc">(</span><span className="tok-str">"github.com/sophia/boss-mode"</span><span className="tok-punc">)</span><span className="tok-punc">;</span><br />
            &nbsp;&nbsp;<span className="tok-kw">await</span> <span className="tok-fn">buildOn</span><span className="tok-punc">(</span><span className="tok-str">"cloudflare-pages"</span><span className="tok-punc">)</span><span className="tok-punc">;</span><br />
            &nbsp;&nbsp;<span className="tok-prop">// zero build step, ships in seconds</span><br />
            &nbsp;&nbsp;<span className="tok-kw">return</span> <span className="tok-str">"live"</span><span className="tok-punc">;</span><br />
            <span className="tok-punc">{'}'}</span><span className="tok-punc">;</span>
          </div>
        )}

        <div className="project-body">
          <div className="project-title-row">
            <div className="project-title">Boss Mode™ — Pre-Launch Teaser Site</div>
            <span className="project-tag">live</span>
          </div>
          <p className="project-desc">
            Designed and launched a fully responsive teaser site for a pre-launch functional
            beverage brand, including email capture and waitlist integration. Built a reusable
            component system and a deployment pipeline that pushes straight from GitHub to production.
          </p>
          <div className="stack-row">
            <span className="stack-pill">React</span>
            <span className="stack-pill">Cloudflare Pages</span>
            <span className="stack-pill">GitHub Actions</span>
            <span className="stack-pill">Custom Design System</span>
          </div>
          <div className="project-links">
            <a className="btn btn-ghost" href="https://www.bossmode.com" target="_blank" rel="noreferrer">Live Site ↗</a>
            <a className="btn btn-ghost" href="https://github.com/User1245677977?tab=repositories" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </div>

      <div className="placeholder-card">
        + second project slot — robotics team, engine-data reporting platform, or the investor site once it's live. Your call.
      </div>
    </section>
  )
}