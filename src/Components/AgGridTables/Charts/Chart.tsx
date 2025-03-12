import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "./data";

const ChartExample = () => {
  const [options] = useState<AgChartOptions>({
    title: {
      text: "Apple's Revenue by Product Category",
    },
    subtitle: {
      text: "In Billion U.S. Dollars",
    },
    data: getData(),
    series: [
      {
        type: "bar",
        xKey: "Week",
        yKey: "GM Dollars",
        yName: "GM Dollars",
      },
      {
        type: "bar",
        xKey: "Week",
        yKey: "GM %",
        yName: "GM %",
      },
    ],
    axes: [
      {
        type: "grouped-category",
        position: "bottom",
        label: { rotation: 0 },
        depthOptions: [{}, { label: { fontWeight: "bold" } }],
      },
      { type: "number", position: "left" },
    ],
  });

  console.log(getData())

  return <AgCharts options={options} />;
};

export default ChartExample;