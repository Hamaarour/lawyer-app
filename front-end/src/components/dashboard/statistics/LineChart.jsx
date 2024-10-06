import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// Removed faker import, using static data instead

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Monthly Legal Cases",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Number of Cases", // Y-axis title
      },
    },
  },
};

// Updated labels to represent each month
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Sample data representing cases per month for different practice areas
export const data = {
  labels,
  datasets: [
    {
      label: "Family Law Cases",
      data: [15, 20, 25, 10, 30, 40, 35, 50, 20, 30, 25, 40], // Example data
      borderColor: "#004B87", // Navy Blue
      backgroundColor: "rgba(0, 75, 135, 0.5)", // Light Navy Blue
      yAxisID: "y",
    },
    {
      label: "Criminal Law Cases",
      data: [5, 10, 15, 20, 25, 30, 35, 15, 20, 30, 25, 35], // Example data
      borderColor: "#007BFF", // Bright Blue
      backgroundColor: "rgba(0, 123, 255, 0.5)", // Light Bright Blue
      yAxisID: "y",
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
