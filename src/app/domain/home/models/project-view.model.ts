import { Project } from '@ab/data/models/project.model';

export interface ProjectView extends Project {
  pendingTasks: number;
  completedTasks: number;
}
