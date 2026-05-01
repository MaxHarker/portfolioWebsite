import { useState } from "react"
import { ref, push } from "firebase/database"
import { database } from "../data/firebase"

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const messagesRef = ref(database, "contacts")

    await push(messagesRef, {
      name: form.name,
      email: form.email,
      message: form.message,
      timestamp: Date.now()
    })

    setSubmitted(true)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section className="page-section contact-page">
      <div className="section-header">
        <span className="eyebrow">Contact</span>
        <h2>Let's create something together</h2>
        <div className="contact-info">
          <a href="https://github.com/MaxHarker" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub profile link" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/max-harker-019b5b316/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn profile link" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/maxharker63/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram profile link" className="social-icon" />
          </a>
          <a href="mailto:maxharker@gmail.com">
            <img src="/images/email.png" alt="Email Max Harker" className="social-icon" />
          </a>
          <a href="tel:+13854415107">
            <img src="/images/phone.png" alt="Call Max Harker" className="social-icon" />
          </a>
        </div>
        <p>
          Send a quick message if you'd like to connect about a project,
          opportunity, or collaboration.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project"
            rows="6"
            required
          />
        </label>
        <button type="submit" className="button-primary">
          Send message
        </button>
        {submitted && <p className="form-success">Thanks! Your message has been logged.</p>}
      </form>
    </section>
  )
}

export default Contact
