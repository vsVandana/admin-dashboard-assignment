import React from 'react';
import { Area } from '@ant-design/plots';
import { FaChartArea } from "react-icons/fa";

export const AreaChart = () => {
  const config = {
    data: [
      { day: 'mar1', value: 0 },
      { day: 'mar3', value: 10000 },
      { day: 'mar5', value: 30000 },
      { day: 'mar7', value: 25000 },
      { day: 'mar9', value: 19000 },
      { day: 'mar11', value: 19000 },
      { day: 'mar13', value: 30000 },
      { day: 'mar15', value: 31000 },
      { day: 'mar17', value: 32000},
    ],
    xField: 'day',
    yField: 'value',
    shapeField: 'hvh',
    label: {
      text: 'value',
      style: {
        fontSize: 10,
        textAlign: (_, idx, arr) => {
          if (idx === 0) return 'left';
          if (idx === arr.length - 1) return 'right';
          return 'center';
        },
      },
    },
    style: {
      opacity: 0.4,
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    line: {},
  };
  return (
    <div className='border-2 rounded-xl border-gray-300 overflow-x-auto'>
    <div className='flex items-center gap-2 pb-4 border-b-2 border-gray-300 p-4 bg-gray-200'>
      <FaChartArea className='text-2xl' />
      <h1 className='text-2xl font-bold '>Area Chart Example</h1>
    </div>
    <Area {...config}  className='p-4 pt-8'/>
  </div>
);
};

