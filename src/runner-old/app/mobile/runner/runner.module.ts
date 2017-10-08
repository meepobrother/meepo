import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerRoutingModule } from './runner-routing.module';
import { RunnerComponent } from './runner.component';

@NgModule({
  imports: [
    CommonModule,
    RunnerRoutingModule
  ],
  declarations: [RunnerComponent]
})
export class RunnerModule { }
