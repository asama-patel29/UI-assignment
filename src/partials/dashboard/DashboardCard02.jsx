import React from "react";
import DashboardAvatars from "./DashboardAvatars";
import {
  RightOutlined,
  DownOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Typography, Button } from "antd";
import Calendar from "../../components/Calendar";
import EventCards from "../../components/EventCards";

function DashboardCard06() {
  const items = [
    {
      key: "1",
      label: "Item 1",
    },
    {
      key: "2",
      label: "Item 2",
    },
    {
      key: "3",
      label: "Item 3",
    },
  ];
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 rounded-sm">
      <div className="pl-5 text-sm font-semibold text-indigo-600 dark:text-slate-500">
        Premium Access
      </div>
      <div className="pl-5 flex flex row">
        <div>
          <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            Take Back <br /> Your Creative <br /> Control
          </h3>
        </div>
        <div className="self-end">
          {" "}
          <DashboardAvatars />
        </div>
      </div>
      <div className="pl-5 mt-3">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["3"],
          }}
        >
          <Typography.Link className="text-gray-300" type="secondary">
            <Space>
              The Professional Platform
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
      <div className="pl-5 pt-3 pb-5 border-b border-slate-100 dark:border-slate-700">
        <Button className="w-100 flex flex-row justify-between text-indigo-600 font-semibold" block size="large">
          <Space>
            Upgrade Now
            <ArrowRightOutlined />
          </Space>
        </Button>
      </div>
      <div className="pl-5">
        <Calendar />
      </div>
      <div className="pl-5 mt-3">
        <EventCards />
        <EventCards />
        <EventCards />
      </div>
    </div>
  );
}

export default DashboardCard06;
