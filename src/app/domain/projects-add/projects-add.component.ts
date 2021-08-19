import { Project } from '@ab/data/models/project.model';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsAddService } from './projects-add.service';

@Component({
  selector: 'ab-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsAddComponent {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private service: ProjectsAddService) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      budget: new FormControl(0, [Validators.required, Validators.min(1000)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl(0, []),
      description: new FormControl('', []),
    });
  }

  public onSubmit(): void {
    const project: Project = this.form.value;
    this.service.addProject(project);
  }
}
