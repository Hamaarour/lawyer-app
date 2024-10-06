import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data representing different law practice areas
export const data = {
  labels: [
    "Family Law",
    "Criminal Law",
    "Corporate Law",
    "Intellectual Property",
    "Personal Injury",
    "Real Estate Law",
  ],
  datasets: [
    {
      label: "Number of Cases",
      data: [15, 10, 25, 5, 20, 8], // Example data for each field
      backgroundColor: [
        "#004B87", // Navy Blue - Family Law
        "#007BFF", // Bright Blue - Criminal Law
        "#6C757D", // Gray - Corporate Law
        "#28A745", // Green - Intellectual Property
        "#DC3545", // Red - Personal Injury
        "#FFC107", // Yellow - Real Estate Law
      ],
      borderColor: [
        "#004B87", // Navy Blue - Family Law
        "#007BFF", // Bright Blue - Criminal Law
        "#6C757D", // Gray - Corporate Law
        "#28A745", // Green - Intellectual Property
        "#DC3545", // Red - Personal Injury
        "#FFC107", // Yellow - Real Estate Law
      ],
      borderWidth: 1,
    },
  ],
};

const PolarAreaChartComponent = () => {
  return <Doughnut data={data} />;
};

export default PolarAreaChartComponent;
