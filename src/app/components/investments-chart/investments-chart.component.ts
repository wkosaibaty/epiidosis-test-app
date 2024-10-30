import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-investments-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './investments-chart.component.html',
  styleUrl: './investments-chart.component.scss',
})
export class InvestmentsChartComponent {
  options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    elements: {
      point: { radius: 5 },
    },
    scales: {
      x: {
        border: { width: 0 },
        grid: { display: false },
        ticks: {
          color: '#718EBF',
          font: { size: 12 },
        },
      },
      y: {
        beginAtZero: true,
        border: { width: 0, dash: [4, 2] },
        ticks: {
          color: '#718EBF',
          font: { size: 12 },
          callback(tickValue) {
            let val = Number(tickValue);
            return !isNaN(val) && val % 10000 == 0
              ? `$${val.toLocaleString('en-US')}`
              : '';
          },
        },
        grid: {
          color: function (context) {
            if (!context.tick.label) {
              return 'transparent';
            }
            return '#DFE5EE';
          },
        },
      },
    },
  };

  data: any = {
    labels: [2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
      {
        axis: 'y',
        data: [8000, 23000, 18000, 36000, 20000, 40000],
        fill: false,
        borderColor: '#FCAA0B',
        borderWidth: 3,
      },
    ],
  };
}
