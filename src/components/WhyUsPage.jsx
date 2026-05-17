import React from 'react'

import {
  FaChartLine,
  FaTrophy,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaPalette,
  FaClipboardList,
  FaProjectDiagram,
  FaCode,
  FaBug,
  FaUpload,
  FaGraduationCap,
  FaBuilding,
  FaHeartbeat,
  FaLandmark,
  FaStar
} from 'react-icons/fa'

const WhyUsPage = () => {

  const whyUs = [
    {
      icon: <FaChartLine />,
      title: 'Result-Driven Solutions',
      desc: 'Focused on measurable business outcomes.'
    },

    {
      icon: <FaTrophy />,
      title: 'Industry Expertise',
      desc: 'Tailored solutions for your domain.'
    },

    {
      icon: <FaHandshake />,
      title: 'Transparent Process',
      desc: 'Clear communication & honest pricing.'
    },

    {
      icon: <FaRocket />,
      title: 'Modern Tech Stack',
      desc: 'Latest tools & frameworks.'
    },

    {
      icon: <FaShieldAlt />,
      title: 'Secure & Scalable',
      desc: 'Built to grow safely.'
    },

    {
      icon: <FaPalette />,
      title: 'Creative Team',
      desc: 'Design meets technology.'
    }
  ]

  const process = [
    {
      number: '1',
      icon: <FaClipboardList />,
      title: 'Requirement',
      desc: 'Understanding goals'
    },

    {
      number: '2',
      icon: <FaProjectDiagram />,
      title: 'Planning',
      desc: 'Strategy & roadmap'
    },

    {
      number: '3',
      icon: <FaCode />,
      title: 'Development',
      desc: 'Design + code'
    },

    {
      number: '4',
      icon: <FaBug />,
      title: 'Testing',
      desc: 'Quality assurance'
    },

    {
      number: '5',
      icon: <FaUpload />,
      title: 'Launch',
      desc: 'Support & growth'
    }
  ]

  const industries = [
    {
      icon: <FaGraduationCap />,
      name: 'Education'
    },

    {
      icon: <FaHeartbeat />,
      name: 'NGOs'
    },

    {
      icon: <FaBuilding />,
      name: 'Corporate'
    },

    {
      icon: <FaRocket />,
      name: 'Startups'
    },

    {
      icon: <FaHeartbeat />,
      name: 'Healthcare'
    },

    {
      icon: <FaLandmark />,
      name: 'Government'
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

          <p className="text-blue-700 font-semibold tracking-widest uppercase animate-bounce">
            Why Us
          </p>

          <h1 className="mt-4 text-5xl sm:text-6xl font-black text-black leading-tight">

            Why Choose
            <span className="text-blue-700"> Pratibha IT Solutions?</span>

          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">

            Because we deliver reliable, scalable,
            and cost-effective digital solutions tailored
            to empower your organization’s growth
            and long-term success.

          </p>

        </div>

      </div>

      {/* WHY US CARDS */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {whyUs.map((item, index) => (

            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-[35px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-700 overflow-hidden"
            >

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md">

                  {item.icon}

                </div>

                <h2 className="mt-6 text-3xl font-black text-black">
                  {item.title}
                </h2>

                <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-8 w-0 group-hover:w-full h-1 bg-blue-700 rounded-full transition-all duration-700"></div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* WORK PROCESS */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">

        <div className="text-center">

          <h2 className="text-5xl font-black text-black">

            Our Work
            <span className="text-blue-700"> Process</span>

          </h2>

          <div className="w-32 h-1 bg-blue-700 rounded-full mx-auto mt-4"></div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 mt-20">

          {process.map((item, index) => (

            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-[30px] p-8 shadow-xl text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-700"
            >

              <div className="text-5xl font-black text-blue-700">
                {item.number}
              </div>

              <div className="w-16 h-16 mx-auto mt-6 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-black text-black">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* INDUSTRIES */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24">

        <div className="text-center">

          <h2 className="text-5xl font-black text-black">

            Industries
            <span className="text-blue-700"> We Serve</span>

          </h2>

          <div className="w-32 h-1 bg-blue-700 rounded-full mx-auto mt-4"></div>

        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-16">

          {industries.map((industry, index) => (

            <div
              key={index}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-blue-50 text-blue-700 font-bold text-lg border border-blue-100 hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-500"
            >

              <span className="group-hover:rotate-6 transition-all duration-500">
                {industry.icon}
              </span>

              {industry.name}

            </div>

          ))}

        </div>

      </div>

      {/* TESTIMONIALS */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-24 bg-gray-50">

        <div className="text-center">

          <h2 className="text-5xl font-black text-black">

            What Our
            <span className="text-blue-700"> Clients Say</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Trusted by schools, startups, and businesses
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {/* TESTIMONIAL 1 */}
          <div className="group bg-white border border-gray-200 rounded-[35px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-700">

            <div className="flex gap-1 text-yellow-500">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">

              “Pratibha IT Solutions delivered exactly
              what we needed. Professional team
              and timely delivery.”

            </p>

            <div className="mt-8">

              <h3 className="text-2xl font-black text-black">
                Ramesh Patil
              </h3>

              <p className="text-gray-500 mt-2">
                Director, ABC School
              </p>

            </div>

          </div>

          {/* TESTIMONIAL 2 */}
          <div className="group bg-white border border-gray-200 rounded-[35px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-700">

            <div className="flex gap-1 text-yellow-500">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">

              “Great experience from planning
              to launch. Highly recommended
              for startups.”

            </p>

            <div className="mt-8">

              <h3 className="text-2xl font-black text-black">
                Anita Sharma
              </h3>

              <p className="text-gray-500 mt-2">
                Founder, Startup Hub
              </p>

            </div>

          </div>

          {/* TESTIMONIAL 3 */}
          <div className="group bg-white border border-gray-200 rounded-[35px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-700">

            <div className="flex gap-1 text-yellow-500">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">

              “Reliable team with strong technical
              expertise. Very satisfied with the
              final product.”

            </p>

            <div className="mt-8">

              <h3 className="text-2xl font-black text-black">
                Sanjay Kulkarni
              </h3>

              <p className="text-gray-500 mt-2">
                Manager, Corporate Solutions
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default WhyUsPage