import "./ErrPai.css";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ErrPai() {
  const data = {
    labels: ["Purchase Error", "Client Declined"],
    datasets: [
      {
        data: [54.1, 8, 15.3, 19, 4],
        backgroundColor: [
          'rgb(0, 0, 158)',
          'rgb(0, 123, 255)'
         
        ],
        borderColor: [
          'rgba(245, 40, 145, 0)',
         
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}
