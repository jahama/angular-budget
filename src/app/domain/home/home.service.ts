import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/data/models/project.model';
import { ProjectsService } from 'src/app/shared/data/projects.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private projects: ProjectsService) {}

  public getProjects$(): Observable<Project[]> {
    return this.projects.getprojects$();
  }
}
