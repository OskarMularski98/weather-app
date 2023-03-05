import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);
const Diagram = ({ temp }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Temperature during day 🌡",
        color: "#EE6B6E",
        font: {
          family: "PoppinsRegular",
          size: 15,
        },
      },
    },
  };
  const backgroundColor = [];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] >= 0) {
      backgroundColor.push("rgba(255, 99, 132, 0.5)");
    }
    if (temp[i] < 0) {
      backgroundColor.push("#1E8BEF");
    }
  }
  const diagramData = {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        label: "Temperature",
        data: temp,
        borderColor: "#EBEBF3",
        backgroundColor: backgroundColor,
        tension: 0.5,
        // pointRadius: 0,
        // fill: true,
      },
    ],
  };
  return (
    <div className="container-content col-12 d-flex justify-content-center">
      <Line options={options} data={diagramData} />
    </div>
  );
};

export default Diagram;
