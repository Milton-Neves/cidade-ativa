import { Analytics } from '../models/analytics.model';

export const MOCK_ANALYTICS: Analytics = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],

  users: [120, 240, 390, 510, 680, 820],

  events: [8, 12, 18, 25, 30, 42],

  participation: [45, 52, 60, 68, 74, 81],

  completedActivities: [18, 25, 31, 44, 58, 70],
};
