import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="bg-white relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div class="grid grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 py-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="col-span-2 row-start-1">
              <DashboardCard01 />
            </div>
            <div class="row-start-1 row-end-6">
              <DashboardCard02 />
            </div>
            <div class="col-span-2 row-start-2">
              <DashboardCard03 />
            </div>
            <div class="col-span-2">
              <DashboardCard04 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
