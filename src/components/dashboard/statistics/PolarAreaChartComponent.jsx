import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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
      data: [15, 10, 25, 5, 20, 8],
      backgroundColor: [
        "#004B87",
        "#007BFF",
        "#6C757D",
        "#28A745",
        "#DC3545",
        "#FFC107",
      ],
      borderColor: [
        "#004B87",
        "#007BFF",
        "#6C757D",
        "#28A745",
        "#DC3545",
        "#FFC107",
      ],
      borderWidth: 1,
    },
  ],
};

const PolarAreaChartComponent = () => {
  return <Doughnut data={data} />;
};

export default PolarAreaChartComponent;
