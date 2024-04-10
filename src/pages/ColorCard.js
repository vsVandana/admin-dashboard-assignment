import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ColorCard = ({ name, color }) => {
  return (
    <div className={`py-4 px-6  text-white rounded-xl ${color}`}>
      <h1 className='text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold py-2'>{name} Card</h1>
      <hr className="my-2" />
      <div className='flex justify-between items-center'>
        <button className='py-2 text-sm sm:text-base underline'>View Details</button>
        <IoIosArrowForward className="text-xl" />
      </div>
    </div>
  );
};

export default ColorCard;
