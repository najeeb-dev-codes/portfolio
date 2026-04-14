import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data/portfolio'

const categories = [
  { key: 'all', label: 'All Skills' },
  { key: 'dev', label: 'Development' },
  { key: 'design', label: 'Design' },
  { key: 'tools', label: 'Tools' },
]

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
          {name}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--orange)' }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${animate ? 'animate' : ''}`}
          style={{ width: `${level}%`, transitionDelay: `${Math.random() * 0.3}s` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('all')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (inView) setTimeout(() => setAnimate(true), 200)
  }, [inView])

  const filtered = active === 'all' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }} ref={ref}>
      <div className="container">
        <div className="section-label">What I Know</div>
        <h2 className="section-title">
          My <span style={{ color: 'var(--orange)' }}>Skills</span>
        </h2>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button key={cat.key} onClick={() => setActive(cat.key)}
              style={{
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.8rem', letterSpacing: '0.05em',
                padding: '0.5rem 1.25rem', borderRadius: 6, border: 'none',
                cursor: 'pointer', transition: 'var(--transition)',
                background: active === cat.key ? 'var(--orange)' : 'var(--bg-card)',
                color: active === cat.key ? '#000' : 'var(--text-secondary)',
                border: active === cat.key ? 'none' : '1px solid var(--border)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem 4rem',
        }}>
          {filtered.map(skill => (
            <SkillBar key={skill.name} {...skill} animate={animate} />
          ))}
        </div>

        {/* Tech stack icons row */}
        <div style={{
          marginTop: '4rem', padding: '2rem',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          justifyContent: 'center', alignItems: 'center',
        }}>
          {['Java', 'Spring', 'React', 'MySQL', 'MongoDB', 'HTML5', 'CSS3', 'JS', 'Python', 'WordPress'].map(tech => (
            <div key={tech} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              color: 'var(--text-muted)', padding: '0.4rem 0.8rem',
              border: '1px solid var(--border)', borderRadius: 6,
              transition: 'var(--transition)', cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.borderColor = 'var(--orange)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
