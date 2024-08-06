import React from "react";
import NetProfit from "./NetProfit";
import CardBox from "./CardBox";
import Chart from "./Chart";
import Goal from "./Goals";
import RecentOrder from "./RecentOrder";
import Feedback from "./Feedback";

function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 h-20 ">
      <CardBox />
      <NetProfit />
      <Chart />
      <Goal />
      <RecentOrder />
      <Feedback />
    </div>
  );
}

export default Dashboard;
