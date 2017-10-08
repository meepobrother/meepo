import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickCommonRoutingModule } from './quick-common-routing.module';
import { QuickCommonComponent } from './quick-common.component';

@NgModule({
  imports: [
    CommonModule,
    QuickCommonRoutingModule
  ],
  declarations: [QuickCommonComponent]
})
export class QuickCommonModule { }