import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutDashboard, CalendarDays, Trophy, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isOpen = input<boolean>(true);

  readonly dashboardIcon = LayoutDashboard;

  readonly eventsIcon = CalendarDays;

  readonly rankingIcon = Trophy;
}
