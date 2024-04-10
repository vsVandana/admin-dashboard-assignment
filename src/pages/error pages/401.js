import React from 'react'
import { Link } from 'react-router-dom';
const Page_401 = () => {
  return (
    <div className='flex flex-col items-center justify-center p-10 gap-4'>
        <h1 className='text-6xl font-bold'>401</h1>
        <h2>Unauthorized</h2>
        <p className='text-2xl font-semibold'>Access to this resource is denied.</p>
        <Link to="/" className='text-lg underline text-blue-600'> Return to Dashboard</Link>
    </div>
  )
}

export default Page_401;