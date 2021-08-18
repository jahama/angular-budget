import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getTokenByCredentials(credentials: { email: string; password: string }): Observable<string> {
    const params = new HttpParams()
      .append('email', encodeURIComponent(credentials.email))
      .append('password', encodeURIComponent(credentials.password));
    return this.http
      .get<{ data: string }>(`${environment.apiHost}users/credentials`, { params })
      .pipe(map(res => res.data));
  }

  public getUserByid$(userId: string): Observable<User> {
    return this.http
      .get<{ data: User }>(`${environment.apiHost}users/${userId}`)
      .pipe(map(res => res.data));
  }
}
