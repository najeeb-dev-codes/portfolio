import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Works from './components/Works'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{
        style: { background: '#13131f', color: '#f0f0f0', border: '1px solid rgba(168,85,247,0.3)' }
      }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Works />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
