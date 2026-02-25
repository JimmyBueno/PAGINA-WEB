import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'verde',
    loadComponent: () => import('./Component/verde/verde.component').then((m) => m.VerdeComponent),
  },
  {
    path: '',
    redirectTo: 'verde',
    pathMatch: 'full',
  },
  {
    path: 'rojo',
    loadComponent: () => import('./Component/rojo/rojo.component').then((m) => m.RojoComponent),
  },
  {
    path: 'amarillo',
    loadComponent: () => import('./Component/amarillo/amarillo.component').then((m) => m.AmarilloComponent),
  },
  {
    path: 'wisky',
    loadComponent: () => import('./Component/wisky/wisky.component').then((m) => m.wiskyComponent),
  },
];

