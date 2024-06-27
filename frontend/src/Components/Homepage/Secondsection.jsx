import React from 'react'
import Lord from './lordr.png'
import { motion } from 'framer-motion'

const Secondsection = () => {
    return (
        <div className='h-screen w-full overflow-hidden relative'>
            <div className=' absolute  z-10' id='wrapper2'>
                <svg width="460" height="780
                " viewBox="0 0 460 879" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M93.0295 838.95C60.6465 893.827 -10.5025 879.94 -42.0291 866.137C-107.726 875.127 -213.905 870.794 -113.05 781.544C13.0205 669.98 -197.414 622.425 -260.368 536.119C-323.322 449.812 -256.427 314.118 -174.551 319.049C-92.6745 323.98 -55.9032 191.21 -29.7693 76.0705C-3.6353 -39.0686 222.149 -28.9884 205.718 150.539C189.288 330.066 235.263 275.675 396.218 475.559C557.173 675.442 372.79 682.854 253.793 708.615C134.796 734.376 133.508 770.353 93.0295 838.95Z" fill="#3DFFAE" />
                </svg>
                </div>
                <motion.img src={Lord} alt="" id='lodr'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.1,
                        ease: "easeInOut"

                    }}
                />

                <motion.div className='absolute z-20 top-52  text-green-10' id='Middle'
                    initial={{ opacity:0, x: 100 }}
                    whileInView={{ opacity:1, x: 0 }}
                    transition={{ 
                      duration: 1.1,
                          ease: "easeInOut"
            
                     }}
                >
                    <h1 className=' font-extrabold text-6xl'>Best selling books at your <br/>doorstep</h1>
                    <p className='text-black mt-5 '>Discover the magic of reading without ever leaving your home. At Mystic Scrolls, we bring the most sought-after fantasy books straight to your doorstep. Dive into the latest bestsellers and timeless classics with the convenience of fast and reliable delivery. Your next adventure is just a click away!</p>
                </motion.div>

            
        </div>
    )
}

export default Secondsection
