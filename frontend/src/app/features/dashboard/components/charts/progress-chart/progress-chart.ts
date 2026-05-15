import { ProgressItem } from '@/features/dashboard/models/progress-item.model';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-chart',
  imports: [],
  templateUrl: './progress-chart.html',
  styleUrl: './progress-chart.css',
})
export class ProgressChart {
  items = input.required<ProgressItem[]>();
}
