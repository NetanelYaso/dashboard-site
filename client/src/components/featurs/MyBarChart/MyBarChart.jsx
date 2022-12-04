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
import {faker} from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = ['1/1/2023', '1/2/2023', '1/3/2023', '1/4/2023', '1/5/2023', '1/6/2023', '1/7/2023'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Numbers Of Orders Per Day',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#fba1c5',
    },
  ],
};

export default function MyBarChart() {
  return <Bar width={800} options={options} data={data} />;
}









