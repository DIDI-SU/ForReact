import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const { key, label, value, maxValue } = props;
  let barFillHight = "0%";
  if (props.maxValue > 0) {
    barFillHight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
