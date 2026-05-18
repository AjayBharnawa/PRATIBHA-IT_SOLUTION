import React from 'react'

import {
  Globe,
  Users,
  CreditCard,
  MessageCircle,
  FileCheck,
  ShieldCheck
} from 'lucide-react'

const Services = () => {
  return (

    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24 bg-white">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-4xl sm:text-5xl font-black text-black">

          Our
          <span className="text-blue-800"> Services</span>

        </h1>

        <div className="w-40 h-1 bg-blue-800 rounded-full mx-auto mt-3"></div>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">

          Smart digital solutions designed specifically for modern
          educational institutions.

        </p>

      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {/* CARD 1 */}
        <div className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(30,64,175,0.25)]">

          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-900/20 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:rotate-6 transition-all duration-500">

              <Globe className="w-8 h-8 text-blue-800" />

            </div>

            <h2 className="mt-6 text-2xl font-black text-black">
              Education Websites
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">

              Professional, mobile-friendly & SEO-optimized websites
              for schools, colleges & institutes.

            </p>

          </div>

        </div>

        {/* CARD 2 */}
        <div className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(30,64,175,0.25)]">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center group-hover:-rotate-6 transition-all duration-500">

              <Users className="w-8 h-8 text-cyan-700" />

            </div>

            <h2 className="mt-6 text-2xl font-black text-black">
              Admission & Student CRM
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">

              Manage enquiries, admissions, students, parents &
              communication from one dashboard.

            </p>

          </div>

        </div>

        {/* CARD 3 */}
        <div className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(30,64,175,0.25)]">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center group-hover:rotate-12 transition-all duration-500">

              <CreditCard className="w-8 h-8 text-indigo-700" />

            </div>

            <h2 className="mt-6 text-2xl font-black text-black">
              Fees & Attendance
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">

              Automated fee tracking, attendance management &
              real-time reporting.

            </p>

          </div>

        </div>

        {/* CARD 4 */}
        <div className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(30,64,175,0.25)]">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:-rotate-12 transition-all duration-500">

              <MessageCircle className="w-8 h-8 text-green-700" />

            </div>

            <h2 className="mt-6 text-2xl font-black text-black">
              WhatsApp & SMS Integration
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">

              Instant communication with parents & students
              through WhatsApp & SMS alerts.

            </p>

          </div>

        </div>

        {/* CARD 5 */}
        <div className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(30,64,175,0.25)]">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center group-hover:rotate-6 transition-all duration-500">

              <FileCheck className="w-8 h-8 text-purple-700" />

            </div>

            <h2 className="mt-6 text-2xl font-black text-black">
              Online Exams & Results
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">

              Secure online exams, auto result generation &
              performance analytics.

            </p>

          </div>

        </div>

        {/* CARD 6 */}
        <div className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(30,64,175,0.25)]">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-all duration-500"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:-rotate-6 transition-all duration-500">

              <ShieldCheck className="w-8 h-8 text-orange-700" />

            </div>

            <h2 className="mt-6 text-2xl font-black text-black">
              Support & AMC
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">

              Dedicated technical support, maintenance,
              updates & data security.

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Services