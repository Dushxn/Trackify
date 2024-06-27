import React from 'react'
import { motion } from 'framer-motion'
import Book from './book.png'
import Delivery from './delivery.png'
import Dollar from './dollar.png'

const Specialty = () => {
  return (
    <div className='relative' id='specialtycontainer'>
      <motion.h1 className=' absolute text-5xl font-bold '
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >Our Specialty</motion.h1>
      <br />
      <br />
      <br /><br />
      <motion.div className='flex flex-wrap justify-center' id='features'
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        
      >
    <span className="feature-item">
      <img src={Dollar} alt="Dollar" className='h-24 w-24' />
      <h1 className="feature-text">Affordable</h1>
    </span>
    <span className="feature-item">
      <img src={Delivery} alt="Delivery" className='h-24 w-24' />
      <h1 className="feature-text">Fast Delivery</h1>
    </span>
    <span className="feature-item">
      <img src={Book} alt="Book" className='h-24 w-24' />
      <h1 className="feature-text">Wide Selection</h1>
    </span> 
  </motion.div>
    </div>
  )
}

export default Specialty
