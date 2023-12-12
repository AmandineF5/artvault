import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'art-list',
    loadChildren: () => import('art-features').then(item=> item.artRoutes)
  }
];
