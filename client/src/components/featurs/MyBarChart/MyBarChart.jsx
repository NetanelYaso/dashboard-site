import "./MyBarChart.css";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useContext } from "react";
import { productsContext } from "../../../contexts/products-contexts";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);





export default function MyBarChart() {
  const {products,setProducts} = useContext(productsContext);
  const dateData = ["02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022"]
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Numbers Of Products That Where Ordered By Day',
      },
    },
  };
  const data = {
    labels:dateData.map((item) => item),
    datasets: [
      {
        label: 'Numbers Of Orders Per Day',
        data: [...products.map((data) => data.ProductNumber)],
        backgroundColor: '#fba1c5',
      },
    ],
  };

  return <Bar width={800} options={options} data={data} />;
}









