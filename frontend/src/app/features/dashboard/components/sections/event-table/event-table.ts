import { EventItem } from '@/features/dashboard/models/event.model';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-table.html',
  styleUrl: './event-table.css',
})
export class EventTable {
  @Input() events: EventItem[] = [];
}
