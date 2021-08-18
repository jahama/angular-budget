import { SecurityService } from '@ab/global/security.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ab-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginComponent {
  public user$ = this.service.user$;

  constructor(private service: SecurityService) {}
}
