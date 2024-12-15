import { useEffect } from 'react'
import { setupAnimationObserver } from './utils/animationObserver'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import PainPoints from './components/sections/PainPoints'
import Solution from './components/sections/Solution'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './styles/index.css'

function App() {
  useEffect(() => {
    setupAnimationObserver()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(46, 47, 48, 0.95)'
      } else {
        navbar.style.backgroundColor = 'rgba(46, 47, 48, 0.8)'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Hero />
        <PainPoints />
        <Solution />
        <Features />
        
       
        <Pricing />
       
        <FAQ />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App 