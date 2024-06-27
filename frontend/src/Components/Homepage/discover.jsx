import React from 'react'
import Got from './images/got.jpg'
import Caraval from './images/caraval.jpg'
import Harry from './images/Harry.jpg'

const Discover = () => {
  return (
    <div className=' h-screen w-full overflow-hidden'>

        <div className='flex flex-wrap justify-between mx-52 my-10'>
            <h1 className='text-5xl font-bold text-green-10'>Discover</h1>
            <button className='bg-green-10 w-20 p-1 font-semibold rounded-lg hover:bg-black hover:text-white'>More</button>
        </div>

      <div className='flex flex-wrap justify-evenly'>
        <div className=' h-96 w-72 ' id='card'>
            <img src={Got} alt=""  className=' rounded-lg' id='got'/>
            <h3 className=' text-center text-2xl mt-3 font-light ' >Game of Thrones</h3>
        </div>
        <div className=' h-96 w-72 ' id='card'>
        <img src={Caraval} alt=""  className=' rounded-lg' id='got'/>
        <h3 className=' text-center text-2xl mt-3 font-light ' >Caraval</h3>
        </div>

        <div className=' h-96 w-72' id='card'>
        <img src={Harry} alt=""  className=' rounded-lg' id='got'/>
        <h3 className=' text-center text-2xl mt-3 font-light ' >Harry Potter</h3>
        </div>
      </div>
    </div>
  )
}

export default Discover
