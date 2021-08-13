import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { CardComponent } from './card/card.component';
import { TagComponent } from './tag/tag.component';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [PageComponent, CardComponent, TagComponent, StatusPipe],
  imports: [CommonModule],
  exports: [PageComponent, CardComponent, TagComponent, StatusPipe],
})
export class UiModule {}
