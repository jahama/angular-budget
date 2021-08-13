import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [PageComponent, CardComponent],
  imports: [CommonModule],
  exports: [PageComponent, CardComponent],
})
export class UiModule {}
