import "./Home.css"
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BarChart from "../../featurs/Bar/Bar";
import PieChart from "../../featurs/Pie/Pie";
import LineChart from "../../featurs/Line/Line";
import MyBarChart from "../../featurs/MyBarChart/MyBarChart";
import MyLineChart from "../../featurs/MyLineChart/MyLineChart";
import Cards from "../../featurs/Card/Card";
import ErrPai from "../../featurs/ErrPai/ErrPai";
import GeoChart from "../../featurs/GeoMap/GeoMap";

function Home() {
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
            <ErrPai />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="CardRow2">
            <GeoChart />
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
            <div className="circle">158,891</div>
          </div>
          <div className="small">
            <div className="circle">2</div>
          </div>
        </Col>
        <Col>
          <div className="CardRow2" id="CardRow3">
            <h6>The Day with The Highest Number Of Per Day</h6>
            <h1>Thusday</h1>
            <div className="ThusdayDiv">
              <div className="firstDiv">
                <h4>Past Stats</h4>
                <div>
                  <p>Last Month:Friday</p>
                  <p>Last week:Monday</p>
                  <p>2 Weeks Ago:Thusday</p>
                </div>
              </div>
              <div>
                <p>Probility For Next Week</p>
                <h3>Monday</h3>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Graph"><LineChart /></div>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <div className="Graph"><MyBarChart /></div>
        </Col>
        <Col>
          <Col xs={4}>
            <div className="GraphAndCard">
              <p>My Product Purchased</p>
              <h1>Coffee</h1>
            </div>
          </Col>
          <Col xs={4}>
            <div className="GraphAndCard"><p>Total Order Product</p>
              <h1>177</h1>
            </div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col md={2}><Cards /></Col>
        <Col md={2}><Cards /></Col>
        <Col md={2}><Cards /></Col>
        <Col md={6}>
          <div className="lastGraph">
            <MyLineChart />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
