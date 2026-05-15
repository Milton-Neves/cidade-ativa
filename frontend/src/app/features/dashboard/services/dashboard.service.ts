import { inject, Injectable } from '@angular/core';


import { DashboardApiService } from './dashboard-api.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly dashboardApi = inject(DashboardApiService);

  getMetrics() {
    return this.dashboardApi.getMetrics();
  }

  getRankings() {
    return this.dashboardApi.getRankings();
  }

  getActivities() {
    return this.dashboardApi.getActivities();
  }

  getEvents() {
    return this.dashboardApi.getEvents();
  }

  getAnalytics() {
    return this.dashboardApi.getAnalytics();
  }

  getProgress() {
    return this.dashboardApi.getProgress();
  }
}
