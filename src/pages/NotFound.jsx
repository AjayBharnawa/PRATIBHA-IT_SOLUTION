import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaExclamationTriangle,
  FaArrowLeft,
  FaHome
} from 'react-icons/fa'

const NotFound = () => {
  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-[40px] shadow-2xl px-8 sm:px-16 py-16 text-center max-w-2xl w-full hover:scale-[1.01] transition-all duration-700">

        {/* Icon */}
        <div className="flex justify-center">

          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-5xl shadow-lg animate-bounce">

            <FaExclamationTriangle />

          </div>

        </div>

        {/* 404 */}
        <h1 className="mt-10 text-7xl sm:text-8xl font-black text-black tracking-tight">

          4<span className="text-black">0</span>4

        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl sm:text-4xl font-black text-black">

          Page Not Found

        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">

          Oops! The page you are looking for does not exist
          or may have been moved.

        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* Home */}
          <Link to="/">

            <button className="group bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 shadow-xl flex items-center gap-3">

              <FaHome className="group-hover:scale-110 transition-all duration-300" />

              Back To Home

            </button>

          </Link>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="group border border-gray-300 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 flex items-center gap-3"
          >

            <FaArrowLeft className="group-hover:-translate-x-1 transition-all duration-300" />

            Go Back

          </button>

        </div>

      </div>

    </div>
  )
}

export default NotFound