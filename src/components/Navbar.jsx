import React, { useEffect, useState } from 'react'

import logo from '../assets/images/logo.png'

import { Link } from 'react-router-dom'

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
      className={`fixed z-50 transition-all duration-700 left-1/2 -translate-x-1/2

      ${
        scrolled
          ? 'top-5 w-[85%] rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl py-4'
          : 'top-0 w-full bg-white py-5'
      }

      `}
    >

      <div className="flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40">

        {/* Logo */}
        <Link to="/">

          <div className="flex items-center gap-3 cursor-pointer">

            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />

            <h1 className="text-2xl font-black tracking-tight">

              <span className="text-black">
                Pratibha
              </span>

              <span className="text-blue-800">
                IT
              </span>

              <span className="text-black">
                Solution
              </span>

            </h1>

          </div>

        </Link>

        {/* Menu   */}
        <div className='flex-1 flex justify-center items-center text-gray-700 sm:text-sm gap-7'>

          <Link
            to="/"
            className='hover:text-blue-900 transition-all duration-300'
          >
            Home
          </Link>

          <Link
            to="/about"
            className='hover:text-blue-900 transition-all duration-300'
          >
            About
          </Link>

          <Link
            to="/services"
            className='hover:text-blue-900 transition-all duration-300'
          >
            Services
          </Link>

          <Link
            to="/whyus"
            className='hover:text-blue-900 transition-all duration-300'
          >
            Why Us
          </Link>

        </div>

        {/* Contact Button */}
        <Link to="/contact">

          <button className="bg-blue-800 text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-blue-900 transition-all duration-300 shadow-lg">

            Contact Us

          </button>

        </Link>

      </div>

    </nav>
  )
}

export default Navbar