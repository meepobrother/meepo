import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LvyouIndexRoutingModule } from './lvyou-index-routing.module';
import { LvyouIndexComponent } from './lvyou-index.component';

@NgModule({
  imports: [
    CommonModule,
    LvyouIndexRoutingModule
  ],
  declarations: [LvyouIndexComponent]
})
export class LvyouIndexModule { }
