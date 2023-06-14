import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { MetricsContext } from '../Context/MetricsContext';

const BarChart = () => {
  const { averagePrice } = useContext(MetricsContext);

  const chartData = {
    labels: ['Precio promedio'],
    datasets: [
      {
        label: 'Precio promedio',
        data: [averagePrice],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;
