import React from 'react';

import { Pie } from '@ant-design/plots';
import { FaChartPie } from "react-icons/fa6";

export const PieChart = () => {
  const config = {
    data: [
      { type: 'blue', value: 27 },
      { type: 'green', value: 35 },
      { type: 'orange', value: 18 },
      { type: 'purple', value: 20 },
      
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return (
    <div className='border-2 rounded-xl border-gray-300 overflow-x-auto'>
    <div className='flex items-center gap-2 pb-4 border-b-2 border-gray-300 p-4 bg-gray-200'>
      <FaChartPie className='text-2xl' />
      <h1 className='text-2xl font-bold'>Pie Chart Example</h1>
    </div>
    <Pie {...config}  className='p-4 pt-8'/>
  </div>
);
};
