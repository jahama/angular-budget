import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface Tag {
  caption: string;
  value: string;
  statusClass?: string;
  units?: string;
}
@Component({
  selector: 'ab-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent implements OnInit {
  @Input() tag!: Tag;
  constructor() {}

  ngOnInit(): void {}
}
