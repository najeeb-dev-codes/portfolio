import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref} style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(40px)',
      transition: `opacity 0.7s ${index * 0.15}s ease, transform 0.7s ${index * 0.15}s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,107,0,0.4)'
        e.currentTarget.style.boxShadow = 'var(--shadow-orange)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top color bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Mock preview area */}
      <div style={{
        height: 180,
        background: `linear-gradient(135deg, rgba(255,107,0,0.05), rgba(0,0,0,0))`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
      }}>
        {/* Abstract code lines decoration */}
        <div style={{ position: 'absolute', inset: 0, padding: '1.5rem', opacity: 0.3 }}>
          {[70, 50, 85, 40, 65].map((w, i) => (
            <div key={i} style={{
              height: 2, background: 'var(--orange)',
              width: `${w}%`, marginBottom: '0.6rem', borderRadius: 2,
              opacity: 0.4 + (i * 0.1),
            }} />
          ))}
        </div>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: '3rem',
          color: 'rgba(255,107,0,0.15)', letterSpacing: '0.05em', zIndex: 1,
        }}>
          {project.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
        </div>
        {project.featured && (
          <div style={{
            position: 'absolute', top: '1rem', right: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.3rem',
            background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.3)',
            borderRadius: 4, padding: '0.25rem 0.5rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--orange)',
          }}>
            <FiStar size={10} /> Featured
          </div>
        )}
      </div>

      <div style={{ padding: '1.75rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)',color : "whitesmoke", marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
          {project.subtitle}
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
              <FiExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
              <FiGithub size={14} /> Code
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              Link coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label">What I've Built</div>
        <h2 className="section-title">
          Featured <span style={{ color: 'var(--orange)' }}>Projects</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Add more prompt */}
        <div style={{
          marginTop: '3rem', textAlign: 'center',
          padding: '2rem',
          border: '1px dashed rgba(255,107,0,0.2)',
          borderRadius: 'var(--radius-lg)',
          fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)',
        }}>
          More projects coming soon — stay tuned 🚀
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #projects .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
