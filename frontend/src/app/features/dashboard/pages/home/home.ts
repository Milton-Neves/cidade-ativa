import { Component } from '@angular/core';
import { LineChart } from '../../components/charts/line-chart/line-chart';
import { MetricCard } from '../../components/ui/metric-card/metric-card';
import { RankingList } from '../../components/sections/ranking-list/ranking-list';
import { ActivityFeed } from '../../components/sections/activity-feed/activity-feed';
import { EventTable } from '../../components/sections/event-table/event-table';
import { MOCK_METRICS } from '../../mocks/mock-metrics';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MetricCard, LineChart, RankingList, ActivityFeed, EventTable],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  metrics = MOCK_METRICS;
}
