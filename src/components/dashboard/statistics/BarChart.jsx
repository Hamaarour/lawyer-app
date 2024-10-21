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

// Register the necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Lawyer's Case Status Overview",
    },
  },
  scales: {
    y: {
      beginAtZero: true, // Y-axis starts at 0
      title: {
        display: true,
        text: "Number of Cases", // Y-axis title
      },
    },
  },
};

// Sample data for case status per month
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

const data = {
  labels,
  datasets: [
    {
      label: "Won Cases",
      data: [8, 6, 7, 5, 9, 10, 12, 7, 9, 11, 8, 10], // Number of won cases
      backgroundColor: "#28A745", // Green for won cases
      borderRadius: 20, // Rounded bars
    },
    {
      label: "Pending Cases",
      data: [3, 4, 2, 3, 1, 2, 3, 4, 2, 3, 1, 2], // Number of pending cases
      backgroundColor: "#FFC107", // Yellow for pending cases
      borderRadius: 20, // Rounded bars
    },
    {
      label: "Closed Cases",
      data: [5, 3, 4, 2, 5, 6, 5, 6, 4, 5, 3, 4], // Number of closed cases
      backgroundColor: "#DC3545", // Red for closed cases
      borderRadius: 20, // Rounded bars
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
