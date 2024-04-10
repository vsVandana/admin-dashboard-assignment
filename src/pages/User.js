import React, { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { IoIosArrowDown } from "react-icons/io";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative px-4">
      <button className="flex items-center  text-gray-300" onClick={toggleDropdown}>
        <HiUserCircle className=" text-3xl" />
        <span><IoIosArrowDown  /></span>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200  shadow rounded-xl">
          <ul>
            <li className=" p-2  hover:bg-gray-100 cursor-pointer text-lg font-semibold">Settings</li>
            <li className=" p-2  hover:bg-gray-100 cursor-pointer text-lg font-semibold">Activity Log</li>
            <hr className='py-1'/>
            <li className=" p-2  hover:bg-gray-100 cursor-pointer text-lg font-semibold">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
