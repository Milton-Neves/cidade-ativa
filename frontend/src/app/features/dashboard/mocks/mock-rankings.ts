import { RankingUser } from '../models/ranking.model';

export const MOCK_RANKINGS: RankingUser[] = [
  {
    name: 'Carlos Silva',
    score: 1840,
    level: 'gold',
    position: 1,
    district: 'Centro',
  },
  {
    name: 'Marina Costa',
    score: 1630,
    level: 'silver',
    position: 2,
    district: 'Zona Norte',
  },
  {
    name: 'Felipe Souza',
    score: 1490,
    level: 'bronze',
    position: 3,
    district: 'Zona Sul',
  },
  {
    name: 'Ana Lima',
    score: 1320,
    level: 'bronze',
    position: 4,
    district: 'Centro',
  },
];
