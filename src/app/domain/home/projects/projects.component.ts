import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from 'src/app/shared/data/models/project.model';

@Component({
  selector: 'ab-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
}
