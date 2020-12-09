import { Routes } from '@angular/router';
import { AboutComponent } from './core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'heroes'},
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/hero.module').then( m => m.HeroesModule)
  },
  {
    path: 'villains',
    loadChildren: () => import('./villains/villain.module').then( m => m.VillainsModule)
  },
  { path: 'about', component: AboutComponent },
  // { path: '**', component: NotFoundComponent}
];
