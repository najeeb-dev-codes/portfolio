import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Works', href: '#works' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = personal.name.split(' ').map(n => n[0]).join('')

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 40, height: 40,
            background: 'var(--orange)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            color: '#000',
            letterSpacing: '0.05em',
            fontWeight: 700,
          }}>
            {initials}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
            {personal.role.split(' ').slice(0, 2).join(' ')}
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--orange)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          ))}
          <a href={personal.resumeUrl} download className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}>
            Resume ↓
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none', fontSize: '1.5rem', zIndex: 1100 }}
          className="burger-btn"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, top: 'var(--nav-height)',
          background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '2.5rem', zIndex: 999,
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--orange)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
            >
              {link.label}
            </a>
          ))}
          <a href={personal.resumeUrl} download className="btn-primary">Resume ↓</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
