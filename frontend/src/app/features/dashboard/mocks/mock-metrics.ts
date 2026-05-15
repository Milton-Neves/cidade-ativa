import { Metric } from '../models/metric.model';

export const MOCK_METRICS: Metric[] = [
  {
    title: 'Usuários ativos',
    value: '1.245',
    description: 'Crescimento mensal',
    trend: 'up',
    percentage: '+12%',
  },
  {
    title: 'Eventos hoje',
    value: '18',
    description: 'Novos eventos cadastrados',
    trend: 'up',
    percentage: '+8%',
  },
  {
    title: 'Participação',
    value: '78%',
    description: 'Engajamento da população',
    trend: 'up',
    percentage: '+5%',
  },
  {
    title: 'Ocorrências',
    value: '32',
    description: 'Demandas abertas',
    trend: 'down',
    percentage: '-3%',
  },
];
