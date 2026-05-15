import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Metric } from '../models/metric.model';
import { RankingUser } from '../models/ranking.model';
import { Activity } from '../models/activity.model';
import { EventItem } from '../models/event.model';
import { Analytics } from '../models/analytics.model';
import { ProgressItem } from '../models/progress-item.model';

import { MOCK_METRICS } from '../mocks/mock-metrics';
import { MOCK_RANKINGS } from '../mocks/mock-rankings';
import { MOCK_ACTIVITIES } from '../mocks/mock-activities';
import { MOCK_EVENTS } from '../mocks/mock-events';
import { MOCK_ANALYTICS } from '../mocks/mock-analytics';
import { MOCK_PROGRESS } from '../mocks/mock-progress';

@Injectable({
  providedIn: 'root',
})
export class DashboardApiService {
  getMetrics(): Observable<Metric[]> {
    return of(MOCK_METRICS);
  }

  getRankings(): Observable<RankingUser[]> {
    return of(MOCK_RANKINGS);
  }

  getActivities(): Observable<Activity[]> {
    return of(MOCK_ACTIVITIES);
  }

  getEvents(): Observable<EventItem[]> {
    return of(MOCK_EVENTS);
  }

  getAnalytics(): Observable<Analytics> {
    return of(MOCK_ANALYTICS);
  }

  getProgress(): Observable<ProgressItem[]> {
    return of(MOCK_PROGRESS);
  }
}
