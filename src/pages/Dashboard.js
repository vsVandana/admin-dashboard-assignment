import React from 'react';
import ColorCard from './ColorCard';
import { BarChart } from './chart pages/BarChart';
import { AreaChart } from './chart pages/AreaChart';
import DataTable from './DataTable';

const Dashboard = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <h2 className="py-3 text-xl">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <ColorCard name="Primary" color="bg-blue-700" />
        <ColorCard name="Warning" color="bg-yellow-500" />
        <ColorCard name="Success" color="bg-green-500" />
        <ColorCard name="Danger" color="bg-red-700" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
        <div>
          <AreaChart />
        </div>
        <div>
          <BarChart />
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default Dashboard;
