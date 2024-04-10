import React from "react";
import { PieChart } from "./chart pages/PieChart";
import { Link } from "react-router-dom";
import { AreaChart } from "./chart pages/AreaChart";
import { BarChart } from "./chart pages/BarChart";

const Charts = () => {
  return (
    <div className="p-4">
      <div className="pb-4">
        <h1 className="text-4xl font-bold">Charts</h1>
        <p className="my-4 text-lg border-2 rounded-xl p-4">
          Ant Design is a popular UI library for React that provides a set of high-quality components and design resources for building user interfaces.{" "}
          <Link
            to="https://ant-design-charts.antgroup.com/en/manual/introduction"
            className="underline text-blue-700"
          >
            Ant Design Charts
          </Link>
          .
        </p>
      </div>
      <AreaChart />
      <div className="flex flex-col lg:flex-row items-center justify-around gap-6 w-full py-4">
        <div className="w-full lg:w-1/2">
          <BarChart />
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
