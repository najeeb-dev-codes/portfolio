import { useInView } from 'react-intersection-observer'
import { FiCode, FiFeather, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { personal } from '../data/portfolio'

function InfoBadge({ icon, text }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.6rem',
      fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)',
    }}>
      <span style={{ color: 'var(--orange)' }}>{icon}</span>
      {text}
    </div>
  )
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem',
          alignItems: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          {/* Left — visual */}
          <div style={{ position: 'relative' }}>
            {/* Big letter N */}
            <div style={{
              position: 'absolute', top: '-2rem', left: '-2rem',
              fontFamily: 'var(--font-display)', fontSize: '14rem',
              color: 'rgba(255,107,0,0.04)', lineHeight: 1, pointerEvents: 'none',
              userSelect: 'none', zIndex: 0,
            }}>N</div>

            <div style={{
              position: 'relative', zIndex: 1,
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)', padding: '2.5rem',
              overflow: 'hidden',
            }}>
              {/* Top orange bar */}
              <div style={{ height: 3, background: 'linear-gradient(90deg, var(--orange), transparent)', borderRadius: 2, marginBottom: '2rem' }} />

              {/* Avatar placeholder */}
              <div style={{
                width: 100, height: 100, borderRadius: 16,
                background: 'linear-gradient(135deg, var(--orange), var(--orange-dim))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                color: '#000', marginBottom: '1.5rem',
                boxShadow: '0 8px 32px rgba(255,107,0,0.3)',
              }}>
                NS
              </div>

              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '0.25rem' }}>
                {personal.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--orange)', marginBottom: '2rem', letterSpacing: '0.08em' }}>
                {personal.role}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <InfoBadge icon={<FiMapPin size={14} />} text={personal.location} />
                <InfoBadge icon={<FiMail size={14} />} text={personal.email} />
                <InfoBadge icon={<FiPhone size={14} />} text={personal.phone} />
              </div>

              {/* Two passion tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--orange-glow)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 6, padding: '0.4rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--orange)' }}>
                  <FiCode size={12} /> Developer
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--orange-glow)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 6, padding: '0.4rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--orange)' }}>
                  <FiFeather size={12} /> Designer
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Code. Design.<br />
              <span style={{ color: 'var(--orange)' }}>Create.</span>
            </h2>

            {personal.about.split('\n\n').map((para, i) => (
              <p key={i} style={{
                color: 'var(--text-secondary)', lineHeight: 1.8,
                marginBottom: '1.25rem', fontSize: '1rem',
              }}>
                {para}
              </p>
            ))}

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">See My Work</a>
              <a href={personal.resumeUrl} download className="btn-outline">Download CV</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
