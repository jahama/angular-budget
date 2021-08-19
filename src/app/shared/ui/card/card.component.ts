import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

export interface UserAction {
  caption: string;
  link?: string;
  command?: string;
}

export interface Card {
  title: string;
  actions: UserAction[];
}

@Component({
  selector: 'ab-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Output() actionClick = new EventEmitter<UserAction>();
  constructor() {}

  ngOnInit(): void {}
}
