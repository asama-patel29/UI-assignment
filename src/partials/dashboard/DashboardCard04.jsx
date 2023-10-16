import React, { useState } from "react";

import Image01 from "../../images/user-36-05.jpg";
import Image02 from "../../images/user-36-06.jpg";
import DashboardAvatars from "./DashboardAvatars";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Dropdown,
  message,
  Space,
  DatePicker,
  Flex,
  Slider,
} from "antd";

function DashboardCard10() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [gapSize, setGapSize] = useState("small");
  const [customGapSize, setCustomGapSize] = useState(0);

  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      date: "Nov 02,2021",
      status: "Success",
      invoice: "$100.00",
      people: <DashboardAvatars />,
    },
    {
      id: "1",
      image: Image02,
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      date: "Nov 02,2021",
      status: "Pending",
      invoice: "$100.00",
      people: <DashboardAvatars />,
    },
  ];

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800">
       <div className="container flex flex-row justify-between">
        <div className="px-5 py-3">
        <header>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
          Transaction History
        </h2>
      </header>
        </div>
        <div className="px-5 py-3">
        <DatePicker onChange={onChange} picker="month" placeholder="Month" className="font-bold text-slate-800 dark:text-slate-100"/>
      
        </div>
       </div>
     
      {gapSize === "customize" && (
        <Slider value={customGapSize} onChange={setCustomGapSize} />
      )}
      <Flex
        className="px-5 py-1"
        gap={gapSize !== "customize" ? gapSize : customGapSize}
      >
        <Dropdown className="bg-slate-100" menu={menuProps}>
          <Button>
            <Space>
              Recepient
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown className="bg-slate-100" menu={menuProps}>
          <Button>
            <Space>
              Amount
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown className="bg-slate-100" menu={menuProps}>
          <Button>
            <Space>
              Status
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Flex>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-700">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Customer</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Invoice</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">People</div>
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={customer.image}
                            width="40"
                            height="40"
                            alt={customer.name}
                          />
                        </div>
                        <div className="flex flex-col justify-start">
                          <div className="font-bold text-slate-800 dark:text-slate-100">
                            {customer.name}
                          </div>
                          <div className="text-left font-sm text-slate-400">
                            {customer.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-xs font-bold ">
                        {customer.status}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-xs font-bold">
                        {customer.date}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-xs font-bold text-center">
                        {customer.invoice}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-xs font-bold text-center">
                        {customer.people}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
