import React from 'react'

import {
  Globe,
  GraduationCap,
  FileText,
  Monitor,
  Smartphone,
  Settings,
  TrendingUp,
  ShieldCheck,
  Star,
  IndianRupee,
  Rocket,
  Handshake,
  CheckCircle,
  Sparkles
} from 'lucide-react'

const ServicesPage = () => {

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      points: [
        'School & College Websites',
        'Mobile Responsive Design',
        'SEO Friendly Structure',
        'Fast Loading & Secure'
      ],
      color: 'blue'
    },

    {
      icon: GraduationCap,
      title: 'Education CRM & ERP',
      points: [
        'Student Admission Management',
        'Fees & Attendance Tracking',
        'Parent & Teacher Portal',
        'Reports & Analytics'
      ],
      color: 'cyan'
    },

    {
      icon: FileText,
      title: 'Online Exam System',
      points: [
        'Online Tests & Assessments',
        'Automatic Result Generation',
        'Student Performance Reports',
        'Secure Login Access'
      ],
      color: 'purple'
    },

    {
      icon: Monitor,
      title: 'UI / UX Design',
      points: [
        'User-Centric Design Approach',
        'Wireframes & Prototypes',
        'Conversion-Focused Layouts',
        'Interactive Experiences'
      ],
      color: 'green'
    },

    {
      icon: Smartphone,
      title: 'Mobile App Development',
      points: [
        'Android & iOS Apps',
        'Custom Business Solutions',
        'High Performance & Security',
        'User-Friendly Interfaces'
      ],
      color: 'pink'
    },

    {
      icon: Settings,
      title: 'Software & Portal Development',
      points: [
        'ERP & CRM Systems',
        'School & Admin Portals',
        'Dashboards & Analytics',
        'Custom Management Systems'
      ],
      color: 'orange'
    },

    {
      icon: TrendingUp,
      title: 'Digital Marketing & Branding',
      points: [
        'SEO & Content Marketing',
        'Social Media Management',
        'Brand Identity Design',
        'Online Growth Strategies'
      ],
      color: 'indigo'
    },

    {
      icon: ShieldCheck,
      title: 'IT Consulting & Support',
      points: [
        'Technology Consulting',
        'System Upgrades',
        'Long-Term IT Support',
        'Reliable & Secure Solutions'
      ],
      color: 'red'
    }
  ]

  const whyChoose = [
    {
      icon: Star,
      title: 'Quality Driven',
      desc: 'We deliver reliable and scalable digital solutions.'
    },

    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      desc: 'Premium services at cost-effective prices.'
    },

    {
      icon: Rocket,
      title: 'Modern Technology',
      desc: 'Latest tools and frameworks for best performance.'
    },

    {
      icon: Handshake,
      title: 'Dedicated Support',
      desc: 'We’re always here to help you grow.'
    }
  ]

  return (

    <div className="bg-white overflow-x-hidden">

      {/* HERO SECTION */}
      <div className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 pb-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white">

        {/* Background Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 text-center">

          <div className="flex justify-center">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center shadow-lg animate-bounce">

              <Sparkles className="w-8 h-8 text-blue-800" />

            </div>

          </div>

          <p className="mt-6 text-blue-700 font-semibold tracking-widest uppercase">
            Our Services
          </p>

          <h1 className="mt-4 text-5xl sm:text-6xl font-black text-black leading-tight">

            Smart IT Solutions
            <span className="text-blue-700"> Designed for Education</span>

          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">

            We provide end-to-end digital solutions exclusively
            for educational institutions, helping them operate
            efficiently and grow digitally.

          </p>

        </div>

      </div>

      {/* SERVICES GRID */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon

            return (

              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-[35px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-700 overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">

                    <Icon className="w-8 h-8 text-blue-700" />

                  </div>

                  {/* Title */}
                  <h2 className="mt-6 text-3xl font-black text-black">
                    {service.title}
                  </h2>

                  {/* Points */}
                  <div className="mt-6 space-y-4 text-gray-600">

                    {service.points.map((point, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3 group/item"
                      >

                        <CheckCircle className="w-5 h-5 text-blue-700 group-hover/item:scale-110 transition-all duration-300" />

                        <p>{point}</p>

                      </div>

                    ))}

                  </div>

                  {/* Hover Line */}
                  <div className="mt-8 w-0 group-hover:w-full h-1 bg-blue-700 rounded-full transition-all duration-700"></div>

                </div>

              </div>

            )

          })}

        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">

        <div className="text-center">

          <h2 className="text-5xl font-black text-black">

            Why
            <span className="text-blue-700"> Choose Us</span>

          </h2>

          <div className="w-32 h-1 bg-blue-700 rounded-full mx-auto mt-4"></div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {whyChoose.map((item, index) => {

            const Icon = item.icon

            return (

              <div
                key={index}
                className="group bg-white rounded-[30px] p-8 shadow-xl border border-gray-200 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-700"
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">

                  <Icon className="w-8 h-8 text-blue-700" />

                </div>

                <h3 className="mt-6 text-2xl font-black text-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.desc}
                </p>

              </div>

            )

          })}

        </div>

      </div>

      {/* CTA */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 px-10 sm:px-16 py-20 shadow-2xl hover:scale-[1.01] transition-all duration-700">

          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">

            <h2 className="text-5xl font-black text-white leading-tight">

              Need a Custom Solution
              <br />
              for Your Institution?

            </h2>

            <p className="mt-8 text-blue-100 text-xl leading-relaxed">

              Let’s discuss your requirements and build
              the perfect solution.

            </p>

            <button className="mt-10 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-blue-50 transition-all duration-500 shadow-xl">

              Contact Pratibha IT Solution

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ServicesPage