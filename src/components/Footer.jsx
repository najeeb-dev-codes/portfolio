import { FiHeart, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { personal, social } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 0 2rem',
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 36, height: 36, background: 'var(--orange)', borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#000',
            }}>NS</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.05em' }}>{personal.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{personal.role}</div>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {['#about', '#skills', '#projects', '#works', '#certifications', '#contact'].map(href => (
              <a key={href} href={href} style={{
                fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.8rem',
                color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.03em',
                transition: 'color 0.2s', textTransform: 'capitalize',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: <FiLinkedin />, href: social.linkedin },
              { icon: <FiGithub />, href: social.github },
              { icon: <FiInstagram />, href: social.instagram },
            ].filter(s => s.href).map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 36, height: 36, borderRadius: 6, border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1rem',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.color = 'var(--orange)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            © {year} {personal.name} — Built with <FiHeart size={11} style={{ color: 'var(--orange)' }} /> using React &amp; Vite
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            Available for freelance &amp; full-time roles
          </div>
        </div>
      </div>
    </footer>
  )
}
