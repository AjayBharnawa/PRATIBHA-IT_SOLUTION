import React from 'react'

import {
  PhoneCall,
  ClipboardList,
  Code2,
  Rocket
} from 'lucide-react'

const Process = () => {
  return (

    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-4xl sm:text-5xl font-black text-black">
          Our Simple
          <span className="text-blue-800"> Process</span>
        </h1>

        <div className="w-40 h-1 bg-blue-800 rounded-full mx-auto mt-3"></div>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A smooth, transparent, and efficient workflow designed
          to deliver high-quality educational technology solutions.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

        {/* CARD 1 */}
        <div className="group relative bg-white rounded-3xl p-8 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]">

          {/* Background Glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 group-hover:scale-150 transition-all duration-700"></div>

          {/* Icon */}
          <div className="relative z-10 w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

            <PhoneCall className="w-10 h-10 text-blue-700" />

          </div>

          {/* Number */}
          <div className="relative z-10 mt-6 text-6xl font-black text-blue-100 group-hover:text-blue-200 transition-all duration-500">
            01
          </div>

          {/* Title */}
          <h2 className="relative z-10 mt-2 text-2xl font-black text-black">
            Consultation
          </h2>

          {/* Description */}
          <p className="relative z-10 mt-4 text-gray-600 leading-relaxed">
            We understand your institution’s needs, goals,
            and challenges through detailed discussion
            and requirement analysis.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="group relative bg-white rounded-3xl p-8 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]">

          <div className="absolute -top-16 -right-16 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40 group-hover:scale-150 transition-all duration-700"></div>

          <div className="relative z-10 w-20 h-20 rounded-3xl bg-green-100 flex items-center justify-center transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">

            <ClipboardList className="w-10 h-10 text-green-700" />

          </div>

          <div className="relative z-10 mt-6 text-6xl font-black text-green-100 group-hover:text-green-200 transition-all duration-500">
            02
          </div>

          <h2 className="relative z-10 mt-2 text-2xl font-black text-black">
            Planning
          </h2>

          <p className="relative z-10 mt-4 text-gray-600 leading-relaxed">
            We create a clear roadmap, system structure,
            and timeline to ensure smooth and efficient
            project execution.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="group relative bg-white rounded-3xl p-8 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(234,179,8,0.18)]">

          <div className="absolute -top-16 -right-16 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-40 group-hover:scale-150 transition-all duration-700"></div>

          <div className="relative z-10 w-20 h-20 rounded-3xl bg-yellow-100 flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

            <Code2 className="w-10 h-10 text-yellow-600" />

          </div>

          <div className="relative z-10 mt-6 text-6xl font-black text-yellow-100 group-hover:text-yellow-200 transition-all duration-500">
            03
          </div>

          <h2 className="relative z-10 mt-2 text-2xl font-black text-black">
            Development
          </h2>

          <p className="relative z-10 mt-4 text-gray-600 leading-relaxed">
            Our team develops secure, user-friendly solutions
            with regular updates and quality testing.
          </p>

        </div>

        <div className="group relative bg-white rounded-3xl p-8 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(147,51,234,0.18)]">

          <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-40 group-hover:scale-150 transition-all duration-700"></div>

          <div className="relative z-10 w-20 h-20 rounded-3xl bg-purple-100 flex items-center justify-center transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">

            <Rocket className="w-10 h-10 text-purple-700" />

          </div>

          <div className="relative z-10 mt-6 text-6xl font-black text-purple-100 group-hover:text-purple-200 transition-all duration-500">
            04
          </div>

          <h2 className="relative z-10 mt-2 text-2xl font-black text-black">
            Launch & Support
          </h2>

          <p className="relative z-10 mt-4 text-gray-600 leading-relaxed">
            We deploy the system smoothly and provide
            ongoing support, training, and maintenance.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Process