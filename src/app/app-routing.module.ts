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
  {
    path: 'projects/add',
    loadChildren: () =>
      import('./domain/projects-add/projects-add.module').then(m => m.ProjectsAddModule),
  },
  {
    path: 'projects/edit/:id',
    loadChildren: () =>
      import('./domain/projects-edit/projects-edit.module').then(m => m.ProjectsEditModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
