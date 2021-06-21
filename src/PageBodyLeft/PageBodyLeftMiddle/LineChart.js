import React from 'react'
import { Line } from 'react-chartjs-2';

function LineChart() {
    const data = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
        ],
        datasets: [
            {
                label: 'This Year',
                data: [28, 35, 40, 30, 15, 65, 70],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBorderColor: ['rgba(255, 206, 86, 0.2)'],
            },
            {
                label: 'This Week',
                data: [15, 25, 22, 55, 19, 45, 53],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBorderColor: ['rgba(54, 162, 235, 0.2)'],
            },
            {
                label: 'Today',
            }
        ]
    }
    return (
        <Line data={data} />
    )
}

export default LineChart
