import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface Field {
  label: string;
  name: string;
  errors?: any;
  errorMessage?: string;
}

@Component({
  selector: 'ab-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: { class: 'column is-half' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent implements OnInit {
  @Input() field!: Field;
  constructor() {}

  ngOnInit(): void {}
}
