import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import Message from './sections/Message'
import FlavourSection from './sections/FlavourSection'
import { useGSAP } from '@gsap/react'
import Nutrition from './sections/Nutrition'
import Benefit from './sections/Benefit'
import Testimonial from './sections/Testimonial'
import Footer from './sections/Footer'
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = () => {


  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-auto">
      <Navbar />
          <Hero />
          <Message />
          <FlavourSection />
          <Nutrition />

          <div>
          <Benefit />
          <Testimonial />
          </div>

          <Footer />      
    </ReactLenis>
  )
}

export default App
