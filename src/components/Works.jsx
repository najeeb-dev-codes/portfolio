import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FiImage } from 'react-icons/fi'
import { works } from '../data/portfolio'

const filters = [
  { key: 'all', label: 'All Works' },
  { key: 'logo', label: 'Logo Design' },
  { key: 'illustration', label: 'Illustration' },
]

function WorkCard({ work, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hovered, setHovered] = useState(false)

  // Generate a unique abstract svg placeholder per item
  const colors = ['#FF6B00', '#FF8C00', '#CC5500', '#FF4500']
  const c = colors[index % colors.length]

  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'rgba(255,107,0,0.4)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'scale(0.95)',
        transition: `opacity 0.6s ${index * 0.1}s ease, transform 0.6s ${index * 0.1}s ease, border-color 0.3s ease`,
        boxShadow: hovered ? 'var(--shadow-orange)' : 'none',
      }}
    >
      {/* Image or Placeholder */}
      <div style={{
        height: 220, position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #111, #1a1a1a)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 0.4s ease',
      }}>
        {work.imageUrl && !work.placeholder ? (
          <img src={work.imageUrl} alt={work.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          // Abstract placeholder
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', opacity: 0.4 }}>
            <FiImage size={40} color={c} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: c, letterSpacing: '0.1em' }}>
              {work.category === 'logo' ? 'LOGO DESIGN' : 'ILLUSTRATION'}
            </span>
          </div>
        )}
        {/* Overlay on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(255,107,0,0.08)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }} />
        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          background: `${c}22`, border: `1px solid ${c}44`,
          color: c, padding: '0.2rem 0.5rem', borderRadius: 4,
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {work.category}
        </div>
      </div>

      <div style={{ padding: '1.25rem' }}>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.25rem', letterSpacing: '0.02em' }}>
          {work.title}
        </h4>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {work.description}
        </p>
      </div>
    </div>
  )
}

export default function Works() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? works : works.filter(w => w.category === active)

  return (
    <section id="works" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-label">Design Portfolio</div>
        <h2 className="section-title">
          Logos &amp; <span style={{ color: 'var(--orange)' }}>Illustrations</span>
        </h2>

      

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem' }}>
          {filters.map(f => (
            <button key={f.key} onClick={() => setActive(f.key)}
              style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8rem',
                padding: '0.5rem 1.25rem', borderRadius: 6, border: 'none',
                cursor: 'pointer', transition: 'var(--transition)',
                background: active === f.key ? 'var(--orange)' : 'var(--bg-card)',
                color: active === f.key ? '#000' : 'var(--text-secondary)',
                outline: active !== f.key ? '1px solid var(--border)' : 'none',
              }}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
