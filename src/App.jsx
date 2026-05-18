import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (

    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <AppRoutes />

      <Footer />

    </BrowserRouter>

  )
}

export default App