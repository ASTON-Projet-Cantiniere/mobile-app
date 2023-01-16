import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)}
    ],
  },
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)}
    ]
  },
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('@views/day-meals/day-meals.module').then(m => m.DayMealsModule)}
    ]
  },
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./views/menus/menus.module').then(m => m.MenusModule)}
    ]
  },
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./views/cart/cart.module').then(m => m.CartModule)}
    ]
  },
  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)}
    ]
  },
  {
    path: '',
    children: [
      {path: 'error', loadChildren: () => import('./views/error-page/error-page.module').then(m => m.ErrorPageModule)}
    ]
  },
  {path: '**', redirectTo: 'error/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
