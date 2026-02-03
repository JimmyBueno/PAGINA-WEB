import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'rojo',
    loadComponent: () => import('./component/rojo/rojo.component').then((m) => m.RojoComponent),
  },
  {
    path: '',
    redirectTo: 'rojo',
    pathMatch: 'full',
  },
  {
    path: 'verde',
    loadComponent: () => import('./component/verde/verde.component').then((m) => m.VerdeComponent),
  },
  {
    path: 'amarillo',
    loadComponent: () => import('./Component/amarillo/amarillo.component').then((m) => m.AmarilloComponent),
  },
];
