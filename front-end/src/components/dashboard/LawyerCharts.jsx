import { MoreHorizontal } from "lucide-react";
import LineChart from "./statistics/LineChart";
import PolarAreaChartComponent from "./statistics/PolarAreaChartComponent";
import BarChart from "./statistics/BarChart";

const LawyerCharts = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="bg-white rounded-lg shadow p-4 w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Open Cases by Practice Area
            </h2>
            <button
              onClick={() => {
                // Example functionality for MoreHorizontal in chart
                alert("Chart options coming soon!");
              }}
            >
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <PolarAreaChartComponent />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Cases by Stages</h2>
            <button
              onClick={() => {
                // Example functionality for MoreHorizontal in chart
                alert("Chart options coming soon!");
              }}
            >
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full h-[300px]">
            <BarChart />
          </div>
        </div>
      </div>
      {/* Cases Over Time Chart */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Cases Over Time</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Year to date</span>
            <button
              onClick={() => {
                // Example functionality for MoreHorizontal in chart
                alert("Chart options coming soon!");
              }}
            >
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="w-full h-[400px] flex justify-center items-center">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default LawyerCharts;
