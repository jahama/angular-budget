import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProjectsService } from 'src/app/shared/data/projects.service';
import { TasksService } from 'src/app/shared/data/tasks.service';
import { HomeStoreService } from './home.store';
import { HomeViewModel } from './models/home-view.model';
import { ProjectView } from './models/project-view.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public projectViews$: Observable<ProjectView[]>;

  constructor(
    private projects: ProjectsService,
    private tasks: TasksService,
    private store: HomeStoreService
  ) {
    this.projectViews$ = this.store.select$<ProjectView[]>(
      (state: HomeViewModel) => state.projects
    );
  }

  public loadProjectViews(): void {
    this.projects
      .getProjects$()
      .pipe(
        tap(projects => this.store.addProjects(projects)),
        tap(projects => projects.forEach(pvw => this.loadTasksByProjectId(pvw.id)))
      )
      .subscribe();
  }

  loadTasksByProjectId(projectId: string): void {
    this.tasks
      .getTasksByProjectId$(projectId)
      .pipe(
        tap(tasks => this.store.addTasks(tasks)),
        tap(tasks => this.store.updateProjectTasks(projectId, tasks))
      )
      .subscribe();
  }
}
