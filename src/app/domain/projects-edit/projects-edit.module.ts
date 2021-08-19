import { DataModule } from '@ab/data/data.module';
import { UiModule } from '@ab/ui/ui.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsEditRoutingModule } from './projects-edit-routing.module';
import { ProjectsEditComponent } from './projects-edit.component';

@NgModule({
  declarations: [ProjectsEditComponent],
  imports: [CommonModule, ProjectsEditRoutingModule, UiModule, DataModule, ReactiveFormsModule],
})
export class ProjectsEditModule {}
