import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-revenue-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './revenue-chart.component.html',
  styleUrl: './revenue-chart.component.scss',
})
export class RevenueChartComponent {
  options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    elements: {
      point: { radius: 0 },
    },
    scales: {
      x: {
        border: { width: 0 },
        grid: { display: false },
        ticks: {
          color: '#718EBF',
          font: { size: 12 },
          callback(tickValue) {
            let val = Number(this.getLabelForValue(Number(tickValue)));
            return !isNaN(val) && Math.floor(val) == val ? val : '';
          },
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
    labels: [
      2016, 2016.5, 2017, 2017.5, 2018, 2018.5, 2019, 2019.5, 2020, 2020.5,
      2021,
    ],
    datasets: [
      {
        axis: 'y',
        data: [
          10000, 11000, 20000, 12000, 25000, 26000, 32000, 20000, 29000, 15000,
          40000,
        ],
        fill: false,
        borderColor: '#16DBCC',
        borderWidth: 3,
        lineTension: 0.5,
      },
    ],
  };
}
