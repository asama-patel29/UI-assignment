import React, { useState } from "react";
import UserMenu from "../components/DropdownProfile";
import User01 from "../images/user-36-01.jpg";
import { Col, Row, Typography } from "antd";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  // const { Title } = Typography;

  return (
    <header className="top-0 bg-white z-55">
      <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-3">
        <div className="flex flex-row  items-center justify-between h-20 -mb-px">
          {/* Header: Left side */}
          <div className="flex px-2 items-center sm:px-3">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <div>
              <img
                className="w-15 h-13 rounded-full"
                src={User01}
                alt="User 01"
              />
            </div>
            <div>
              <div className="relative px-5 py-3">
                <h1 className="text-2xl md:text-2xl text-slate-800 dark:text-slate-100 font-bold mb-1">
                  Good Evening Team!
                </h1>
                <Typography className="text-base md:text-base  font-semibold text-slate-400 dark:text-slate-500">
                  Have an in-depth look at all the metrics within your
                  dashboard.
                </Typography>
              </div>
            </div>
          
          </div>

          <div className="flex items-center justify-between">
         
           
            <div>
              <button
                className={`w-8 h-8 flex items-center justify-center  bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                aria-controls="search-modal"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-slate-500 dark:text-slate-400"
                    d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                  />
                  <path
                    className="fill-current text-slate-400 dark:text-slate-500"
                    d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center justify-between space-x-3">
            <div>
              <button
                className={`w-8 h-8 flex items-center justify-center  hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3 ${
                  searchModalOpen && "bg-slate-200"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div>
              <UserMenu align="right" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
