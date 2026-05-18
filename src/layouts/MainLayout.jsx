import React from 'react'

import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import FloatingWhatsapp from '../components/FloatingWhatsapp'

const MainLayout = () => {
  return (

    <div className="bg-white overflow-x-hidden">

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Pages */}
      <main>

        <Outlet />

      </main>

      {/* Floating WhatsApp */}
      <FloatingWhatsapp />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default MainLayout