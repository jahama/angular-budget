import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CompletedPipe } from './completed.pipe';
import { ErrorComponent } from './error/error.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';
import { PageComponent } from './page/page.component';
import { PendingPipe } from './pending.pipe';
import { ProjectStatusPipe } from './project-status.pipe';
import { TagComponent } from './tag/tag.component';

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
    FormFieldComponent,
  ],
  imports: [CommonModule, RouterModule],
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
    FormFieldComponent,
  ],
})
export class UiModule {}
