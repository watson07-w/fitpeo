import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function NetProfit() {
  const percentage = 75;
  return (
    <div className="flex justify-between items-center bg-primary shadow  rounded-lg px-4 py-3">
      <div className="flex flex-col">
        <p className="text-textcolor text-xs font-bold ">NetProfit</p>
        <p className="text-heading text-3xl font-bold pt-3">$6759.25</p>
        <p class="text-green mt-4 text-left">▲ 3%</p>
      </div>
      <div style={{ width: 100, height: 100 }} className="lg:mr-5">
        <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={15}  />;
      </div>
    </div>
  );
}

export default NetProfit;
