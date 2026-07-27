import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
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
    <div className="app">
      <Sidebar current={page} onNavigate={handleNavigate} />
      <main className="main">
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
          Built with React · <span className="amber">Sophia Guseth</span> · © 2026
        </footer>
      </main>
    </div>
  )
}