import { Task } from '@ab/data/models/task.model';
import { ProjectView } from './project-view.model';

export interface HomeViewModel {
  loading: boolean;
  error: boolean;
  projects: ProjectView[];
  tasks: Task[];
}
