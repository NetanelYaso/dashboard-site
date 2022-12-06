import "./GeoMap.css";

import React from "react";
import Chart from "react-google-charts";
import { useContext } from 'react';
import {productsContext} from "../../../contexts/products-contexts"


function GeoChart() {
  const {sales,setSales} = useContext(productsContext)
  const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 700],
    ["Canada", 600],
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