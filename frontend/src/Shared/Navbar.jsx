import React from 'react'
import './Components/Navbar.css'
import Logo from './Components/images/logo.png'
import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.div className="z-40 h-16 bg-black mx-10 overflow-hidden rounded-br-3xl rounded-bl-3xl backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md" id="Navbar"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between h-full px-4">
        <div className="flex items-center space-x-8">
          <img src={Logo} alt="Logo" className="w-20 h-20" />

          <a href="#" className="text-lg text-black hover:bg-black hover:text-white transition-all 1s ease-in-out p-5">Home</a>
          <Link to={'/browse'}>  <a href="#" className="text-lg text-black hover:bg-black hover:text-white transition-all  ease-in-ou p-5">Browse</a></Link>
          <div className="flex items-center space-x-4">
            <FaSearch className="text-black" />
            <input type="text" placeholder="Search" className="bg-transparent text-black border-b border-gray-500 focus:outline-none" />

          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-lg text-black hover:bg-black hover:text-white transition-all  ease-in-out p-5 ">Sign Up</a>
          <a href="#" className="text-lg text-black hover:bg-black hover:text-white transition-all  ease-in-out p-5 ">Sign In</a>
        </div>
      </div>
    </motion.div>

  )
}

export default Navbar
