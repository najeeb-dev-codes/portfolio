import { useInView } from 'react-intersection-observer'
import { FiAward, FiCalendar, FiHash } from 'react-icons/fi'
import { certifications } from '../data/portfolio'

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref} style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem',
      position: 'relative', overflow: 'hidden',
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(30px)',
      transition: `opacity 0.7s ${index * 0.12}s ease, transform 0.7s ${index * 0.12}s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = cert.color + '66'
        e.currentTarget.style.boxShadow = `0 8px 32px ${cert.color}22`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Side accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
        background: `linear-gradient(180deg, ${cert.color}, transparent)`,
        borderRadius: '4px 0 0 4px',
      }} />

      {/* Background large icon */}
      <div style={{
        position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
        opacity: 0.04, fontSize: '6rem',
      }}>
        🏆
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: 44, height: 44, flexShrink: 0,
          background: `${cert.color}15`,
          border: `1px solid ${cert.color}33`,
          borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: cert.color,
        }}>
          <FiAward size={20} />
        </div>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.3rem',
            letterSpacing: '0.02em', lineHeight: 1.2, marginBottom: '0.2rem',
          }}>
            {cert.title}
          </h3>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem', color: cert.color }}>
            {cert.issuer}
          </div>
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
        {cert.description}
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          <FiCalendar size={12} style={{ color: cert.color }} />
          {cert.date}
        </div>
        {cert.credentialId && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            <FiHash size={12} style={{ color: cert.color }} />
            {cert.credentialId}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-label">Achievements</div>
        <h2 className="section-title">
          Certifications &amp; <span style={{ color: 'var(--orange)' }}>Training</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

       
      </div>
    </section>
  )
}
