import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Task } from 'src/app/shared/data/models/task.model';
import { ProjectsService } from 'src/app/shared/data/projects.service';
import { TasksService } from 'src/app/shared/data/tasks.service';
import { ProjectView } from './models/project-view.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private projects: ProjectsService, private tasks: TasksService) {}

  public getProjects$(): Observable<ProjectView[]> {
    return this.projects.getProjects$().pipe(
      map(projects =>
        projects.map(project => ({ ...project, pendingTasks: 0, completedTasks: 0 }))
      ),
      switchMap(projects => this.getProjectsTasks$(projects))
    );
  }
  public getProjectsTasks$(projects: ProjectView[]): Observable<ProjectView[]> {
    return forkJoin(projects.map(project => this.tasks.getTaksByProjectId$(project.id))).pipe(
      map((allTasks: Task[][]) => {
        return projects.map(project => {
          const projectTasks = allTasks.find(tasks =>
            tasks.find(task => task.projectId === project.id)
          );
          return {
            ...project,
            pendingTasks: projectTasks
              ? projectTasks.filter((task: Task) => task.done === false).length
              : 0,
            completedTasks: projectTasks
              ? projectTasks.filter(task => task.done === true).length
              : 0,
          };
        });
      })
    );
  }
}
