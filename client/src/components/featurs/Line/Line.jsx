import "./Line.css";
// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// function LineChart({ chartData }) {
//   return <Line data={chartData}  />;
// }

// export default LineChart;




// {
// 
// },
// {
//   label: 'Quantity',
//   data: [30, 87, 22, 46, 55, 90],
//   backgroundColor: 'orange',
//   tension:0.4
// }
//   )

// }

// export default LineChart;

import { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { productsContext } from "../../../contexts/products-contexts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function LineChart() {
  const dateData = ["02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022",]
  const { orders } = useContext(productsContext);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const data = {
    labels: dateData.map(item => item),
    datasets: [
      {
        fill: true,
        label: 'Sum Of Order Amount',
        data: orders.map((data) => data.quntityOrder),
        backgroundColor: 'rgba(95, 227, 161, 0.30)',
        tension: 0.4
      },
      {
        fill: true,
        label: 'Sum Of Order Numbers',
        data: orders.map((data) => data.profit),
        backgroundColor: 'rgba(86, 217, 254, 0.50)',
        tension: 0.4,
      },
      {
        fill: true,
        label: 'Sum Of Refund',
        data: orders.map((data) => data.quntityOrder),
        backgroundColor: 'rgba(163, 161, 251, 0.20)',
        tension: 0.4
      },
    ],
  };
  return <Line width={1100} options={options} data={data} />;
}
