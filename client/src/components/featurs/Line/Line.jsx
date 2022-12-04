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

export const options = {
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Sum Of Order Amount',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      // borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#56d9fe',
      tension: 0.4
    },
    {
      fill: true,
      label: 'Sum Of Order Numbers',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      // borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#5fe3a1',
      tension: 0.4
    },
    {
      fill: true,
      label: 'Sum Of Refund',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      // borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#a3a1fb',
      tension: 0.4
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
