import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="w-full max-w-md">
        <form className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl text-center mb-8 font-bold">Password Recovery</h2>
          <p className='text-center my-10 text-gray-500'>Enter your email address and we will send you a link to reset your password.</p>
          <div className="mb-8">          
            <input type="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className=" border rounded w-full py-4 px-3  text-lg" />
          </div>
          
          <div className="flex justify-between items-center">
            <Link to='/login' className="inline-block text-md text-blue-600 hover:text-blue-800 underline">Return to login</Link>
           <Link to='/'><button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Reset Password</button></Link> 
          </div>
          <br />
        <div className="text-center mt-6 ">
          <p>Need an account? <Link to='/register' className="text-blue-600 hover:text-blue-800 underline">Sign up!</Link></p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;