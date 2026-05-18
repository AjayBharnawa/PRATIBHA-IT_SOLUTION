import React from 'react'

import { Link } from 'react-router-dom'

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa'

const Footer = () => {
  return (

    <footer className="bg-white border-t border-gray-200 overflow-hidden">

      {/* Main Footer */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div>

            <h1 className="text-3xl font-black leading-tight text-black">

              Pratibha
              <span className="text-blue-800"> IT </span>
              <span className="text-black">
                Solutions
              </span>

            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">

              Empowering schools, colleges & institutes
              with smart websites, Education CRM,
              automation and reliable IT support.

            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              {/* Instagram */}
              <a
                href="#"
                className="group w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-pink-500 transition-all duration-500 hover:scale-110"
              >

                <FaInstagram className="text-gray-700 text-lg group-hover:text-white transition-all duration-500" />

              </a>

              {/* Facebook */}
              <a
                href="#"
                className="group w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 transition-all duration-500 hover:scale-110"
              >

                <FaFacebookF className="text-gray-700 text-lg group-hover:text-white transition-all duration-500" />

              </a>

              {/* Linkedin */}
              <a
                href="#"
                className="group w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-cyan-600 transition-all duration-500 hover:scale-110"
              >

                <FaLinkedinIn className="text-gray-700 text-lg group-hover:text-white transition-all duration-500" />

              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-2xl font-bold text-black">
              Quick Links
            </h2>

            <div className="w-20 h-1 bg-blue-800 rounded-full mt-3"></div>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li>

                <Link
                  to="/"
                  className="group flex items-center gap-2 hover:text-blue-700 transition-all duration-300"
                >

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-300" />

                  Home

                </Link>

              </li>

              <li>

                <Link
                  to="/about"
                  className="group flex items-center gap-2 hover:text-blue-700 transition-all duration-300"
                >

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-300" />

                  About Us

                </Link>

              </li>

              <li>

                <Link
                  to="/services"
                  className="group flex items-center gap-2 hover:text-blue-700 transition-all duration-300"
                >

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-300" />

                  Services

                </Link>

              </li>

              <li>

                <Link
                  to="/whyus"
                  className="group flex items-center gap-2 hover:text-blue-700 transition-all duration-300"
                >

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-300" />

                  Why Us

                </Link>

              </li>

              <li>

                <Link
                  to="/contact"
                  className="group flex items-center gap-2 hover:text-blue-700 transition-all duration-300"
                >

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-300" />

                  Contact

                </Link>

              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h2 className="text-2xl font-bold text-black">
              Our Services
            </h2>

            <div className="w-20 h-1 bg-blue-800 rounded-full mt-3"></div>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li className="hover:text-blue-700 transition-all duration-300 cursor-pointer">
                Education Websites
              </li>

              <li className="hover:text-blue-700 transition-all duration-300 cursor-pointer">
                Admission & Student CRM
              </li>

              <li className="hover:text-blue-700 transition-all duration-300 cursor-pointer">
                Website Design & Development
              </li>

              <li className="hover:text-blue-700 transition-all duration-300 cursor-pointer">
                IT Consulting & Support
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-2xl font-bold text-black">
              Contact Us
            </h2>

            <div className="w-20 h-1 bg-blue-800 rounded-full mt-3"></div>

            <div className="mt-6 space-y-6 text-gray-600 leading-relaxed">

              {/* Address */}
              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">

                  <FaMapMarkerAlt />

                </div>

                <p>

                  OD-HND-AMA-90D-011,
                  Hindol NAC, Dhenkanal,
                  Odisha, 759022

                </p>

              </div>

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">

                  <FaEnvelope />

                </div>

                <p>
                  support@pratibhait.com
                </p>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">

                  <FaPhoneAlt />

                </div>

                <p>
                  +91 7684839593
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-white">

        <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-6 text-center text-gray-500 text-sm">

          © 2026 Pratibha IT Solutions. All rights reserved.

        </div>

      </div>

    </footer>
  )
}

export default Footer