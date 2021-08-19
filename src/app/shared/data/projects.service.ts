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

  getProjects$(): Observable<Project[]> {
    return this.http
      .get<{ data: Project[] }>(`${environment.apiHost}projects`)
      .pipe(map(res => res.data));
  }

  getProjectById$(projectId: string): Observable<Project> {
    return this.http
      .get<{ data: Project }>(`${environment.apiHost}projects/${projectId}`)
      .pipe(map(res => res.data));
  }

  postProject$(project: Project): Observable<Project> {
    return this.http
      .post<{ data: Project }>(`${environment.apiHost}projects`, project)
      .pipe(map(res => res.data));
  }

  putProject$(project: Project): Observable<Project> {
    return this.http
      .put<{ data: Project }>(`${environment.apiHost}projects/${project.id}`, project)
      .pipe(map(res => res.data));
  }
}
