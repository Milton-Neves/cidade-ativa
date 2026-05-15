import { Component, computed, input } from '@angular/core';

import { ChartConfiguration, ChartOptions } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

import { Analytics } from '../../../models/analytics.model';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.css',
})
export class LineChart {
  analytics = input.required<Analytics>();

  public lineChartData = computed<ChartConfiguration<'line'>['data']>(() => ({
    labels: this.analytics().labels,

    datasets: [
      {
        data: this.analytics().users,
        label: 'Usuários',
        tension: 0.4,
        fill: true,
      },
      {
        data: this.analytics().events,
        label: 'Eventos',
        tension: 0.4,
      },
      {
        data: this.analytics().participation,
        label: 'Participação',
        tension: 0.4,
      },
      {
        data: this.analytics().completedActivities,
        label: 'Atividades',
        tension: 0.4,
      },
    ],
  }));

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#999',
        },
      },
      y: {
        ticks: {
          color: '#999',
        },
      },
    },
  };

  public lineChartLegend = true;
}
