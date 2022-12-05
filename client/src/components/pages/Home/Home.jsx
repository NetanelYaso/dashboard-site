import "./Home.css"
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BarChart from "../../featurs/Bar/Bar";
import PieChart from "../../featurs/Pie/Pie";
import { useContext, useState } from "react";
import { productsContext } from "../../../contexts/products-contexts";
import LineChart from "../../featurs/Line/Line";
import MyBarChart from "../../featurs/MyBarChart/MyBarChart";
import MyLineChart from "../../featurs/MyLineChart/MyLineChart";
function Home({ data }) {
  // const dateData = ["02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022"]
  // const { products, setProducts } = useContext(productsContext);
  // const { orders, setOrders } = useContext(productsContext);

  // const [barChart1, setBarData1] = useState({
  //   labels: [...orders.map((data) => data.orderDate)],
  //   datasets: [{
  //     label: "Numbers Of Orders Per Day",
  //     data: [...orders.map((data) => data.quntityOrder)],
  //     width: "14px",
  //     height: "129px",
  //     margin: "0 26px 0 33px",
  //     backgroundColor: "#a3a1fb"
  //   }]
  // })

  // const [lineChart, setLineData] = useState({
  //   labels: dateData.map(item=>item),
  //   datasets: [{
  //     label: "[54.1, 8, 15.3, 19, 4]",
  //     data: products.map((data) => data.ProductNumber),
  //     backgroundColor: "#a3a1fb",
  //     label: 'Quantity',
  //     data: products.map((data) => data.ProductNumber),
  //     tension: 0.4,

  //   },
  //   {
  //     label: "[54.1, 8, 15.3, 19, 4]",
  //     data: products.map((data) => data.ProductNumber),
  //     backgroundColor: "#56d9fe",
  //     label: 'Quantity',
  //     tension: 0.4,

  //   },
  //   {
  //     label: "[54.1, 8, 15.3, 19, 4]",
  //     data: products.map((data) => data.NumberOfProducts),
  //     backgroundColor: "#5fe3a1",
  //     label: 'Quantity',
  //     tension: 0.4,

  //   },
  //   ]
  // })

  // const [paiChart1, setPaiData1] = useState({
  //   // labels: [...products.map((data) => data.ProductName)],
  //   datasets: [{
  //     label:  [...products.map((data) => data.ProductName)],
  //     data: [54.1, 8, 15.3, 19, 4],
  //     backgroundColor: [
  //       'rgba(180, 50, 79)',
  //       'rgba(27, 154, 237)',
  //       'rgba(221, 223, 0)',
  //       'rgba(36, 203, 229)',
  //       'rgba(99, 228, 113)']
  //   }]
  // })
  // const [paieChart2, setPaiData2] = useState({
  //   labels: ["Purchase Error","client Declined"],
  //   datasets: [{
  //     label:  ["Purchase Error","client Declined"],
  //     data: [54.1, 8, 15.3, 19, 4], 
  //     backgroundColor: [
  //       'blue',
  //       'rgba(27, 154, 237)',
  //     ]
  //   }]
  // })

  // const [barChart2, setBarData2] = useState({
  //   labels: dateData.map((item) => item),
  //   datasets: [{
  //     label: "Number Of Products",
  //     data: [...products.map((data) => data.ProductNumber)],
  //     width: "14px",
  //     height: "129px",
  //     margin: "0 26px 0 33px",

  //     backgroundColor: "#fba1c5"
  //   }]
  // })
  return (
    <Container>
      <Row>
        <Col>
          <div className="Card">
            <BarChart />
          </div>
        </Col>
        <Col>
          <div className="Card">
            <PieChart />
          </div>
        </Col>
        <Col>
          <div className="Card">
            <PieChart />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="CardRow2">
            global world map
          </div>
        </Col>
        <Col className="big">
          <div className="small">
            <div className="circle">594</div>
          </div>
          <div className="small">
            <div className="circle">30</div>
          </div>
          <div className="small">
            <div className="circle">158,819</div>
          </div>
          <div className="small">
            <div className="circle">2</div>
          </div>
        </Col>
        <Col>
          <div className="CardRow2">
            <LineChart />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="barChart2" className="Graph">
            <MyBarChart />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <div className="Graph">8</div>
        </Col>
        <Col>
          <Col xs={4}>
            <div className="GraphAndCard">9</div>
          </Col>
          <Col xs={4}>
            <div className="GraphAndCard">
              <MyLineChart />
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
