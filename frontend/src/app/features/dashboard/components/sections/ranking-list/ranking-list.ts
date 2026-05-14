import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MOCK_RANKINGS } from '../../../mocks/mock-rankings';

@Component({
  selector: 'app-ranking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking-list.html',
  styleUrl: './ranking-list.css',
})
export class RankingList {
  rankings = MOCK_RANKINGS;
}
