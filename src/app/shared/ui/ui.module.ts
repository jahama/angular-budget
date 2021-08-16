import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { CardComponent } from './card/card.component';
import { TagComponent } from './tag/tag.component';
import { StatusPipe } from './status.pipe';
import { PendingPipe } from './pending.pipe';
import { CompletedPipe } from './completed.pipe';

@NgModule({
  declarations: [PageComponent, CardComponent, TagComponent, StatusPipe, PendingPipe, CompletedPipe],
  imports: [CommonModule],
  exports: [PageComponent, CardComponent, TagComponent, StatusPipe, PendingPipe, CompletedPipe],
})
export class UiModule {}
