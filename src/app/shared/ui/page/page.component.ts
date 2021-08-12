import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ab-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  @Input() pageTitle = '';
}
