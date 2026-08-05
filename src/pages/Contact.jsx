import { contactInfo } from '../data.js'

export default function Contact() {
  return (
    <section className="page" id="page-contact">
      <div className="section-label">Reach out</div>
      <h2 className="section-title">Contact</h2>

      <div className="contact-list">
        {contactInfo.map((c) => (
          <a className="contact-row" key={c.label} href={c.href} target="_blank" rel="noreferrer">
            <span className="contact-label">{c.label}</span>
            <span className="contact-value">{c.value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}