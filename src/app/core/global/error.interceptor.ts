import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationStore } from './notification.store';
import { SecurityStore } from './security.store';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationStore: NotificationStore, private securityStore: SecurityStore) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.processStatusError(error);
        return throwError(() => error);
      })
    );
  }

  public processStatusError(error: HttpErrorResponse): void {
    if (error.status >= 500) {
      this.notificationStore.showNotification('👷‍♀️ Problem on server. Retry later', 'danger');
      return;
    }
    if (error.status === 404) {
      this.notificationStore.showNotification('🤷‍♂️ Not found, review your data', 'warning');
      return;
    }
    if ([401, 403].includes(error.status)) {
      this.notificationStore.showNotification('👮‍♀️ Not authorized', 'warning');
      this.securityStore.setUnauthorized();
      return;
    }
    if (error.status >= 400) {
      this.notificationStore.showNotification('🕵️‍♂️ Review your data and retry', 'warning');
      return;
    }
    if (error.status === 0) {
      this.notificationStore.showNotification('🌌 Server unreachable', 'danger');
      return;
    }
    this.notificationStore.showNotification('💥 Sorry app error', 'danger');
  }
}
