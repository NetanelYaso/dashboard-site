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



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export default function MyLineChart() {
  const {sales, setSales} = useContext(productsContext);
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
      // fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#a3a1fb',
      // backgroundColor: '',
      tension: 0.4
    },
    
  ],
};
  return <Line options={options} data={data} />;
}






