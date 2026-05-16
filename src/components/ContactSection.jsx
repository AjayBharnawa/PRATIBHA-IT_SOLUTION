import React from 'react'

const ContactSection = () => {
  return (

    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24 bg-white">

      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 px-8 sm:px-16 py-16 shadow-2xl">

        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Ready to Digitize
              <br />
              Your Institution?
            </h1>

            <p className="mt-5 text-lg text-blue-100 leading-relaxed max-w-2xl">
              Let us help you simplify operations &
              enhance learning experience.
            </p>

          </div>

          {/* Button */}
          <button className="group bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:bg-blue-100 shadow-xl flex items-center gap-3">

            Contact Pratibha IT Solution

            <span className="transition-all duration-500 group-hover:translate-x-1">
              →
            </span>

          </button>

        </div>

      </div>

    </div>
  )
}

export default ContactSection