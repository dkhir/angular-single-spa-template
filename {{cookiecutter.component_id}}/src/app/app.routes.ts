import { Routes } from '@angular/router';

import { EmptyRouteComponent } from './modules/empty-route/empty-route.component';
import { MainComponent } from './modules/main/main.component';

export const ApplicationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'lazy',
    loadChildren: () => import('./modules/lazy-example/lazy-page.module')
      .then((m) => m.LazyPageModule),
  },
  { path: '**', component: EmptyRouteComponent },
];
