import { Project } from '@ab/data/models/project.model';
import { ProjectsService } from '@ab/data/projects.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectsAddService {
  constructor(private service: ProjectsService, private router: Router) {}

  public addProject(project: Project): void {
    project.status = 'planned';
    this.service.postProject$(project).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
