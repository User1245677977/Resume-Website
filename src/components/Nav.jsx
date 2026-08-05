import { nav } from '../data.js'

export default function Nav({ current, onNavigate }) {
  return (
    <nav className="topnav">
      <div className="topnav-inner">
        <div className="brand">Sophia Guseth</div>
        <div className="nav-links">
          {nav.map((item) => (
            <button
              key={item.id}
              className={`nav-link${current === item.id ? ' active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}