import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationStore } from './notification.store';
import { SecurityStore } from './security.store';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationStore: NotificationStore, private securityStore: SecurityStore) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // To Do:
    // - Refactor nested conditions.

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if ([401, 403].includes(error.status)) {
          this.notificationStore.showNotification('No authorized', 'warning');
          this.securityStore.setUnauthorized();
        } else if (error.status >= 500) {
          this.notificationStore.showNotification(
            'Problems on our servers. Retry in a few minutes',
            'danger'
          );
        } else if (error.status >= 400) {
          this.notificationStore.showNotification('Review your data and retry', 'warning');
        } else if (error.status === 0) {
          this.notificationStore.showNotification('Server unreachable', 'danger');
        } else {
          this.notificationStore.showNotification('Sorry app error', 'danger');
        }
        return throwError(() => error);
      })
    );
  }
}
