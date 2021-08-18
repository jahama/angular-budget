import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  // eslint-disable-next-line prettier/prettier
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationStore } from './notification.store';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: NotificationStore) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // To Do:
    // 1. Decoupling the error handling from the notification display (i.e. error Kind not CSS class).
    // 2. Refactor nested conditions.

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.store.showNotification('No authenticated', 'info');
        } else if (error.status >= 500) {
          this.store.showNotification('Problems on our servers. Retry in a few minutes', 'danger');
        } else if (error.status >= 400) {
          this.store.showNotification('Review your data and retry', 'warning');
        } else if (error.status === 0) {
          this.store.showNotification('Server unreachable', 'danger');
        } else {
          this.store.showNotification('Sorry app error', 'danger');
        }
        return throwError(() => error);
      })
    );
  }
}
