import { Component, input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.css',
})
export class MetricCard {
  title = input('');
  value = input('');
  description = input('');
}
