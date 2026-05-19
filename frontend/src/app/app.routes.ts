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

      {
        path: 'eventos',

        loadComponent: () =>
          import('./features/events/pages/events-page/events-page').then((m) => m.EventsPage),
      },

      {
        path: 'ranking',

        loadComponent: () =>
          import('./features/ranking/pages/ranking-page/ranking-page').then((m) => m.RankingPage),
      },
    ],
  },
];
