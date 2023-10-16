import React from "react";
import BarChart from "../../charts/BarChart1";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard13() {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
    ],
    datasets: [
      // Light blue bars
      {
        label: "Stack 1",
        data: [6200, 9200, 6600, 8800, 5200, 9200],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: "Stack 2",
        data: [-4000, -2600, -5350, -4000, -7500, -2000],
        backgroundColor: tailwindConfig().theme.colors.indigo[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
      <div className="container flex flex-row justify-items-start">
        <div className="h-full">
          <header className="px-5 pt-4 flex items-center">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Total Sales & Cost
            </h2>
          </header>
          <div className="px-5 pt-2 text-base font-semibold text-slate-400 dark:text-slate-500 flex items-center">
            <h5 className="text-base font-semibold text-slate-400 dark:text-slate-500">
              Last 60 days
            </h5>
          </div>
          <div className="px-5 pt-8">
            <div className="flex items-start justify-between items-center">
              <div className="text-3xl font-bold text-indigo-500 dark:text-slate-100 mr-2">
                $956.82k
              </div>
              <div className="text-sm font-semibold text-green-600 px-1.5 bg-green-200 rounded-full">
                +5.4%
              </div>
            </div>
          </div>
          <div className="px-5">
            <div className="flex items-start justify-start items-center">
              <div className="text-sm font-bold text-green-600 dark:text-slate-100 mr-2">
                +8.20k
              </div>
              <div className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                vs Prev 60 days
              </div>
            </div>
          </div>
        </div>
        <div className="h-full">
          <header className="px-5 pt-4 flex items-center">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Analytic
            </h2>
          </header>
          <div>
            <BarChart data={chartData} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
