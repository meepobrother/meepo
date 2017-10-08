import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerShareRoutingModule } from './runner-share-routing.module';
import { RunnerShareComponent } from './runner-share.component';

@NgModule({
  imports: [
    CommonModule,
    RunnerShareRoutingModule
  ],
  declarations: [RunnerShareComponent]
})
export class RunnerShareModule { }
