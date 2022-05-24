import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartDataPoints }) => {
  console.log(chartDataPoints);
  const valueArry = chartDataPoints.map((item) => item.value);

  const totallMaximum = Math.max(...valueArry);
  return (
    <div className="chart">
      {chartDataPoints.map((data) => (
        <ChartBar
          // key={data.id}
          value={data.value}
          maxValue={totallMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
