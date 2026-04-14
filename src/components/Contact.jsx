import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import { personal, social } from '../data/portfolio'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields')
      return
    }
    setSending(true)
    // Simulate send — replace with EmailJS / Formspree / your own backend
    setTimeout(() => {
      setSending(false)
      toast.success("Message sent! I'll get back to you soon 🚀")
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
    // To hook up real email: use EmailJS at https://www.emailjs.com/
  }

  const inputStyle = {
    width: '100%', background: 'var(--bg-card)',
    border: '1px solid var(--border)', borderRadius: 'var(--radius)',
    padding: '0.875rem 1rem', color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.2s',
  }

  const socialLinks = [
    { icon: <FiLinkedin />, href: social.linkedin, label: 'LinkedIn' },
    { icon: <FiGithub />, href: social.github, label: 'GitHub' },
    { icon: <FiInstagram />, href: social.instagram, label: 'Instagram' },
  ]

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">
          Let's <span style={{ color: 'var(--orange)' }}>Talk</span>
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          {/* Left info */}
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1rem' }}>
              Have a project in mind? Want to collaborate or just say hi? My inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {[
                { icon: <FiMail />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: <FiPhone />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { icon: <FiMapPin />, label: 'Location', value: personal.location, href: null },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                    background: 'var(--orange-glow)', border: '1px solid rgba(255,107,0,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--orange)',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                      {item.label.toUpperCase()}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}
                        onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                FIND ME ON
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socialLinks.filter(s => s.href).map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      width: 40, height: 40, borderRadius: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--bg-card)', border: '1px solid var(--border)',
                      color: 'var(--text-secondary)', textDecoration: 'none',
                      transition: 'var(--transition)', fontSize: '1.1rem',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.background = 'var(--orange-glow)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-card)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', padding: '2.5rem',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-two-col">
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--orange)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>NAME *</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Your name" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--orange)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>EMAIL *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--orange)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>SUBJECT</label>
              <input name="subject" value={form.subject} onChange={handleChange}
                placeholder="What's this about?" style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--orange)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>MESSAGE *</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                placeholder="Tell me about your project, idea, or just say hello..."
                rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <button onClick={handleSubmit} disabled={sending} className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
              {sending ? 'Sending...' : <><FiSend /> Send Message</>}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 480px) {
          #contact .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
