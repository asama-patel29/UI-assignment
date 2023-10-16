import React from "react";
import { Tag } from "antd";
import User03 from "../../images/user-36-03.jpg";

function DashboardCard07() {
  return (
    <div className="col-span-full p-3 xl:col-span-8 bg-indigo-500 dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
      <div className="container flex flex-wrap justify-between">
        <div className="h-full">
          <div className="flex flex-row justify-between items-center">
            <div>
              <img
                className="w-9 h-9 rounded-full"
                src={User03}
                width="36"
                height="36"
                alt="User 01"
              />
            </div>
            <div>
              <div className="flex flex-col justify-between p-3 leading-normal">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-300 dark:text-white">
                  Monthly Revenue
                </h5>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h5 className="text-2xl font-medium tracking-tight text-white dark:text-white mr-1">
                      $ 3.500
                    </h5>
                  </div>
                  <div>
                    <Tag className="text-sm font-bold text-indigo-500 px-1.5 bg-white rounded-full">
                      + 2.4%
                    </Tag>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h3 className="text-md tracking-tight text-gray-300 dark:text-white mr-1">
                      Previous month
                    </h3>
                  </div>
                  <div>
                    <span className="text-sm font-bold tracking-tight text-white dark:text-white">
                      $1.7k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-row justify-between items-center">
            <div>
              <img
                className="w-9 h-9 rounded-full"
                src={User03}
                width="36"
                height="36"
                alt="User 01"
              />
            </div>
            <div>
              <div className="flex flex-col justify-between p-3 leading-normal">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-300 dark:text-white">
                  Monthly Revenue
                </h5>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h5 className="text-2xl font-medium tracking-tight text-white dark:text-white mr-1">
                      $ 3.500
                    </h5>
                  </div>
                  <div>
                    <Tag className="text-sm font-bold text-indigo-500 px-1.5 bg-white rounded-full">
                      + 2.4%
                    </Tag>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h3 className="text-md tracking-tight text-gray-300 dark:text-white mr-1">
                      Previous month
                    </h3>
                  </div>
                  <div>
                    <span className="text-sm font-bold tracking-tight text-white dark:text-white">
                      $1.7k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-row justify-between items-center">
            <div>
              <img
                className="w-9 h-9 rounded-full"
                src={User03}
                width="36"
                height="36"
                alt="User 01"
              />
            </div>
            <div>
              <div className="flex flex-col justify-between p-3 leading-normal">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-300 dark:text-white">
                  Monthly Revenue
                </h5>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h5 className="text-2xl  tracking-tight text-white dark:text-white mr-1">
                      $ 3.500
                    </h5>
                  </div>
                  <div>
                    <Tag className="text-sm font-bold text-indigo-500 px-1.5 bg-white rounded-full">
                      + 2.4%
                    </Tag>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h3 className="text-md tracking-tight text-gray-300 dark:text-white mr-1">
                      Previous month
                    </h3>
                  </div>
                  <div>
                    <span className="text-sm font-bold tracking-tight text-white dark:text-white">
                      $1.7k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
