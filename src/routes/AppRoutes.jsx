import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import WhyUsPage from '../pages/WhyUsPage'
import ContactPage from '../pages/ContactPage'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/whyus" element={<WhyUsPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<NotFound />} />

    </Routes>

  )
}

export default AppRoutes