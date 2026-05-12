import { Routes } from '@angular/router';
import { DashboardShell } from './core/layout/dashboard-shell/dashboard-shell';
import { Home } from './features/dashboard/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: DashboardShell,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
];
