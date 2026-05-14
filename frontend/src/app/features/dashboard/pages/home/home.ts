import { Component, inject } from '@angular/core';
import { LineChart } from '../../components/charts/line-chart/line-chart';
import { ActivityFeed } from '../../components/sections/activity-feed/activity-feed';
import { EventTable } from '../../components/sections/event-table/event-table';
import { RankingList } from '../../components/sections/ranking-list/ranking-list';
import { MetricCard } from '../../components/ui/metric-card/metric-card';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MetricCard, LineChart, RankingList, ActivityFeed, EventTable],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private dashboardService = inject(DashboardService);

  metrics = this.dashboardService.getMetrics();
  rankings = this.dashboardService.getRankings();
  activities = this.dashboardService.getActivities();
  events = this.dashboardService.getEvents();
}
