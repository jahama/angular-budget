import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CompletedPipe } from './completed.pipe';
import { LoadingComponent } from './loading/loading.component';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';
import { PageComponent } from './page/page.component';
import { PendingPipe } from './pending.pipe';
import { ProjectStatusPipe } from './project-status.pipe';
import { TagComponent } from './tag/tag.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    PageComponent,
    CardComponent,
    TagComponent,
    PendingPipe,
    CompletedPipe,
    NoDataYetComponent,
    LoadingComponent,
    ProjectStatusPipe,
    ErrorComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageComponent,
    CardComponent,
    TagComponent,
    PendingPipe,
    CompletedPipe,
    NoDataYetComponent,
    LoadingComponent,
    ProjectStatusPipe,
    ErrorComponent,
  ],
})
export class UiModule {}
