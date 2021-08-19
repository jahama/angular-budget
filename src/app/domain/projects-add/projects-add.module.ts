import { DataModule } from '@ab/data/data.module';
import { UiModule } from '@ab/ui/ui.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsAddRoutingModule } from './projects-add-routing.module';
import { ProjectsAddComponent } from './projects-add.component';

@NgModule({
  declarations: [ProjectsAddComponent],
  imports: [CommonModule, ProjectsAddRoutingModule, UiModule, DataModule, ReactiveFormsModule],
})
export class ProjectsAddModule {}
