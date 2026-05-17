import React from 'react'

import {
  FaRocket,
  FaBullseye,
  FaCheckCircle,
  FaBuilding,
  FaUsers,
  FaShieldAlt,
  FaLaptopCode
} from 'react-icons/fa'

import aboutImage from '../assets/about.jpg'

const AboutPage = () => {
  return (

    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <div className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 pb-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white">

        {/* Background Blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10 text-center">

          <p className="text-blue-700 font-semibold tracking-widest uppercase animate-bounce">
            About Pratibha IT Solutions
          </p>

          <h1 className="mt-4 text-5xl sm:text-6xl font-black text-black leading-tight">

            Empowering Education
            <span className="text-blue-700"> Through Technology</span>

          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">

            We build modern educational technology solutions
            that simplify operations, automate workflows,
            and improve digital experiences for institutions.

          </p>

        </div>

      </div>

      {/* WHAT WE DO */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-black text-black">
              What
              <span className="text-blue-700"> We Do</span>
            </h2>

            <div className="w-24 h-1 bg-blue-700 rounded-full mt-4"></div>

            <div className="mt-8 space-y-6 text-gray-600 text-lg leading-relaxed">

              <p>
                We design and develop digital solutions exclusively
                for the education sector, including school and college
                websites, education ERP & CRM systems, online
                examination platforms, and custom-built academic software.
              </p>

              <p>
                Our solutions help educational institutions automate
                admissions, attendance, fee management, examinations,
                and communication, enabling smoother workflows.
              </p>

              <p>
                By combining modern technology with deep understanding
                of academic processes, we ensure our systems remain
                secure, scalable, and easy to use.
              </p>

              <p>
                Whether you are a school, college, coaching institute,
                or training center, we provide tailored digital tools
                that improve efficiency and enhance learning experience.
              </p>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-50"></div>

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl group">

              <img
                src={aboutImage}
                alt="About"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

            </div>

          </div>

        </div>

      </div>

      {/* FOUR CARDS SECTION */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="group bg-white border border-gray-200 rounded-[35px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 group-hover:rotate-6 transition-all duration-500">
              <FaBuilding />
            </div>

            <h2 className="mt-8 text-4xl font-black text-black">
              About
              <span className="text-blue-700"> Us</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">

              Pratibha IT Solutions is a growing IT services company delivering innovative, scalable, and reliable digital solutions.

            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">

              We support educational institutions, NGOs, startups, and businesses in building strong digital systems.

            </p>

          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-gray-200 rounded-[35px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 group-hover:scale-110 transition-all duration-500">
              <FaUsers />
            </div>

            <h2 className="mt-8 text-4xl font-black text-black">
              Why Choose
              <span className="text-blue-700"> Us</span>
            </h2>

            <div className="mt-8 space-y-5 text-gray-700 text-lg">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                <p>Experienced Professionals</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                <p>Client-Focused Approach</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                <p>Affordable Pricing</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                <p>End-to-End IT Services</p>
              </div>

            </div>

          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-gray-200 rounded-[35px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 group-hover:scale-110 transition-all duration-500">
              <FaRocket />
            </div>

            <h2 className="mt-8 text-4xl font-black text-black">
              Our
              <span className="text-blue-700"> Vision</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">

              To become a leading education technology partner across India by providing smart, scalable, and impactful digital solutions.

            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">

              We envision a future where educational institutions seamlessly adopt technology to enhance learning outcomes, operational efficiency, and digital growth.

            </p>

          </div>

          {/* Card 4 */}
          <div className="group bg-white border border-gray-200 rounded-[35px] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 group-hover:rotate-12 transition-all duration-500">
              <FaBullseye />
            </div>

            <h2 className="mt-8 text-4xl font-black text-black">
              Our
              <span className="text-blue-700"> Mission</span>
            </h2>

            <div className="mt-8 space-y-5 text-gray-700 text-lg">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                <p>Simplify digital transformation for education</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                <p>Provide affordable & reliable IT solutions</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                <p>Automate academic & administrative processes</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-700" />
                <p>Build long-term institutional partnerships</p>
              </div>

            </div>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">

              Our mission is driven by a deep understanding of educational workflows and a commitment to delivering user-friendly, secure, and future-ready systems.

            </p>

          </div>

        </div>

      </div>

      {/* COMMITMENT */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 px-10 sm:px-16 py-20 shadow-2xl hover:scale-[1.01] transition-all duration-700">

          <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">

            <h2 className="text-5xl font-black text-white">
              Our Commitment
            </h2>

            <p className="mt-8 text-blue-100 text-xl leading-relaxed max-w-4xl mx-auto">

              We are committed to helping educational institutions
              grow digitally with technology that is simple,
              scalable, and future-ready.

            </p>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto">

              We manage technology so educators can focus
              on delivering quality education.

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutPage