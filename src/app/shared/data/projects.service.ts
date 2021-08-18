import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  postProject$(project: Project): Observable<Project> {
    return this.http
      .post<{ data: Project }>(environment.apiHost + 'projects', project)
      .pipe(map(res => res.data));
  }

  getProjects$(): Observable<Project[]> {
    return this.http
      .get<{ data: Project[] }>(environment.apiHost + 'projects')
      .pipe(map(res => res.data));
  }
}
