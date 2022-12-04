import "./Line.css";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  return <Line data={chartData}  />;
}

export default LineChart;
    
   


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