import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MOCK_RANKINGS } from '../../../mocks/mock-rankings';
import { RankingUser } from '@/features/dashboard/models/ranking.model';

@Component({
  selector: 'app-ranking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking-list.html',
  styleUrl: './ranking-list.css',
})
export class RankingList {
  @Input() rankings: RankingUser[] = [];
}
