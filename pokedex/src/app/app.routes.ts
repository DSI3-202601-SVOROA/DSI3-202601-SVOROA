import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/pokemon-pages/pokemon-pages').then(m => m.PokemonPages)
  },
  {
    path: '**',
    redirectTo: ''
  }
];