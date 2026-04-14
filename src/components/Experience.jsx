import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'
import { experience } from '../data/portfolio'

function ExpCard({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const isTraining = exp.type === 'Training'

  return (
    <div ref={ref} style={{
      display: 'flex', gap: '2rem', alignItems: 'flex-start',
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateX(-30px)',
      transition: `opacity 0.7s ${index * 0.15}s ease, transform 0.7s ${index * 0.15}s ease`,
    }}>
      {/* Timeline dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: isTraining ? 'var(--orange)' : 'var(--bg-card)',
          border: `2px solid ${isTraining ? 'var(--orange)' : 'var(--border)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: isTraining ? '#000' : 'var(--orange)',
          flexShrink: 0,
          boxShadow: isTraining ? '0 0 20px rgba(255,107,0,0.3)' : 'none',
        }}>
          <FiBriefcase size={18} />
        </div>
        {index < experience.length - 1 && (
          <div style={{ width: 2, flex: 1, background: 'var(--border)', minHeight: 60, marginTop: 8 }} />
        )}
      </div>

      {/* Content */}
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', padding: '1.75rem',
        flex: 1, marginBottom: '1.5rem',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)'; e.currentTarget.style.boxShadow = 'var(--shadow-orange)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            background: isTraining ? 'rgba(255,107,0,0.15)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isTraining ? 'rgba(255,107,0,0.3)' : 'var(--border)'}`,
            color: isTraining ? 'var(--orange)' : 'var(--text-muted)',
            padding: '0.15rem 0.5rem', borderRadius: 4, letterSpacing: '0.06em',
          }}>
            {exp.type}
          </span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.02em', marginBottom: '0.3rem' }}>
          {exp.role}
        </h3>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--orange)', marginBottom: '0.75rem' }}>
          {exp.company}
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            <FiMapPin size={12} style={{ color: 'var(--orange)' }} /> {exp.location}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            <FiCalendar size={12} style={{ color: 'var(--orange)' }} /> {exp.duration}
          </div>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {exp.points.map((point, i) => (
            <li key={i} style={{
              display: 'flex', gap: '0.6rem',
              color: 'var(--text-secondary)', fontSize: '0.875rem',
              lineHeight: 1.6, marginBottom: '0.5rem',
            }}>
              <span style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '0.1rem' }}>▸</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="section-label">My Journey</div>
          <h2 className="section-title">
            Experience &amp; <span style={{ color: 'var(--orange)' }}>Training</span>
          </h2>

          <div>
            {experience.map((exp, i) => ( 
              <ExpCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
