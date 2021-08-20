import { Task } from '@ab/data/models/task.model';
import { ProjectsService } from '@ab/data/projects.service';
import { TasksService } from '@ab/data/tasks.service';
import { ConfirmStore } from '@ab/global/confirm.store';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HomeStoreService } from './home.store';
import { ProjectView } from './models/project-view.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public projectViews$: Observable<ProjectView[]> = this.store.select$(state => state.projects);
  public tasks$: Observable<Task[]> = this.store.select$(state => state.tasks);
  public loading$: Observable<boolean> = this.store.select$(state => state.loading);
  public error$: Observable<boolean> = this.store.select$(state => state.error);

  constructor(
    private projects: ProjectsService,
    private tasks: TasksService,
    private store: HomeStoreService,
    private confirm: ConfirmStore
  ) {}

  public addNewProject(): void {
    this.projects
      .postProject$({ id: '', name: '', startDate: new Date(), budget: 0, status: 'planned' })
      .subscribe();
  }

  public loadProjectViews(): void {
    this.store.setLoadingState(true);
    this.projects
      .getProjects$()
      .pipe(
        tap(projects => this.store.addProjects(projects)),
        tap(() => this.store.setLoadingState(false)),
        tap(projects => projects.forEach(p => this.loadTasksByProjectId(p.id)))
      )
      .subscribe({
        error: err => {
          this.store.setLoadingState(false);
          this.store.setErrorState(true);
        },
      });
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

  public deleteProject(projectId: string): void {
    this.confirm.showModal({
      title: 'Delete Project',
      message: 'Are you sure you want to delete this project?',
    });
    this.confirm.status$.subscribe(status => {
      if (status === 'confirmed') {
        this.projects
          .deleteProject$(projectId)
          .pipe(tap(() => this.loadProjectViews()))
          .subscribe();
      }
    });
  }
}
