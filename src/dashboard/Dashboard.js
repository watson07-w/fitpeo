import React from "react";
import NetProfit from "./NetProfit";
import CardBox from "./CardBox";
import Chart from "./Chart";
import Goal from "./Goals";
import RecentOrder from "./RecentOrder";
import Feedback from "./Feedback";

function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 h-auto xl:grid-cols-3 xl:gap-6 lg:grid-cols-2 lg:gap-4 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4">
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
