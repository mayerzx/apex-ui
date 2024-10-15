import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'button', loadComponent: () => import('./pages/button/button.component').then((c) => c.ButtonComponent) },
];
