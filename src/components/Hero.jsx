import React from 'react'
import pratibhaVideo from '../assets/pratibhavideo.mp4'
import groupp from '../assets/groupp.jpeg'

const Hero = () => {
  return (

     <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-0 pb-8 -mt-10">        
      <div className="flex justify-center my-1">
      <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='w-20 object-cover rounded-3xl' src={groupp} alt="Groupp" />
        <p className='text-xs font-medium'>Trusted by 120+ Schools & collages</p>

      </div>
      </div>

      <div className="relative h-[75vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={pratibhaVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none">

            <span className="text-white">
              Pratibha
            </span>

            <span className="text-blue-800">
              {" "}IT{" "}
            </span>

            <span className="text-white">
              Solution
            </span>

          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            Innovative IT solutions for modern businesses.
          </p>

          <button className="mt-8 bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl">
            Get Started
          </button>

        </div>

      </div>

      <div className="relative mt-20 p-8 rounded-3xl border border-gray-200 bg-white shadow-3xl overflow-hidden my-10 transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_0_60px_rgba(30,64,175,0.45)] group">

  {/* Blue Glow Effect */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition-all duration-500"></div>

  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500"></div>

  <div className="relative z-10 h-[250px] flex flex-col justify-center">

    <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
      Empowering
    </h2>

    <h2 className="text-3xl sm:text-4xl font-black text-blue-800 leading-tight">
      Education Through
    </h2>

    <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
      Technology
    </h2>

    <p className="mt-5 text-gray-600 text-lg leading-relaxed">
      Smart Websites, Powerful CRM & Seamless Automation —
      Built Exclusively for Modern Educational Institutions.
    </p>

    <button className="mt-7 w-fit bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 hover:gap-3">

      Explore

      <span className="text-xl">
        →
      </span>

    </button>

  </div>



      </div>

    </div>
  )
}

export default Hero