import { Route } from '@angular/router';
import { ComponentsComponent } from './pages/components/components.component';

export const appRoutes: Route[] = [
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full',
      },
      {
        path: 'button',
        loadComponent: () => import('./pages/components/button/button.component').then((c) => c.ButtonComponent),
      },
    ],
  },
];
