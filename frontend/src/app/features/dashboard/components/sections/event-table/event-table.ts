import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MOCK_EVENTS } from '../../../mocks/mock-events';

@Component({
  selector: 'app-event-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-table.html',
  styleUrl: './event-table.css',
})
export class EventTable {
  events = MOCK_EVENTS;
}
