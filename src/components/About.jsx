import React from 'react'

import educatioimage1 from '../assets/educatioimage1.png'
import educatioimage2 from '../assets/educatioimage2.png'
import educatioimage3 from '../assets/educatioimage3.png'
import educatioimage4 from '../assets/educatioimage4.png'

const About = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 space-y-28 bg-white">

      {/* SECTION 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>

          <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            Who
            <span className="text-blue-800"> We Are</span>
          </h2>

          <div className="w-40 h-1 bg-blue-800 rounded-full mt-2"></div>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Pratibha IT Solutions is an education-focused IT company committed
            to transforming how institutions manage and deliver education
            in the digital era.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We help schools, colleges, coaching institutes, and training centers
            simplify their digital journey through reliable, affordable,
            and scalable technology solutions.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our mission is to streamline operations, enhance communication,
            and improve institutional efficiency through smart automation systems.
          </p>

        </div>

        {/* Right Image */}
        <div>
          <img
            src={educatioimage1}
            alt="Who We Are"
            className="w-full h-[380px] object-cover rounded-3xl shadow-2xl animate-float"
          />
        </div>

      </div>

      {/* SECTION 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <div className="order-2 lg:order-1">
          <img
            src={educatioimage2}
            alt="What We Provide"
            className="w-full h-[380px] object-cover rounded-3xl shadow-2xl animate-float [animation-delay:1s]"
          />
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">

          <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            What
            <span className="text-blue-800"> We Provide</span>
          </h2>

          <div className="w-40 h-1 bg-blue-800 rounded-full mt-2"></div>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We specialize in building modern educational websites,
            Student Management Systems, CRM & ERP platforms,
            and secure online examination software.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our solutions automate admissions, attendance,
            fee management, results, communication, and reporting —
            all in one integrated platform.
          </p>

        </div>

      </div>

      {/* SECTION 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>

          <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            Why
            <span className="text-blue-800"> Choose Us</span>
          </h2>

          <div className="w-40 h-1 bg-blue-800 rounded-full mt-2"></div>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our systems are designed with simplicity and usability in mind,
            ensuring administrators, teachers, students, and parents
            can adapt quickly without technical difficulty.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We focus on data security, compliance, and scalability,
            ensuring your institution is future-ready and technologically strong.
          </p>

        </div>

        {/* Right Image */}
        <div>
          <img
            src={educatioimage3}
            alt="Why Choose Us"
            className="w-full h-[380px] object-cover rounded-3xl shadow-2xl animate-float [animation-delay:2s]"
          />
        </div>

      </div>

      {/* SECTION 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <div className="order-2 lg:order-1">
          <img
            src={educatioimage4}
            alt="Our Commitment"
            className="w-full h-[380px] object-cover rounded-3xl shadow-2xl animate-float [animation-delay:3s]"
          />
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">

          <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            Our
            <span className="text-blue-800"> Commitment</span>
          </h2>

          <div className="w-40 h-1 bg-blue-800 rounded-full mt-2"></div>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From implementation to ongoing technical support,
            we manage every aspect of your digital infrastructure.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            This allows educators to focus on what truly matters —
            delivering quality education and shaping young minds for the future.
          </p>

        </div>

      </div>

    </div>
  )
}

export default About