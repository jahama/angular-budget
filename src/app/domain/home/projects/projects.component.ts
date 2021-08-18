import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectView } from '../models/project-view.model';

@Component({
  selector: 'ab-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  @Input() projects: ProjectView[] | null = null;
  @Output() addNewProject: EventEmitter<void> = new EventEmitter<void>();
}
