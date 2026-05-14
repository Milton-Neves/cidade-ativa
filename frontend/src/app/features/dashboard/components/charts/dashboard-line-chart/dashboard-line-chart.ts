import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-line-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './dashboard-line-chart.html',
  styleUrl: './dashboard-line-chart.css',
})
export class DashboardLineChart {
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    datasets: [
      {
        data: [120, 210, 180, 290, 350, 420, 520],
        label: 'Participação',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: '#a1a1aa',
        },
        grid: {
          color: '#27272a',
        },
      },

      y: {
        ticks: {
          color: '#a1a1aa',
        },
        grid: {
          color: '#27272a',
        },
      },
    },
  };
}
