import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule],
})
export class HomeModule {}
