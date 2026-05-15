import React from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className=' border-b border-gray-300 flex items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 fixed top-0 left-0 w-full z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

      <img src={logo} alt="Logo" className="w-15" />
      <h1 className="text-2xl  sm:text-1xl font-black py-3 px-5 tracking-[-1px]">
  <span className="text-zinc-800">Pratibha</span>
  <span className="text-blue-900">IT</span>
    <span className="text-zinc-900">Solution </span>

</h1>

    

      <div className='flex-1 flex justify-center items-center text-gray-700 sm:text-sm gap-5'>
        <a href="#" className='sm:hover:border-b hover:text-blue-900'>Home</a>
        <a href="#About" className='sm:hover:border-b hover:text-blue-900'>About</a>
        <a href="#Services" className='sm:hover:border-b hover:text-blue-900'>Services</a>
        <a href="#WhyUs" className='sm:hover:border-b hover:text-blue-900'>Why Us</a>
      </div>
        <button className="bg-blue-800 text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-blue-900 transition-all duration-100">
  Contact Us
        </button>
    </div>
  )
}

export default Navbar