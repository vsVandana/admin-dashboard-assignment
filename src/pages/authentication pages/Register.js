import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="w-full max-w-md">
        <form className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl text-center mb-10 font-bold">
            Create Account
          </h2>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <input
                type="text"
                id="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                className=" border rounded w-full py-2 px-3 "
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                id="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                className=" border rounded w-full py-2 px-3 "
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full py-2 px-3 "
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className=" border rounded w-full py-2 px-3 "
              />
            </div>
            <div className="w-1/2">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className=" border rounded w-full py-2 px-3 "
              />
            </div>
          </div>
          <Link to='/'>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded "
          >
            Create Account
          </button>
          </Link>
          <div className="text-center mt-6">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
