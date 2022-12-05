import "./MyLineChart.css";

import React from 'react';
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
import {faker} from '@faker-js/faker';
import { useContext } from "react";
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



const labels = ['6:00-12:00', '12:00-16:00', '16:00-19:00', '20:00-23:00'];
export default function MyLineChart() {
  const {sales, setSales} = useContext(productsContext);
  console.log(sales);
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
  labels,
  datasets: [
    {
      label: 'Sales By Day Time',
      data: sales.map(data=>data.profit),
      borderColor: '#a3a1fb',
      tension: 0.4
    },
    
  ],
};
  return <Line width={500} options={options} data={data} />;
}






