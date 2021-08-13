import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface Card {
  title: string;
  actions: { caption: string; link?: string }[];
}

@Component({
  selector: 'ab-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  constructor() {}

  ngOnInit(): void {}
}
