import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerWebRunnerRoutingModule } from './runner-web-runner-routing.module';
import { RunnerWebRunnerComponent } from './runner-web-runner.component';

@NgModule({
  imports: [
    CommonModule,
    RunnerWebRunnerRoutingModule
  ],
  declarations: [RunnerWebRunnerComponent]
})
export class RunnerWebRunnerModule { }
