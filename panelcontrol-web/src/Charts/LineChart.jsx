import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import MetricsContext from '../Context/MetricsContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import {Chart as chartJS} from 'chart.js/auto'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const LineChart = () => {
    const { totalRevenue } = useContext(MetricsContext);
    const { averagePrice } = useContext(MetricsContext);

    const miData = {
    labels: ['Precio Promedio', 'Ganancia Total'],
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Ganancias',
            data: [ averagePrice, totalRevenue ],
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Precio Promedio',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const misOptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            
        }
    }
    
};
return <Line data={miData} options={misOptions}/>;
};

export default LineChart;