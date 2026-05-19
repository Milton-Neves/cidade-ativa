export interface RankingUser {
  name: string;

  score: number;

  level: 'gold' | 'silver' | 'bronze';

  position: number;

  district: string;
}
