import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Employment from './pages/Employment.jsx'
import Education from './pages/Education.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  const handleNavigate = (id) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="main">
      <Nav current={page} onNavigate={handleNavigate} />
      <div className="wrap">
        {page === 'home' && <Home onNavigate={handleNavigate} />}
        {page === 'projects' && <Projects />}
        {page === 'about' && <About />}
        {page === 'skills' && <Skills />}
        {page === 'employment' && <Employment />}
        {page === 'education' && <Education />}
        {page === 'contact' && <Contact />}
      </div>
      <footer>
        Built with React · <span className="accent">Sophia Guseth</span> · © 2026
      </footer>
    </div>
  )
}