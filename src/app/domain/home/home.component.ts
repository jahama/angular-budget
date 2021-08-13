import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/data/models/project.model';
import { HomeService } from './home.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public projects$!: Observable<Project[]>;
  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.projects$ = this.service.getProjects$();
  }
}
