import { Task } from '@ab/data/models/task.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { ProjectView } from './models/project-view.model';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public projects$: Observable<ProjectView[]> = this.service.projectViews$;
  public tasks$: Observable<Task[]> = this.service.tasks$;
  public loading$: Observable<boolean> = this.service.loading$;
  public error$: Observable<boolean> = this.service.error$;

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.service.loadProjectViews();
  }

  onDelete(projectId: string): void {
    this.service.deleteProject(projectId);
  }
}
