import { useHistory, useRouteMatch } from "react-router-dom";
import {
  useGetLeadsByLeadSource,
  useGetLeadsByLeadOrigin,
} from "../api/useLeads";

export const useLeadCharts = () => {
  const history = useHistory();
  const { params: { leadSource } = {} } = useRouteMatch();
  const { data, isLoading } = useGetLeadsByLeadOrigin(leadSource);

  const {
    data: leadSourceData,
    isLoading: leadSourceLoading,
  } = useGetLeadsByLeadSource();

  const barGraphSeries =
    leadSourceData &&
    leadSourceData?.data?.map((x) => {
      return {
        name: x[0]?.leadSource,
        data: [x?.length],
      };
    });

  var options = {
    series: barGraphSeries,
    chart: {
      type: "bar",
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const path = config.w.globals.labels[config.seriesIndex];
          history.push(`/piechart/${path}`);
        },
      },
    },
    xaxis: {
      categories: [
        "Direct Traffic",
        "Google",
        "Olark Chat",
        "Organic Search",
        "Referral Sites",
        "Welingak Website",
      ],
    },
    stroke: {
      colors: ["transparent"],
      width: 20,
    },
  };
  const pieChartSeries =
    data &&
    data?.data?.map((x) => {
      return x?.length;
    });

  const pieChartOptions = {
    chart: {
      type: "donut",
    },
    labels: [
      "API",
      "Landing Page Submission",
      "Lead Add Form",
      "Lead Import",
      "Quick Add Form",
    ],

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

  return {
    data,
    isLoading,
    leadSourceData,
    leadSourceLoading,
    options,
    barGraphSeries,
    pieChartSeries,
    pieChartOptions,
  };
};
