import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);


  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="w-full max-w-md">
        <form className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl text-center mb-10 font-bold">Login</h2>
          <div className="mb-4">           
            <input type="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className=" border rounded w-full py-4 px-3  text-lg" />
          </div>
          <div className="mb-10">           
            <input type="password" id="password"placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className=" border rounded w-full py-4 px-3 text-lg" />
          </div>
          <div className="flex items-center mb-6">
            <input type="checkbox" id="rememberPassword" checked={rememberPassword} onChange={() => setRememberPassword(!rememberPassword)} className="form-checkbox h-5 w-5 text-blue-600" />
            <label htmlFor="rememberPassword" className="block ml-2 text-gray-700 text-lg">Remember Password</label>
          </div>
          <div className="flex justify-between items-center">
            <Link to='/forgot-password' className="inline-block text-md text-blue-600 hover:text-blue-800 underline">Forgot Password?</Link>
           <Link to='/'><button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Login</button></Link> 
          </div>
          <br />
        <div className="text-center mt-6 ">
          <p>Don't have an account? <Link to='/register' className="text-blue-600 hover:text-blue-800 underline">Sign Up</Link></p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;