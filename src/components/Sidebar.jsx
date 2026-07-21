import { nav } from '../data.js'

export default function Sidebar({ current, onNavigate }) {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-header">EXPLORER</div>
        <div className="folder">▾ 📁 sophia-guseth</div>
        {nav.map((item) => (
          <button
            key={item.id}
            className={`file${current === item.id ? ' active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span>⚛</span> {item.label} <span className="ext">.jsx</span>
          </button>
        ))}
        <div className="sidebar-footer">
          <div className="line"><span className="pip-live"></span> build passing</div>
          <div className="line">branch: main</div>
          <div className="line">node v20.11</div>
        </div>
      </aside>

      <nav className="mobile-tabbar">
        <div className="tabs">
          {nav.map((item) => (
            <button
              key={item.id}
              className={`file${current === item.id ? ' active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}.jsx
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}