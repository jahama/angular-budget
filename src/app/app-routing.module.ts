import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./domain/home/home.module').then(m => m.HomeModule) },
  {
    path: 'about',
    loadChildren: () => import('./domain/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./domain/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '*',
    redirectTo: '',
  },
  {
    path: 'profile',
    loadChildren: () => import('./domain/profile/profile.module').then(m => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
