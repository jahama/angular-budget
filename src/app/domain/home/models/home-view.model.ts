import { Task } from 'src/app/shared/data/models/task.model';
import { ProjectView } from './project-view.model';

export interface HomeViewModel {
  projects: ProjectView[];
  tasks: Task[];
}
