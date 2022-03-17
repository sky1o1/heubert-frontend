import React from "react";
import { Typography } from "antd";
import Chart from "react-apexcharts";
import { useLeadCharts } from "../hooks/component/useLeadCharts";

function Report() {
  const { leadSourceLoading, options } = useLeadCharts();

  return leadSourceLoading ? (
    "loading...."
  ) : (
    <div className="container">
      <Typography.Title>Report</Typography.Title>
      <div>
        <Chart
          options={options}
          series={options.series}
          type="bar"
          height="300px"
          width="100%"
        />
      </div>
    </div>
  );
}

export default Report;
