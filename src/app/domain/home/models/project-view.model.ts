import { Project } from 'src/app/shared/data/models/project.model';

export interface ProjectView extends Project {
  pendingTasks: number;
  completedTasks: number;
}
