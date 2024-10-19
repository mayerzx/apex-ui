import { Route } from '@angular/router';
import { ComponentsComponent } from './pages/components.component';

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
      { path: 'button', loadComponent: () => import('./pages/button/button.component').then((c) => c.ButtonComponent) },
    ],
  },
];
