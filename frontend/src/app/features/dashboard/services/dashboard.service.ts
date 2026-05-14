import { Injectable } from '@angular/core';

import { MOCK_METRICS } from '../mocks/mock-metrics';
import { MOCK_RANKINGS } from '../mocks/mock-rankings';
import { MOCK_ACTIVITIES } from '../mocks/mock-activities';
import { MOCK_EVENTS } from '../mocks/mock-events';

import { Metric } from '../models/metric.model';
import { RankingUser } from '../models/ranking.model';
import { Activity } from '../models/activity.model';
import { EventItem } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getMetrics(): Metric[] {
    return MOCK_METRICS;
  }

  getRankings(): RankingUser[] {
    return MOCK_RANKINGS;
  }

  getActivities(): Activity[] {
    return MOCK_ACTIVITIES;
  }

  getEvents(): EventItem[] {
    return MOCK_EVENTS;
  }
}
