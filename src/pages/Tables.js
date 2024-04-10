import React from "react";
import DataTable from "./DataTable";
import { Link } from 'react-router-dom'

const Tables = () => {
  return (
    <div className="p-4">
      <div className="pb-4">
        <h1 className="text-4xl font-bold">Tables</h1>
        <p className="my-4 text-lg border-2 rounded-xl p-4">
        Ant Design is a popular UI library for React that provides a set of high-quality components and design resources for building user interfaces.
          <Link
            to="https://ant.design/components/table"
            className="underline text-blue-700"
          >
            Ant Design Tables
          </Link>{" "}
          .
        </p>
      </div>
      <DataTable />
    </div>
  );
};

export default Tables;
