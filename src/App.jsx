import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/Home'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'
import WhyUsPage from './components/WhyUsPage'
import ContactPage from './components/ContactPage'
import ScrollToTop from './components/ScrollToTop'

const App = () => {

  return (

    <BrowserRouter>

      <ScrollToTop />


      <div className="relative overflow-x-hidden bg-white">

        <Navbar />

        <main className="pt-20 min-h-screen">

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<AboutPage />}
            />

            {/* SERVICES */}
            <Route
              path="/services"
              element={<ServicesPage />}
            />

            {/* WHY US */}
            <Route
              path="/whyus"
              element={<WhyUsPage />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<ContactPage />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  )
}

export default App