import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import accessibility from "highcharts/modules/accessibility";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "./Chart.css";

exporting(Highcharts);
exportData(Highcharts);
accessibility(Highcharts);

const Chart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "#20202a",
      height: "250px",
    },
    title: {
      text: null,
    },
    plotOptions: {
      column: {
        pointPadding: 0.5,
        groupPadding: 0.1,
        borderWidth: 0,
        color: "#6f96fd",
        pointWidth: 11,
      },
    },
    xAxis: {
      categories: [
        "5",
        "9",
        "11",
        "13",
        "15",
        "17",
        "19",
        "21",
        "23",
        "25",
        "27",
      ],
    },
    series: [
      {
        data: [2000, 10000, 2000, 5000, 1000, 3000],
      },
      {
        data: [7000, 1000, 6000, 10000, 8000, 3000],
      },
      {
        data: [3000, 10000, 2000, 15000, 1000, 3000],
      },
      {
        data: [2000, 10000, 2000, 5000, 1000, 3000],
      },
      {
        data: [3000, 10000, 2000, 15000, 1000, 3000],
      },
      {
        data: [10000, 2500, 6000, 10000, 8000, 9000],
      },
    ],
    exporting: {
      enabled: false,
    },
  };
  return (
    <div className="w-full rounded-lg relative">
      <div class="flex justify-between w-full bg-primary shadow py-4">
        <p className="text-textcolor font-bold text-lg px-5">Activity</p>
        <div>
          <button
            type="button"
            class="inline-flex justify-center gap-x-1.5 rounded-full px-1 py-1 text-xs font-thin ring-0 mx-7 text-textcolor bg-icons"
            id="menu-button"
          >
            Options
            <ChevronDownIcon class="mt-1 w-2 text-gray-400 border-none" />
          </button>
        </div>
      </div>
      <div className="highcharts-figure">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default Chart;
