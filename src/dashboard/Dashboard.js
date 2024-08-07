import React from "react";
import NetProfit from "./NetProfit";
import CardBox from "./CardBox";
import Chart from "./Chart";
import Goal from "./Goals";
import RecentOrder from "./RecentOrder";
import Feedback from "./Feedback";

function Dashboard() {
  return (
    <div className="py-7 px-4 sm:ml-24 ">
      <h3 className="text-value font-bold text-2xl mb-5">Dashboard</h3>
      <div className="grid md:grid-cols-[minmax(300px,_2fr)_1fr] lg:grid-cols-[minmax(500px,_2fr)_1fr] gap-5 ">
        <CardBox />
        <NetProfit />
        <Chart />
        <Goal />
        <RecentOrder />
        <Feedback />
      </div>
    </div>
  );
}

export default Dashboard;
