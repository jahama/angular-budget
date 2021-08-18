import { SecurityService } from '@ab/global/security.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private service: SecurityService) {}

  public onLogin(): void {
    this.service.loginWithCredentials({ email: 'admin@world.org', password: 'S3cr3t' });
  }
}
