import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  return (

    <nav
      className={`fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2

      ${
        scrolled
          ? 'top-5 w-[85%] rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl py-4'
          : 'top-0 w-full bg-white py-5'
      }

      `}
    >

      <div className="flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40">

        <div className="flex items-center gap-3">

          <h1 className="text-2xl font-black tracking-tight">
            <span className="text-black">Pratibha</span>
            <span className="text-blue-800">IT</span>
            <span className="text-black">Solution</span>
          </h1>

        </div>

        <div className='flex-1 flex justify-center items-center text-gray-700 sm:text-sm gap-5'>
        <a href="#" className='sm:hover:border-b hover:text-blue-900'>Home</a>
        <a href="#About" className='sm:hover:border-b hover:text-blue-900'>About</a>
        <a href="#Services" className='sm:hover:border-b hover:text-blue-900'>Services</a>
        <a href="#WhyUs" className='sm:hover:border-b hover:text-blue-900'>Why Us</a>
      </div>
        <button className="bg-blue-800 text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-blue-900 transition-all duration-100">
  Contact Us
        </button>
      </div>

    </nav>
  )
}

export default Navbar