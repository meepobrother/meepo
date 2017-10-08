import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerWebTasksRoutingModule } from './runner-web-tasks-routing.module';
import { RunnerWebTasksComponent } from './runner-web-tasks.component';

@NgModule({
  imports: [
    CommonModule,
    RunnerWebTasksRoutingModule
  ],
  declarations: [RunnerWebTasksComponent]
})
export class RunnerWebTasksModule { }
