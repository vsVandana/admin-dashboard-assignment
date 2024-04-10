import React from 'react'
import { Link } from 'react-router-dom';
const Page_500 = () => {
  return (
    <div className='flex flex-col items-center justify-center p-10 gap-8'>
        <h1 className='text-6xl font-bold'>500</h1>      
        <p className='text-2xl font-semibold'>Internal Server Error</p>
        <Link to="/" className='text-lg underline text-blue-600'> Return to Dashboard</Link>
    </div>
  )
}

export default Page_500