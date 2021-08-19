import { Credentials } from '@ab/data/models/credentials.model';
import { User } from '@ab/data/models/user.model';
import { UsersService } from '@ab/data/users.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { NotificationStore } from './notification.store';
import { SecurityStore } from './security.store';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  public user$: Observable<User | undefined>;

  constructor(
    private users: UsersService,
    private securityStore: SecurityStore,
    private notificationStore: NotificationStore,
    private router: Router
  ) {
    securityStore
      .select$(s => s.unauthorized)
      .subscribe(unauthorized => {
        console.log('unauthorized$', unauthorized);
        if (unauthorized) router.navigate(['/login']);
      });
    this.user$ = this.securityStore
      .select$(s => s.userId)
      .pipe(
        switchMap(userId => {
          if (userId) return this.users.getUserByid$(userId);
          else return of(undefined);
        })
      );
  }

  public loginWithCredentials(credentials: Credentials): void {
    this.users.getTokenByCredentials(credentials).subscribe({
      next: token => {
        const userId = this.getUserFromToken(token);
        this.securityStore.setLoggedIn(userId, token);
        this.notificationStore.showNotification(`Welcome ${userId}`, 'success');
        this.router.navigate(['/']);
      },
    });
  }

  public logout(): void {
    this.securityStore.setLoggedOut();
    this.notificationStore.showNotification('Goodbye', 'warning');
    this.router.navigate(['/']);
  }

  private getUserFromToken(token: string): string {
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    const user = JSON.parse(decodedPayload);
    return user['id'];
  }
}
