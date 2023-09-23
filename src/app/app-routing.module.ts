import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StateService } from './state/state.service';
import { SeguridadGuardGuard } from './seguridad-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pag-principal',

    loadChildren: () => import('./pag-principal/pag-principal.module').then( m => m.PagPrincipalPageModule)
  },
  {
    path: 'inicio',
    canActivate:[SeguridadGuardGuard],

    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',

    loadChildren: () => import('./pag-principal/pag-principal.module').then( m => m.PagPrincipalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
