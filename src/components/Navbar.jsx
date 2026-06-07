import React, { useEffect, useState } from 'react'

import {
  Link,
  NavLink
} from 'react-router-dom'

import {
  Menu,
  X
} from 'lucide-react'

import logo from '../assets/images/logo.png'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)

  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true)
      }

      else {
        setScrolled(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },

    {
      name: 'About',
      path: '/about'
    },

    {
      name: 'Services',
      path: '/services'
    },

    {
      name: 'Why Us',
      path: '/whyus'
    },

    {
      name: 'Contact',
      path: '/contact'
    }
  ]

  return (

    <nav
      className={`fixed z-50 transition-all duration-700 left-1/2 -translate-x-1/2

      ${
        scrolled
          ? 'top-5 w-[92%] lg:w-[85%] rounded-2xl bg-white backdrop-blur-xl shadow-2xl py-4'
          : 'top-0 w-full bg-white py-5'
      }
      `}
    >

      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-24">

        {/* Logo */}
        <Link to="/">

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />

            <h1 className="text-xl sm:text-2xl font-black tracking-tight">

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

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center text-gray-700 gap-8">

          {navLinks.map((link, index) => (

            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-800 font-bold'
                  : 'hover:text-blue-800 transition-all duration-300'
              }
            >

              {link.name}

            </NavLink>

          ))}

        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">

          <Link to="/contact">

            <button className="bg-blue-800 text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-blue-900 transition-all duration-300 shadow-lg">

              Contact Us

            </button>

          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-black"
        >

          {
            mobileMenu
              ? <X size={30} />
              : <Menu size={30} />
          }

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500

        ${
          mobileMenu
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }
        `}
      >

        <div className="px-6 pt-6 pb-8 bg-white/95 backdrop-blur-xl space-y-5 shadow-2xl rounded-b-3xl">

          {navLinks.map((link, index) => (

            <NavLink
              key={index}
              to={link.path}
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                `block text-lg transition-all duration-300

                ${
                  isActive
                    ? 'text-blue-800 font-bold'
                    : 'text-gray-700 hover:text-blue-800'
                }
                `
              }
            >

              {link.name}

            </NavLink>

          ))}

          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
          >

            <button className="w-full mt-4 bg-blue-800 text-white py-3 rounded-full font-bold hover:bg-blue-900 transition-all duration-300">

              Contact Us

            </button>

          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar