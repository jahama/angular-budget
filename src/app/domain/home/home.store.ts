import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/data/models/project.model';
import { Task } from 'src/app/shared/data/models/task.model';
import { Store } from 'src/app/shared/util/store';
import { HomeViewModel } from './models/home-view.model';

@Injectable({
  providedIn: 'root',
})
export class HomeStoreService extends Store<HomeViewModel> {
  constructor() {
    const initialState: HomeViewModel = { projects: [], tasks: [] };
    super(initialState);
  }

  addProjects(projects: Project[]): void {
    const state = this.getState();
    const projectViews = projects.map(p => ({ ...p, pendingTasks: 0, completedTasks: 0 }));
    state.projects = state.projects.concat(projectViews);
    this.setState(state);
  }

  addTasks(tasks: Task[]): void {
    const state = this.getState();
    state.tasks = state.tasks.concat(tasks);
    this.setState(state);
  }

  updateProjectTasks(projectId: string, tasks: Task[]): void {
    const state = this.getState();
    const projectState = state.projects.find(p => p.id === projectId);
    if (projectState) {
      projectState.pendingTasks = tasks.filter(task => task.done === false).length;
      projectState.completedTasks = tasks.filter(task => task.done === true).length;
    }
    this.setState(state);
  }
}
