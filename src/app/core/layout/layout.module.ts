import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { StatusPipe } from './notification/status.pipe';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    StatusPipe,
    UserLoginComponent,
    ConfirmModalComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ConfirmModalComponent],
})
export class LayoutModule {}
