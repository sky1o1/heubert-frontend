import React from "react";
import { Typography } from "antd";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

function Report() {
  const barGraphSeries = [
    {
      name: "Present",
      data: [30, 40, 35, 32, 10, 12, 100, 91],
    },
    {
      name: "Absent",
      data: [20, 40, 11, 15, 19, 27, 40, 91],
    },
  ];
  const barGraphOptions = {
    events: {
      click: () => {
        console.log("clicked");
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false,
      },

      show: false,
    },
    colors: ["#223F98", "#DD774E"],
    responsive: [
      {
        breakpoint: undefined,
        options: {},
      },
    ],
  };
  const pieChartSeries = [44, 55, 41, 17];
  const pieChartOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#223F98", "#DD774E", "#AA4E29", "#e0e0e0"],

    labels: ["Security", "Cleaners", "Plumber", "Electrician"],

    plotOptions: {
      pie: {
        customScale: 0.8,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className="container">
      <Typography.Title>Report</Typography.Title>
      <div>
        <Chart
          onClick={(data) => console.log("clicked", data)}
          options={barGraphOptions}
          series={barGraphSeries}
          type="bar"
          height="300px"
          width="100%"
        />
      </div>

      <div>
        <ReactApexChart
          height="320px "
          options={pieChartOptions}
          series={pieChartSeries}
          type="donut"
        />
      </div>
    </div>
  );
}

export default Report;
