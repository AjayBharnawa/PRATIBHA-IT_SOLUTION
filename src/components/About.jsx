import React from 'react'

import educatioimage1 from '../assets/educatioimage1.png'
import educatioimage2 from '../assets/educatioimage2.png'
import educatioimage3 from '../assets/educatioimage3.png'
import educatioimage4 from '../assets/educatioimage4.png'

const About = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 space-y-24 bg-white">

      {/* SECTION 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h2 className="text-4xl font-black text-black leading-tight">
            Smart Digital
            <span className="text-blue-800"> Solutions</span>
          </h2>

          <div className="w-100 h-1 bg-blue-800 rounded-full mt-1"></div>

          <br />

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            We build modern educational platforms, smart CRMs,
            and automation systems designed specifically for schools
            and colleges.
          </p>

        </div>

        {/* Right Image */}
        <div>
          <img
            src={educatioimage1}
            alt="About 1"
            className="w-full h-[350px] object-cover rounded-3xl shadow-2xl animate-float"
          />
        </div>

      </div>

      {/* SECTION 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="order-2 lg:order-1">
          <img
            src={educatioimage2}
            alt="About 2"
            className="w-full h-[350px] object-cover rounded-3xl shadow-2xl animate-float [animation-delay:1s]"
          />
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">

          <h2 className="text-4xl font-black text-black leading-tight">
            Seamless
            <span className="text-blue-800"> Automation</span>
          </h2>

          <div className="w-97 h-1 bg-blue-800 rounded-full mt-1"></div>

          <br />

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Automate attendance, admissions, communication,
            fee management, and daily workflows with our
            advanced systems.
          </p>

        </div>

      </div>

      {/* SECTION 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h2 className="text-4xl font-black text-black leading-tight">
            Powerful
            <span className="text-blue-800"> CRM Systems</span>
          </h2>

          <div className="w-100 h-1 bg-blue-800 rounded-full mt-1"></div>

          <br />

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Manage students, staff, communication, and institutional
            operations through centralized dashboards and analytics.
          </p>

        </div>

        {/* Right Image */}
        <div>
          <img
            src={educatioimage3}
            alt="About 3"
            className="w-full h-[350px] object-cover rounded-3xl shadow-2xl animate-float [animation-delay:2s]"
          />
        </div>

      </div>

      {/* SECTION 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="order-2 lg:order-1">
          <img
            src={educatioimage4}
            alt="About 4"
            className="w-full h-[350px] object-cover rounded-3xl shadow-2xl animate-float [animation-delay:3s]"
          />
        </div>

        <div className="order-1 lg:order-2">

          <h2 className="text-4xl font-black text-black leading-tight">
            Future Ready
            <span className="text-blue-800"> Technology</span>
          </h2>

          <div className="w-110 h-1 bg-blue-800 rounded-full mt-1"></div>

          <br />

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Our scalable and secure technologies help institutions
            stay ahead in the digital era with modern infrastructure.
          </p>

        </div>

      </div>

    </div>
  )
}

export default About