export interface Metric {
  title: string;

  value: string;

  description: string;

  trend: 'up' | 'down';

  percentage: string;
}
