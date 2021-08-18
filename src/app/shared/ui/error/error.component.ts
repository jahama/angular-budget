import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ab-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
