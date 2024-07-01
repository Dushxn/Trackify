import React from 'react'
import Card from '../Components/Browse/Card'
import useNYFetch from '../Hooks/useNYFetch'
import useGoogleFetch from '../Hooks/useGoogleFetch'
import Gcard from '../Components/Browse/Gcards'

const Browse = () => {

    
    const api = import.meta.env.VITE_API_KEY;
    const gApi = import.meta.env.VITE_GOOGLE_API
    const subject = 'fantasy'
    const listName = 'hardcover-fiction'

    const { data, loading, error } = useNYFetch(listName, api)
    const { data: gData, loading: gLoading, error: gError } = useGoogleFetch(subject, gApi)

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>

  return (
    <div className='  m-5 relative'>
      <div className='flex flex-wrap justify-between mx-10 mt-10'>
        <h1 className='text-3xl text-green-10 font-bold mt-8'>New york time best Sellers</h1>
        <button className='bg-green-10 h-10 mt-5 p-2 rounded-lg text-center font-regular
        hover:bg-black hover:text-white'>see more</button>
      </div>
        <Card data={data} />

        <div className='flex flex-wrap justify-between mx-10 mt-10'>
        <h1 className='text-3xl text-green-10 font-bold mt-8'>New york time best Sellers</h1>
        <button className='bg-green-10 h-10 mt-5 p-2 rounded-lg text-center font-regular
        hover:bg-black hover:text-white'>see more</button>
      </div>
        <Gcard data={gData} />
    </div>

    


  )
}

export default Browse
