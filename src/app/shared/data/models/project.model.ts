import { ProjectStatus } from '@ab/util/valueToCSS';

export interface Project {
  name: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  budget: number;
  status: ProjectStatus;
  id: string;
  ownerId?: string;
}
