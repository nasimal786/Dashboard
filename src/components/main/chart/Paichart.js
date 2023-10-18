import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

function Paichart() {
  const data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["red", "blue", "pink"],
      },
    ],
  };
  const options = {};

  return (
    <div className="paichart">
      <h3>Customers</h3>
      <p>Customers that buy products</p>
      <div className="paichart-graph">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default Paichart;
