import React from 'react'

const SignCard = () => {
  return (
    <div className=''>
      <div className='wrapper relative'>
      <div className=' absolute  z-10' id='signSvg'>
        <svg width="524" height="780" viewBox="0 0 524 880" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M357.548 42.3648C387.948 -13.6352 459.548 -2.30184 491.548 10.3648C556.882 -0.968501 663.148 -0.435165 565.548 92.3648C443.548 208.365 655.548 248.365 721.548 332.365C787.548 416.365 725.548 554.365 643.548 552.365C561.548 550.365 529.548 684.365 507.548 800.365C485.548 916.365 259.548 914.365 269.548 734.365C279.548 554.365 235.548 610.365 67.5483 416.365C-100.452 222.365 83.5483 208.365 201.548 178.365C319.548 148.365 319.548 112.365 357.548 42.3648Z" fill="#3DFFAE" />
        </svg>
      </div>
      <div className=' absolute  z-10' id='signSvg2'>
        <svg width="524" height="780" viewBox="0 0 524 880" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M357.548 42.3648C387.948 -13.6352 459.548 -2.30184 491.548 10.3648C556.882 -0.968501 663.148 -0.435165 565.548 92.3648C443.548 208.365 655.548 248.365 721.548 332.365C787.548 416.365 725.548 554.365 643.548 552.365C561.548 550.365 529.548 684.365 507.548 800.365C485.548 916.365 259.548 914.365 269.548 734.365C279.548 554.365 235.548 610.365 67.5483 416.365C-100.452 222.365 83.5483 208.365 201.548 178.365C319.548 148.365 319.548 112.365 357.548 42.3648Z" fill="#3DFFAE" />
        </svg>
      </div>
          <div className='sec1 bg-red-300 relative'>
            <img src="https://i.pinimg.com/564x/bf/67/73/bf6773ba023c70afe6caf83e88744d61.jpg" alt="" className=' w-full h-full' />
            
          </div>
          <div className='sec2 relative'>
         
            <div className="form absolute">
              <h1 className='text-4xl font-bold text-center mb-10'>Sign In</h1>
              <form action="" className='flex flex-col'>
                <input type="text" placeholder='Email' className='p-2 my-2 mb-10' />
                <input type="password" placeholder='Password' className='p-2 my-2 mb-10' />
                <button className='bg-green-300 text-black hover:bg-black hover:text-white p-2 rounded-md my-2 mb-5'>Sign In</button>
              </form>
              <p className='text-center'>Don't have an account? <a href="#" className='text-green-500'>Sign Up</a></p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SignCard
