import { Task } from '@ab/data/models/task.model';
export const TASKS: Task[] = [
  {
    id: 'create_a_virus',
    name: 'Create a virus',
    description: 'A modified version of a current virus',
    done: true,
    projectId: 'rule_the_world',
    ownerId: 'world_admin',
  },
  {
    id: 'deploy_the_virus',
    name: 'Deploy the virus',
    description: 'Release the virus to the environment on a cute pet',
    done: true,
    projectId: 'rule_the_world',
    ownerId: 'world_admin',
  },
  {
    id: 'have_a_rocket',
    name: 'Have a rocket',
    description: 'A very big rocket ',
    done: false,
    projectId: 'conquer_mars',
    ownerId: 'world_admin',
  },
];
