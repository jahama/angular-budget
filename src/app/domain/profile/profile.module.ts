import { UiModule } from '@ab/ui/ui.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, UiModule],
})
export class ProfileModule {}
