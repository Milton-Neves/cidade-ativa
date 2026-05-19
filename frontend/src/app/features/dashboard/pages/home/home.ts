import { Component, computed, inject, signal } from '@angular/core';
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

  selectedDistrict = signal('Todos');

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

  activeEventsCount = computed(
    () => this.filteredEvents().filter((event) => event.status === 'Ativo').length,
  );

  averageParticipation = computed(() => {
    const data = this.analytics().participation;

    if (!data.length) return 0;

    const total = data.reduce((acc, value) => acc + value, 0);

    return Math.round(total / data.length);
  });

  openTally() {
    this.isTallyOpen = true;
  }

  filteredEvents = computed(() => {
    if (this.selectedDistrict() === 'Todos') {
      return this.events();
    }

    return this.events().filter((event) => event.district === this.selectedDistrict());
  });

  filteredRankings = computed(() => {
    if (this.selectedDistrict() === 'Todos') {
      return this.rankings();
    }

    return this.rankings().filter((ranking) => ranking.district === this.selectedDistrict());
  });

  districts = computed(() => {
    const uniqueDistricts = new Set(this.events().map((event) => event.district));

    return ['Todos', ...uniqueDistricts];
  });

  filteredMetrics = computed(() => {
    const district = this.selectedDistrict();

    if (district === 'Todos') {
      return this.metrics();
    }

    return this.metrics().map((metric) => ({
      ...metric,

      value: `${Math.floor(Math.random() * 1000)}`,
    }));
  });

  filteredAnalytics = computed(() => {

  const district = this.selectedDistrict();

  if (district === 'Todos') {
    return this.analytics();
  }

  return {
    ...this.analytics(),

    users: this.analytics().users.map(
      value => Math.floor(value * 0.6)
    ),

    events: this.analytics().events.map(
      value => Math.floor(value * 0.5)
    ),

    participation: this.analytics().participation.map(
      value => Math.floor(value * 0.7)
    ),

    completedActivities:
      this.analytics().completedActivities.map(
        value => Math.floor(value * 0.4)
      ),
  };
});
}
