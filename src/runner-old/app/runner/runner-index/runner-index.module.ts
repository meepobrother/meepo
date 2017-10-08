import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerIndexRoutingModule } from './runner-index-routing.module';
import { RunnerIndexComponent } from './runner-index.component';

@NgModule({
  imports: [
    CommonModule,
    RunnerIndexRoutingModule
  ],
  declarations: [RunnerIndexComponent]
})
export class RunnerIndexModule { }
