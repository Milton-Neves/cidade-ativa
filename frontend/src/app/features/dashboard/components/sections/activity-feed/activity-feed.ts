import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MOCK_ACTIVITIES } from '../../../mocks/mock-activities';

@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-feed.html',
  styleUrl: './activity-feed.css',
})
export class ActivityFeed {
  activities = MOCK_ACTIVITIES;
}
