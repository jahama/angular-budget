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
  public projects$!: Observable<ProjectView[]>;
  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.projects$ = this.service.getProjects$();
  }
}
