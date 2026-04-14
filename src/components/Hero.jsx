import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiArrowDown, FiDownload, FiUser } from 'react-icons/fi'
import { personal, social } from '../data/portfolio'
import port from "../../public/images/prot.jpeg"

function Counter({ target, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let n = 0
        const step = target / 40
        const t = setInterval(() => {
          n += step
          if (n >= target) { setCount(target); clearInterval(t) }
          else setCount(Math.floor(n))
        }, 40)
      }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--orange)', lineHeight: 1 }}>{count}+</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.2rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 50; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 1.2 + 0.3, sx: (Math.random() - 0.5) * 0.35, sy: (Math.random() - 0.5) * 0.35, op: Math.random() * 0.35 + 0.08 })
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.sx; p.y += p.sy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168,85,247,${p.op})`; ctx.fill()
      })
      particles.forEach((p1, i) => particles.slice(i + 1).forEach(p2 => {
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y)
        if (d < 100) { ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.strokeStyle = `rgba(168,85,247,${0.05 * (1 - d / 100)})`; ctx.stroke() }
      }))
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId) }
  }, [])

  const socials = [
    { icon: <FiLinkedin />, href: social.linkedin, label: 'LinkedIn' },
    { icon: <FiGithub />, href: social.github, label: 'GitHub' },
    { icon: <FiInstagram />, href: social.instagram, label: 'Instagram' },
  ].filter(s => s.href)

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 'var(--nav-height)' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
      <div className="grid-bg" style={{ opacity: 0.3 }} />
      <div className="glow-orb" style={{ width: 700, height: 700, background: 'var(--orange)', top: '-15%', right: '-15%', opacity: 0.07 }} />
      <div className="glow-orb" style={{ width: 400, height: 400, background: 'var(--orange-dim)', bottom: '0%', left: '-10%', opacity: 0.05 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-grid">

          {/* LEFT CONTENT */}
          <div className="hero-content">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)',
              borderRadius: 100, padding: '0.4rem 1rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)',
              marginBottom: '1.75rem', animation: 'heroFadeUp 0.6s 0.1s ease both',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s ease infinite', display: 'inline-block' }} />
              Available for opportunities
            </div>

            <div style={{ animation: 'heroFadeUp 0.6s 0.2s ease both', marginBottom: '0.75rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)',color : "white", letterSpacing: '0.15em', marginBottom: '0.4rem' }}>Hello, I'm</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.92, letterSpacing: '0.02em' }}>
                {personal.name.split(' ')[0]}
                <span style={{ color: 'var(--orange)' }}> {personal.name.split(' ')[1]}</span>
              </h1>
            </div>

            <div style={{
              animation: 'heroFadeUp 0.6s 0.3s ease both',
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.2vw, 1.5rem)',
              color: 'var(--orange)', letterSpacing: '0.06em', marginBottom: '0.5rem',
            }}>
              Java Full Stack Developer
            </div>

            <div style={{
              animation: 'heroFadeUp 0.6s 0.35s ease both',
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
              color: 'var(--text-muted)', letterSpacing: '0.06em', marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              <span style={{ color: 'var(--orange)', opacity: 0.7 }}>✦</span>
              Designing is my hobby
              <span style={{ color: 'var(--orange)', opacity: 0.7 }}>✦</span>
            </div>

            <p style={{
              animation: 'heroFadeUp 0.6s 0.4s ease both',
              color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
              maxWidth: 460, lineHeight: 1.75, marginBottom: '2.5rem',
            }}>
              {personal.tagline}
            </p>

            <div style={{ animation: 'heroFadeUp 0.6s 0.5s ease both', display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href={personal.resumeUrl} download className="btn-outline">
                <FiDownload size={14} /> Download CV
              </a>
            </div>

            <div style={{ animation: 'heroFadeUp 0.6s 0.6s ease both', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: 40, height: 40, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    color: 'var(--text-secondary)', fontSize: '1.1rem', textDecoration: 'none',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.color = 'var(--orange)'; e.currentTarget.style.background = 'var(--orange-glow)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-card)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo + Stats */}
          <div className="hero-right">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              {/* Spinning glow ring */}
              <div style={{
                position: 'absolute', inset: -12, borderRadius: '50%',
                background: 'conic-gradient(var(--orange), var(--orange-dim), transparent, var(--orange))',
                animation: 'spin 8s linear infinite', opacity: 0.2,
              }} />
              {/* Photo circle */}
              <div style={{
                width: 'clamp(180px, 25vw, 280px)', height: 'clamp(180px, 25vw, 280px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a1a2e, #13131f)',
                border: '3px solid rgba(168,85,247,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 0 60px rgba(168,85,247,0.15)',
              }}>
                {/*
                  TO ADD YOUR PHOTO:
                  1. Place photo in: public/images/najeeb.jpg
                  2. Replace this block with:
                     <img src="/images/najeeb.jpg" alt="Najeeb S"
                       style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                */}
                {/* <img src={port} alt="Najeeb S"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ textAlign: 'center', opacity: 0.45 }}>
                  <FiUser size={50} color="var(--orange)" />
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--orange)', marginTop: '0.5rem', letterSpacing: '0.06em' }}>YOUR PHOTO</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>public/images/najeeb.jpg</div>
                </div> */}
                <img
                  src={port}
                  alt="Najeeb S"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block"
                  }}
                />
              </div>

              {/* Floating badge Dev */}
              <div style={{
                position: 'absolute', bottom: '5%', left: '-15%',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 10, padding: '0.5rem 0.8rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)', animation: 'float 4s ease-in-out infinite',
                whiteSpace: 'nowrap', zIndex: 2,
              }}>
                {'</>'} Full Stack Dev
              </div>

              {/* Floating badge Design */}
              <div style={{
                position: 'absolute', top: '5%', right: '-15%',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 10, padding: '0.5rem 0.8rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange-bright)',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)', animation: 'float 5s 1.2s ease-in-out infinite',
                whiteSpace: 'nowrap', zIndex: 2,
              }}>
                ✦ Design Hobbyist
              </div>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap',
              marginTop: '2.5rem',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '1.25rem 2rem',
              animation: 'heroFadeRight 0.8s 0.6s ease both',
            }}>
              <Counter target={10} label="Technologies" />
              <div style={{ width: 1, background: 'var(--border)', alignSelf: 'stretch' }} />
              <Counter target={3} label="Projects" />
              <div style={{ width: 1, background: 'var(--border)', alignSelf: 'stretch' }} />
              <Counter target={3} label="Internships" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)',
        letterSpacing: '0.12em', animation: 'float 2s ease-in-out infinite',
      }}>
        <span>SCROLL</span>
        <FiArrowDown style={{ color: 'var(--orange)' }} />
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          padding: 4rem 0 5rem;
        }
        .hero-content { display: flex; flex-direction: column; align-items: flex-start; }
        .hero-right { display: flex; flex-direction: column; align-items: center; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; padding: 3rem 0 4rem; }
          .hero-content { align-items: center; }
          .hero-right { order: -1; }
        }
        @media (max-width: 480px) {
          .hero-grid { gap: 2.5rem; padding: 2.5rem 0 3.5rem; }
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
