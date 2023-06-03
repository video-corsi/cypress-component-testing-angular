import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./features/home/home.component')},
  { path: 'uikit', loadComponent: () => import('./features/uikit/uikit.component')},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
