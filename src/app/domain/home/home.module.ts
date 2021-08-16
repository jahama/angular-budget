import { DataModule } from '@ab/data/data.module';
import { UiModule } from '@ab/ui/ui.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule, DataModule],
})
export class HomeModule {}
