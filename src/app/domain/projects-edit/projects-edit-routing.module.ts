import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsEditComponent } from './projects-edit.component';

const routes: Routes = [{ path: '', component: ProjectsEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsEditRoutingModule {}
