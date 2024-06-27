import React from 'react'
import Lunar from './lunar.png'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className=' h-screen w-full overflow-hidden relative'>
      <div className=' absolute  z-10' id='wrapper'>
        <svg width="524" height="780" viewBox="0 0 524 880" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M357.548 42.3648C387.948 -13.6352 459.548 -2.30184 491.548 10.3648C556.882 -0.968501 663.148 -0.435165 565.548 92.3648C443.548 208.365 655.548 248.365 721.548 332.365C787.548 416.365 725.548 554.365 643.548 552.365C561.548 550.365 529.548 684.365 507.548 800.365C485.548 916.365 259.548 914.365 269.548 734.365C279.548 554.365 235.548 610.365 67.5483 416.365C-100.452 222.365 83.5483 208.365 201.548 178.365C319.548 148.365 319.548 112.365 357.548 42.3648Z" fill="#3DFFAE" />
        </svg>
      </div>
      
      
          <motion.img src={Lunar} alt="" id='Lunar' 
            initial={{ opacity:0, x: 100 }}
            whileInView={{ opacity:1, x: 0 }}
            transition={{ 
              duration: 1.1,
                  ease: "easeInOut"
    
             }}
          />
         
      <motion.div className='absolute z-20 top-52 left-36 text-green-10' id='Title'
         initial={{ opacity:0, x: -100 }}
         whileInView={{ opacity:1, x: 0 }}
         transition={{ 
           duration: 1.1,
               ease: "easeInOut"
 
          }}
      >
            <h1 className=' font-extrabold text-6xl'> Hi, Welcome to MysticScrolls</h1>
            <h2 className=' text-black mt-5 text-4xl font-semibold'>Largest Online Book Store</h2>
            <p className=' text-black mt-5 font-thin'>Welcome to Mystic Scrolls, where the magic of storytelling comes to life. Step into a world of enchantment and adventure with our curated collection of fantasy books. Whether you're seeking epic tales of heroism, mystical lands, or legendary creatures, you'll find a treasure trove of captivating reads to ignite your imagination. Let the journey begin!</p>
            <button className=' mt-5 bg-green-10 text-black w-20 p-2 rounded-lg font-semibold hover:bg-black hover:text-white'>buy now</button>
        </motion.div>
    </div>
  )
}

export default HeroSection
