import { Project } from '@ab/data/models/project.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProjectsEditService } from './projects-edit.service';

@Component({
  selector: 'ab-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsEditComponent implements OnInit {
  public form!: FormGroup;
  public project!: Project;
  public ready$!: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private service: ProjectsEditService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.params['id'];
    this.ready$ = this.service.getProjectById$(projectId).pipe(
      map(project => {
        this.project = project;
        this.form = this.fb.group({
          name: new FormControl(project.name, [Validators.required]),
          budget: new FormControl(project.budget, [Validators.required, Validators.min(1000)]),
          startDate: new FormControl(project.startDate, [Validators.required]),
          endDate: new FormControl(project.endDate, []),
          description: new FormControl(project.description, []),
        });
        return true;
      })
    );
  }

  public onSubmit(): void {
    const project: Project = { ...this.project, ...this.form.value };
    this.service.editProject(project);
  }
}
