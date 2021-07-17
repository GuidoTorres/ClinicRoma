import React from 'react';
import { Bar } from 'react-chartjs-2';

const GraficoBarra = () => {
  return (
    <div style={{ width: '100%', height: '50%' }}>
      <Bar
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'evaluacion',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                '#ff4c4c',
                '#0099e5',
                '#ffdd00',
                '#34bf49',
                '#7d3f98',
                '#fe5000',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={500}
        height={400}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default GraficoBarra;
