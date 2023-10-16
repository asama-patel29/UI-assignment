import React from "react";
import Image02 from "../images/user-36-06.jpg";
import { VideoCameraOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const EventCards = () => {
  return (
    <div className="flex flex-row items-center border-b border-slate-100 dark:border-slate-700 pt-2 pb-4">
      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
        <img className="rounded-full" src={Image02} width="40" height="40" />
      </div>

      <div className="flex flex-col w-full">
        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
          Meeting with client
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row w-full">
            <div className="flex flex-row items-center w-full">
              <div className="mr-2 font-sm text-slate-400">
                <VideoCameraOutlined />
              </div>
              <div>
                {" "}
                <div className="text-xs text-left font-semibold text-slate-400">
                  Google Meet
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full">
              <div className="mr-2 text-left font-sm text-slate-400">
                <ClockCircleOutlined />
              </div>
              <div>
                {" "}
                <div className="text-xs text-left font-semibold text-slate-400">
                  12 pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
