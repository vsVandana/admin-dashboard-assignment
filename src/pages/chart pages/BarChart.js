import React from 'react';
import { Column } from '@ant-design/plots';
import { IoBarChartSharp } from 'react-icons/io5';

const data = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 6000 },
  { month: 'Mar', value: 7500 },
  { month: 'Apr', value: 10000 },
  { month: 'May', value: 14000 },
  { month: 'Jun', value: 20000 },
];

export const BarChart = () => {
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    yAxis: {
      min: 0,
      max: 20000,
      tickInterval: 5000,
    },
    style: {
      fill: '#2989FF',
    },
    label: {
      offset: 10,
    },
    legend: false,
  };

  return (
    <div className='border-2 rounded-xl border-gray-300 overflow-x-auto'>
      <div className='flex items-center gap-2 pb-4 border-b-2 border-gray-300 p-4 bg-gray-200'>
        <IoBarChartSharp className='text-2xl' />
        <h1 className='text-2xl font-bold'>Bar Chart Example</h1>
      </div>
      <Column {...config}  className='p-4 pt-8'/>
    </div>
  );
};

export default BarChart;
