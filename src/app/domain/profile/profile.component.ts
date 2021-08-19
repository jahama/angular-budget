import { User } from '@ab/data/models/user.model';
import { SecurityService } from '@ab/global/security.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  public user$: Observable<User | undefined> = this.service.user$;

  constructor(private service: SecurityService) {}

  public onLogoutActionClick(): void {
    this.service.logout();
  }
}
