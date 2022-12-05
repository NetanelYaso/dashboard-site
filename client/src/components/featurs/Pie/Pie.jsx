import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useContext } from 'react';
import { productsContext } from "../../../contexts/products-contexts"
ChartJS.register(ArcElement, Tooltip, Legend);



export default function PieChart() {
  const { orders, setOrders } = useContext(productsContext)
  const data = {
    labels: ['Cofee', 'Drink', 'Cake', 'Tea', 'Zinger'],
    datasets: [
      {
        // label: '% of Votes',
        data: [54.1, 8, 15.3, 19, 4],
        backgroundColor: [
          'rgba(180, 50, 79)',
          'rgba(27, 154, 237)',
          'rgba(221, 223, 0)',
          'rgba(36, 203, 229)',
          'rgba(99, 228, 113)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}