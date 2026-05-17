import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import ContactSection from '../components/ContactSection'

import React from 'react'

const Home = () => {
  return (

    <div className='relative overflow-x-hidden'>

      <Navbar />

      <main className="pt-20">

        <Hero />

        <About />

        <Services />

        <WhyUs />

        <Process />

        <ContactSection />


      </main>

    </div>
  )
}

export default Home