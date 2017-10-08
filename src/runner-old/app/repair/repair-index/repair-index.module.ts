import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairIndexRoutingModule } from './repair-index-routing.module';
import { RepairIndexComponent } from './repair-index.component';

@NgModule({
  imports: [
    CommonModule,
    RepairIndexRoutingModule
  ],
  declarations: [RepairIndexComponent],
  exports: [RepairIndexComponent]
})
export class RepairIndexModule { }
