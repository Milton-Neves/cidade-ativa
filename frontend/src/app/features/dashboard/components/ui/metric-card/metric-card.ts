import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.css',
})
export class MetricCard {
  @Input() title = '';

  @Input() value = '';

  @Input() description = '';

  @Input() trend: 'up' | 'down' = 'up';

  @Input() percentage = '';
}
