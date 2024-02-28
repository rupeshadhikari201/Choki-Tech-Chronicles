import { useState, useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2"; // Import from chart.js
import "chart.js/auto"; // Include necessary Chart.js elements
import { ThemeContext } from "../../App";

const HorizontalBarChart = ({ chartData, chartOptions }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Spending",
        data: [],
        backgroundColor: ["#3498db", "#9b59b6", "#e74c3c"],
      },
    ],
  }); // Store chart data
  const { isDark } = useContext(ThemeContext);
  useEffect(() => {
    // Process incoming data to match Chart.js format
    const formattedData = {
      labels: chartData.map((item) => item.title),
      datasets: [
        {
          label: chartData[0].label || "Spending",
          data: chartData.map((item) => item.value),
          backgroundColor: ["#3AC165", "#3AC165", "#3AC165"],
          barThickness: 30,
        },
      ],
    };
    setData(formattedData);
  }, [chartData]);

  const options = {
    // Responsiveness based on container width
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      x: {
        grid: {
          color: "transparent", // Remove horizontal grid lines
        },
        ticks: {
          color: isDark ? "#BCBCBC" : "#333", // Set the color of the labels inside the chart
        },
      },
      y: {
        beginAtZero: true, // Start axis at 0
        title: {
          display: true,
          text: "Amount Spent", // Label the Y-axis
        },
        ticks: {
          color: isDark ? "#BCBCBC" : "#333", // Set the color of the labels inside the chart
        },
      },
    },
    plugins: {
      // Add tooltips on hover
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.label}: ${context.formattedValue}Rs`, // Customize tooltip format
        },
      },
    },
    ...chartOptions,
  };

  return (
    <Bar data={data} options={options} width={100} height={400} /> // Adjust width/height as needed
  );
};

// Example usage in a component:
const BudgetChart = ({ data }) => {
  const chartData = data;

  const chartOptions = {
    title: {
      display: true,
      text: "Budget Spent Last 5 Months", // Add chart title
    },
  };

  return (
    <HorizontalBarChart chartData={chartData} chartOptions={chartOptions} />
  );
};

export default BudgetChart;
