import React from "react";
import { Typography } from "antd";
import ReactApexChart from "react-apexcharts";
import { useLeadCharts } from "../hooks/component/useLeadCharts";

function PieChart() {
  const { isLoading, pieChartSeries, pieChartOptions } = useLeadCharts();

  return isLoading ? (
    "loading...."
  ) : (
    <div className="container">
      <Typography.Title>Pie Chart</Typography.Title>
      <div>
        <ReactApexChart
          height="320px"
          options={pieChartOptions}
          series={pieChartSeries}
          type="donut"
        />
      </div>
    </div>
  );
}

export default PieChart;
