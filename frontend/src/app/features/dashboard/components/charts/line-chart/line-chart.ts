import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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
export class LineChart implements OnChanges {
  @Input() analytics!: Analytics;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['analytics'] && this.analytics) {
      this.lineChartData = {
        labels: this.analytics.labels,
        datasets: [
          {
            data: this.analytics.users,
            label: 'Usuários',
            tension: 0.4,
            fill: true,
          },
          {
            data: this.analytics.events,
            label: 'Eventos',
            tension: 0.4,
          },
          {
            data: this.analytics.participation,
            label: 'Participação',
            tension: 0.4,
          },
          {
            data: this.analytics.completedActivities,
            label: 'Atividades',
            tension: 0.4,
          },
        ],
      };
    }
  }
}
