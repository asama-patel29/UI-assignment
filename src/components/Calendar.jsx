import { Button } from "antd";
import React from "react";

const Calendar = () => {
  return (
    <>
      <div
        // style="min-width: 500px; width: 512px"
        className="bg-white overflow-hidden rounded-lg mx-auto text-gray-900 font-semibold text-center"
      >
        <div className="flex items-center justify-between py-2">
          <div className="text-lg">October 2020</div>
          <div>
          <Button className="p-2 rounded-full bg-white text-indigo-600 border-slate-100 dark:border-slate-700">
            <svg
              className="w-3 h-3 stroke-current "
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </Button>
          <Button className="p-2 rounded-full text-indigo-600 border-slate-100 dark:border-slate-700">
            <svg
              className="w-3 h-3 stroke-current"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </Button>
          </div>
        
        </div>
        <div className="grid grid-cols-7 grid-col-dense p-6 gap-1">
          <div className="text-slate-400">Mon</div>
          <div className="text-slate-400">Tue</div>
          <div className="text-slate-400">Wed</div>
          <div className="text-slate-400">Thu</div>
          <div className="text-slate-400">Fri</div>
          <div className="text-slate-400">Sat</div>
          <div className="text-slate-400">Sun</div>
          <a
            href="#"
            className="hover:bg-indigo-100 rounded-md p-1 text-slate-800"
          >
            11
          </a>
          <a
            href="#"
            className="hover:bg-indigo-100 rounded-md p-1 text-slate-800"
          >
            12
          </a>
          <a
            href="#"
            className="hover:bg-indigo-100 rounded-full p-1 bg-indigo-500 text-white"
          >
            13
          </a>
          <a
            href="#"
            className="hover:bg-indigo-100 rounded-md p-1 text-slate-800"
          >
            14
          </a>
          <a
            href="#"
            className="hover:bg-indigo-100 rounded-md p-1 text-slate-800"
          >
            15
          </a>
          <a
            href="#"
            className="hover:bg-indigo-100 rounded-md p-1 text-slate-800"
          >
            16
          </a>
          <a
            href="#"
            className="hover:bg-indigo-100 rounded-md p-1 text-slate-800"
          >
            17
          </a>
        </div>
      </div>
    </>
  );
};

export default Calendar;
