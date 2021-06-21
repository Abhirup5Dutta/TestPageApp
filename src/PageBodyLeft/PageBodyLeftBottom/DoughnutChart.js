import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {
    const data = {
        datasets: [
            {
                data: [45, 30, 25],

                backgroundColor: [
                    'rgba(198, 27, 224, 1)',
                    'rgba(235, 16, 16, 1)',
                    'rgba(11, 150, 224, 1)',
                ],
            }
        ]
    }

    const options = {
        rotation: 270
    }
    return (
        <Doughnut data={data} options={options} />
    )
}

export default DoughnutChart
