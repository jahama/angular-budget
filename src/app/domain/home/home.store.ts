import { Project } from '@ab/data/models/project.model';
import { Task } from '@ab/data/models/task.model';
import { Store } from '@ab/util/store';
import { Injectable } from '@angular/core';
import { HomeViewModel } from './models/home-view.model';
import { ProjectView } from './models/project-view.model';

@Injectable({
  providedIn: 'root',
})
export class HomeStoreService extends Store<HomeViewModel> {
  constructor() {
    const initialState: HomeViewModel = { loading: false, error: false, projects: [], tasks: [] };
    super(initialState);
  }

  public setLoadingState(loading: boolean): void {
    const state = this.getState();
    state.loading = loading;
    state.error = false;
    if (loading) {
      state.projects = [];
      state.tasks = [];
    }
    this.setState(state);
  }

  public setErrorState(error: boolean): void {
    const state = this.getState();
    state.error = error;
    this.setState(state);
  }
  public addProjects(projects: Project[]): void {
    const state = this.getState();
    const projectViews: ProjectView[] = projects.map(p => ({
      ...p,
      pendingTasks: 0,
      completedTasks: 0,
    }));
    state.projects = state.projects.concat(projectViews);
    this.setState(state);
  }

  public addTasks(tasks: Task[]): void {
    const state = this.getState();
    state.tasks = state.tasks.concat(tasks);
    this.setState(state);
  }

  public updateProjectTasks(projectId: string, tasks: Task[]): void {
    const state = this.getState();
    const projectState = state.projects.find(p => p.id === projectId);
    if (projectState) {
      projectState.pendingTasks = tasks.filter(task => task.done === false).length;
      projectState.completedTasks = tasks.filter(task => task.done === true).length;
    }
    this.setState(state);
  }
}
