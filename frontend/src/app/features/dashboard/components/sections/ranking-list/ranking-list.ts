import { RankingUser } from '@/features/dashboard/models/ranking.model';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ranking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking-list.html',
  styleUrl: './ranking-list.css',
})
export class RankingList {
  rankings = input.required<RankingUser[]>();
}
