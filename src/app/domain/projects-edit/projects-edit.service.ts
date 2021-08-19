import { Project } from '@ab/data/models/project.model';
import { ProjectsService } from '@ab/data/projects.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsEditService {
  constructor(private service: ProjectsService, private router: Router) {}

  public getProjectById$(projectid: string): Observable<Project> {
    return this.service.getProjectById$(projectid);
  }

  public editProject(project: Project): void {
    this.service.putProject$(project).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
