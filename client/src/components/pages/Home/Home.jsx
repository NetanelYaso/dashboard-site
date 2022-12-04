import "./Home.css";
import React from "react";
import BarChart from "../../featurs/Bar/Bar";
import LineChart from "../../featurs/Line/Line";
import { useState, useContext } from "react";
import { getProducts } from "../../../services/products";
import { UserData } from "../../../data/data";
import PaiChart from "../../featurs/Pie/Pie"
import ProductsProvider, { productsContext } from "../../../contexts/products-contexts";
function Home() {
  const { products, setProducts } = useContext(productsContext);
  const { orders, setOrders } = useContext(productsContext);
  const [barChart, setBarData] = useState({
    labels: [...orders.map((data) => data.orderDate)],
    datasets: [{
      label: "user Gain",
      data: [...orders.map((data) => data.quntityOrder)],
      width: "14px",
      height: "129px",
      margin: "0 26px 0 33px",
      backgroundColor: "#a3a1fb"
    }]
  })

  const [lineChart, setLineData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "[54.1, 8, 15.3, 19, 4]",
      data: UserData.map((data) => data.userGain),
      backgroundColor: "red"
    }]
  })

  const [paiChart1, setPaiData1] = useState({
    datasets: [{
      label: [...products.map((data) => data.ProductName)],
      data: [54.1, 8, 15.3, 19, 4],
      backgroundColor: [
        'rgba(180, 50, 79)',
        'rgba(27, 154, 237)',
        'rgba(221, 223, 0)',
        'rgba(36, 203, 229)',
        'rgba(99, 228, 113)']
    }]
  })
  const [paieChart2, setPaiData2] = useState({
    labels: products.map((data) => data.ProductName),
    datasets: [{
      label: "user Gain",
      data: [54.1, 8, 15.3, 19, 4],
      backgroundColor: [
        'rgba(180, 50, 79)',
        'rgba(27, 154, 237)',
      ]
    }]
  })

  return (
    <div className="home">
      <div className="card">
        <BarChart className="barChart" chartData={barChart} />
      </div>
      <div className="paiChart">
        <PaiChart chartData={paiChart1} />
      </div>
      <div id="errorPai">
        <PaiChart chartData={paieChart2} />
      </div>
      <div className="lineChart">
        <LineChart chartData={lineChart} />
      </div>

    </div>
  );
};

export default Home;
