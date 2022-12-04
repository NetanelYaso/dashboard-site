import "./Home.css";
import React from "react";
import BarChart from "../../featurs/Bar/Bar";
import LineChart from "../../featurs/Line/Line";
import { useState, useContext } from "react";
import { UserData } from "../../../data/data";
import PaiChart from "../../featurs/Pie/Pie"
import { productsContext } from "../../../contexts/products-contexts";
function Home() {
  const dateData = ["02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022"]
  const { products, setProducts } = useContext(productsContext);
  const { orders, setOrders } = useContext(productsContext);

  const [barChart1, setBarData1] = useState({
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
    labels: dateData.map(item=>item),
    datasets: [{
      label: "[54.1, 8, 15.3, 19, 4]",
      data: products.map((data) => data.ProductNumber),
      backgroundColor: "#a3a1fb",
      label: 'Quantity',
      data: products.map((data) => data.ProductNumber),
      tension: 0.4,
      
    },
    {
      label: "[54.1, 8, 15.3, 19, 4]",
      data: UserData.map((data) => data.userGain),
      backgroundColor: "#56d9fe",
      label: 'Quantity',
      data: products.map((data) => data.ProductNumber),
      tension: 0.4,
      
    },
    {
      label: "[54.1, 8, 15.3, 19, 4]",
      data: UserData.map((data) => data.userGain),
      backgroundColor: "#5fe3a1",
      label: 'Quantity',
      data: products.map((data) => data.NumberOfProducts),
      tension: 0.4,
    },
    ]
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
    labels: ["Purchase Error","client Declined"],
    datasets: [{
      label:  ["Purchase Error","client Declined"],
      data: [54.1, 8, 15.3, 19, 4], 
      backgroundColor: [
        'rgba(180, 50, 79)',
        'rgba(27, 154, 237)',
      ]
    }]
  })

  const [barChart2, setBarData2] = useState({
    labels: dateData.map((item) => item),
    datasets: [{
      label: "user Gain",
      data: [...products.map((data) => data.ProductNumber)],
      width: "14px",
      height: "129px",
      margin: "0 26px 0 33px",
      backgroundColor: "#fba1c5"
    }]
  })

  return (
    <div className="home">
      <div  className="card">
        <BarChart className="barChart1" chartData={barChart1} />
      </div>
      <div className="paiChart1">
        <PaiChart chartData={paiChart1} />
      </div>
      <div id="errorPai">
        <PaiChart chartData={paieChart2} />
      </div>
      <div className="lineChart">
        <LineChart chartData={lineChart} />
      </div>
      <div className="card">
        <BarChart className="barChart2" chartData={barChart2} />
      </div>
    </div>
  );
};

export default Home;
