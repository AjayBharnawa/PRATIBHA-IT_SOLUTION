import React from 'react'

import {
  GraduationCap,
  BadgeDollarSign,
  Smile,
  ShieldCheck
} from 'lucide-react'

const WhyUs = () => {
  return (

    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24 bg-white">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-4xl sm:text-5xl font-black text-black">
          Why Choose
          <span className="text-blue-800"> Pratibha IT Solutions?</span>
        </h1>

        <div className="w-52 h-1 bg-blue-800 rounded-full mx-auto mt-3"></div>

        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We understand the unique challenges of educational institutions
          and deliver technology solutions that are practical,
          reliable, and future-ready.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

        {/* CARD 1 */}
        <div className="group relative bg-white p-8 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">

          {/* Animated Border */}
          <div className="animated-border text-blue-600"></div>

          {/* Icon */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">

            <GraduationCap className="w-8 h-8 text-blue-800" />

          </div>

          {/* Content */}
          <h2 className="relative z-10 mt-6 text-2xl font-black text-black">
            Education Focused
          </h2>

          <p className="relative z-10 mt-4 text-gray-600 leading-relaxed">
            We work exclusively with schools, colleges,
            and training institutes, ensuring every solution
            fits academic workflows and requirements.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="group relative bg-white p-8 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">

          {/* Animated Border */}
          <div className="animated-border text-green-600"></div>

          {/* Icon */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">

            <BadgeDollarSign className="w-8 h-8 text-green-700" />

          </div>

          {/* Content */}
          <h2 className="relative z-10 mt-6 text-2xl font-black text-black">
            Affordable Pricing
          </h2>

          <p className="relative z-10 mt-4 text-gray-600 leading-relaxed">
            Our pricing is designed keeping private institutions
            in mind, offering maximum value without compromising quality.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="group relative bg-white p-8 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">

          {/* Animated Border */}
          <div className="animated-border text-yellow-500"></div>

          {/* Icon */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">

            <Smile className="w-8 h-8 text-yellow-600" />

          </div>

          {/* Content */}
          <h2 className="relative z-10 mt-6 text-2xl font-black text-black">
            Easy to Use
          </h2>

          <p className="relative z-10 mt-4 text-gray-600 leading-relaxed">
            Simple, user-friendly software that requires
            no technical knowledge, making adoption easy
            for staff and administrators.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="group relative bg-white p-8 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">

          {/* Animated Border */}
          <div className="animated-border text-purple-600"></div>

          {/* Icon */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">

            <ShieldCheck className="w-8 h-8 text-purple-700" />

          </div>

          {/* Content */}
          <h2 className="relative z-10 mt-6 text-2xl font-black text-black">
            Trusted & Secure
          </h2>

          <p className="relative z-10 mt-4 text-gray-600 leading-relaxed">
            We follow ethical practices, ensure data security,
            and provide reliable long-term support
            for every institution.
          </p>

        </div>

      </div>

    </div>
  )
}

export default WhyUs