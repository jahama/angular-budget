import { Task } from '@ab/data/models/task.model';
import { ProjectView } from './models/project-view.model';

export function updateProjectViewWithTasks(projectView: ProjectView, tasks: Task[]): ProjectView {
  projectView.pendingTasks = tasks.filter(task => task.done === false).length;
  projectView.completedTasks = tasks.filter(task => task.done === true).length;
  return projectView;
}
