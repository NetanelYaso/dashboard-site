import "./GeoMap.css";

import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { useContext } from 'react';



function GeoChart() {
  const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["Israel", 1000]
  ];
  return (
    <div className="geo-chart">
      <Chart chartType="GeoChart" width="35vw" height="50vh" data={data} />
    </div>
  );
};

export default GeoChart;