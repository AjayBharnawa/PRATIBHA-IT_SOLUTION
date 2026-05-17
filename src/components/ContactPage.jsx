import React from 'react'

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaClipboardList
} from 'react-icons/fa'

const ContactPage = () => {
  return (

    <div className="bg-white overflow-x-hidden">

      {/* HERO SECTION */}
      <div className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 pb-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white">

        {/* Background Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 text-center">

          <p className="text-blue-700 font-semibold tracking-widest uppercase animate-bounce">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl sm:text-6xl font-black text-black leading-tight">

            Let’s discuss how we can
            <span className="text-blue-700"> digitize your institution</span>

          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">

            We help educational institutions build scalable,
            secure, and modern digital solutions for long-term success.

          </p>

        </div>

      </div>

      {/* CONTACT INFO + FORM */}
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pb-24">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Location */}
            <div className="group bg-white border border-gray-200 rounded-[35px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-700">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">

                <FaMapMarkerAlt />

              </div>

              <h2 className="mt-6 text-3xl font-black text-black">
                Location
              </h2>

              <p className="mt-5 text-gray-600 text-lg leading-relaxed">

                OD-HND-AMA-90D-011,
                Hindol NAC, Dhenkanal,
                Odisha, 759022

              </p>

            </div>

            {/* Phone */}
            <div className="group bg-white border border-gray-200 rounded-[35px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-700">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl text-green-700 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-500">

                <FaPhoneAlt />

              </div>

              <h2 className="mt-6 text-3xl font-black text-black">
                Phone
              </h2>

              <p className="mt-5 text-gray-600 text-lg leading-relaxed">

                +91 7684839593

              </p>

            </div>

            {/* Email */}
            <div className="group bg-white border border-gray-200 rounded-[35px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-700">

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-purple-700 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">

                <FaEnvelope />

              </div>

              <h2 className="mt-6 text-3xl font-black text-black">
                Email
              </h2>

              <p className="mt-5 text-gray-600 text-lg leading-relaxed">

                support@pratibhait.com

              </p>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative overflow-hidden bg-white border border-gray-200 rounded-[40px] p-8 sm:p-12 shadow-2xl">

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <h2 className="text-4xl font-black text-black">

                Send Us a
                <span className="text-blue-700"> Message</span>

              </h2>

              <p className="mt-5 text-gray-600 text-lg leading-relaxed">

                Fill the form and our team
                will contact you shortly.

              </p>

              <form className="mt-10 space-y-6">

                {/* Full Name */}
                <div>

                  <label className="text-gray-700 font-semibold flex items-center gap-2">

                    <FaUser className="text-blue-700" />

                    Full Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                  />

                </div>

                {/* Requirement */}
                <div>

                  <label className="text-gray-700 font-semibold flex items-center gap-2">

                    <FaClipboardList className="text-blue-700" />

                    Requirement

                  </label>

                  <input
                    type="text"
                    placeholder="Enter your requirement"
                    className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                  />

                </div>

                {/* Mobile */}
                <div>

                  <label className="text-gray-700 font-semibold flex items-center gap-2">

                    <FaPhoneAlt className="text-blue-700" />

                    Mobile Number

                  </label>

                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="text-gray-700 font-semibold flex items-center gap-2">

                    <FaEnvelope className="text-blue-700" />

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                  />

                </div>

                {/* Service */}
                <div>

                  <label className="text-gray-700 font-semibold flex items-center gap-2">

                    <FaClipboardList className="text-blue-700" />

                    Service Requirement

                  </label>

                  <select
                    className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                  >

                    <option>Select Service</option>

                    <option>Education Website</option>

                    <option>Education CRM & ERP</option>

                    <option>Online Exam System</option>

                    <option>UI / UX Design</option>

                    <option>Mobile App Development</option>

                    <option>Software Development</option>

                    <option>Digital Marketing</option>

                    <option>IT Consulting</option>

                  </select>

                </div>

                {/* Message */}
                <div>

                  <label className="text-gray-700 font-semibold flex items-center gap-2">

                    <FaPaperPlane className="text-blue-700" />

                    Your Message

                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full mt-3 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none"
                  ></textarea>

                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="group w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3"
                >

                  <FaPaperPlane className="group-hover:translate-x-1 transition-all duration-300" />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ContactPage