import { getClassForProjectStatus, ProjectStatus, StatusClass } from '@ab/util/valueToCSS';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectStatus',
})
export class ProjectStatusPipe implements PipeTransform {
  transform(value: ProjectStatus, ...args: unknown[]): StatusClass {
    return getClassForProjectStatus(value);
  }
}
