import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function Barchart() {
  const data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",],
    datasets: [
      {
        label: "",
        data: [10, 20, 18, 25, 19, 22, 15, 30, 28, 24, 18, 14],
        backgroundColor: "greay",
        borderColor: [
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
          "blue",
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
          "rgba(13, 87, 62, 0.132)",
        ],
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: (value, index, values) => {},
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
            weight: "bold",
          }
          
        },
      },
    },
  };
  return (
    <div className="barchart">
      <div className="headerchart">
        <h3 style={{ width: "50%" }}>Overview</h3>
        <div className="fillerbox">
          <select>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <p style={{}}>Monthly Earning</p>

      <div className="barchart-graph">
        <Bar className="canvasBar" data={data} options={options} style={{}} />
      </div>
    </div>
  );
}

export default Barchart;
