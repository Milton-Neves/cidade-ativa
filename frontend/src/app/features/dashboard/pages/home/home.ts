import { Component, computed, inject } from '@angular/core';
import { LineChart } from '../../components/charts/line-chart/line-chart';
import { ProgressChart } from '../../components/charts/progress-chart/progress-chart';
import { ActivityFeed } from '../../components/sections/activity-feed/activity-feed';
import { EventTable } from '../../components/sections/event-table/event-table';
import { RankingList } from '../../components/sections/ranking-list/ranking-list';
import { TallySheet } from '../../components/tally/tally-sheet/tally-sheet';
import { MetricCard } from '../../components/ui/metric-card/metric-card';
import { DashboardService } from '../../services/dashboard.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MetricCard,
    LineChart,
    RankingList,
    ActivityFeed,
    EventTable,
    ProgressChart,
    TallySheet,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly dashboardService = inject(DashboardService);

  isTallyOpen = false;

  metrics = toSignal(this.dashboardService.getMetrics(), { initialValue: [] });

  rankings = toSignal(this.dashboardService.getRankings(), { initialValue: [] });

  activities = toSignal(this.dashboardService.getActivities(), { initialValue: [] });

  events = toSignal(this.dashboardService.getEvents(), { initialValue: [] });

  analytics = toSignal(this.dashboardService.getAnalytics(), {
    initialValue: {
      labels: [],
      users: [],
      events: [],
      participation: [],
      completedActivities: [],
    },
  });

  progress = toSignal(this.dashboardService.getProgress(), { initialValue: [] });

  topRankings = computed(() => this.rankings().slice(0, 3));

  activeEvents = computed(() => this.events().filter((event) => event.status === 'Ativo'));

  activeEventsCount = computed(() => this.activeEvents().length);

  averageParticipation = computed(() => {
    const data = this.analytics().participation;

    if (!data.length) return 0;

    const total = data.reduce((acc, value) => acc + value, 0);

    return Math.round(total / data.length);
  });

  openTally() {
    this.isTallyOpen = true;
  }
}
