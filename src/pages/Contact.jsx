import { contactInfo } from '../data.js'

export default function Contact() {
  return (
    <section className="page" id="page-contact">
      <div className="section-label">05 // reach out</div>
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        {contactInfo.map((c) => (
          <a className="contact-card" key={c.label} href={c.href} target="_blank" rel="noreferrer">
            <div className="contact-label">{c.label}</div>
            <div className="contact-value">{c.value}</div>
          </a>
        ))}
      </div>
    </section>
  )
}