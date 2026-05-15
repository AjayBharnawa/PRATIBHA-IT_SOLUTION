import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {


  return (
    <div className='relative'>
      <Navbar  />
      <main className="pt-24">
      <Hero />
      </main> 
      <About />
    </div>
  )
}

export default App