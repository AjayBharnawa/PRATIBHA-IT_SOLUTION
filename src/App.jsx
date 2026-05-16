import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {

  return (

    <div className='relative'>

      <Navbar />

      <main className="pt-20">

        <Hero />

        <About />

        <Services />

        <WhyUs />

        <Process />

        <ContactSection />
        
        <Footer />

      </main>

    </div>
  )
}

export default App