import { Task } from '@ab/data/models/task.model';
import { ProjectsService } from '@ab/data/projects.service';
import { TasksService } from '@ab/data/tasks.service';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HomeStoreService } from './home.store';
import { ProjectView } from './models/project-view.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public projectViews$: Observable<ProjectView[]> = this.store.projectViews$;
  public tasks$: Observable<Task[]> = this.store.tasks$;

  constructor(
    private projects: ProjectsService,
    private tasks: TasksService,
    private store: HomeStoreService
  ) {}

  public loadProjectViews(): void {
    this.projects
      .getProjects$()
      .pipe(
        tap(projects => this.store.addProjects(projects)),
        tap(projects => projects.forEach(p => this.loadTasksByProjectId(p.id)))
      )
      .subscribe();
  }

  private loadTasksByProjectId(projectId: string): void {
    this.tasks
      .getTasksByProjectId$(projectId)
      .pipe(
        tap(tasks => this.store.addTasks(tasks)),
        tap(tasks => this.store.updateProjectTasks(projectId, tasks))
      )
      .subscribe();
  }
}
