import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerTaskMapRoutingModule } from './runner-task-map-routing.module';
import { RunnerTaskMapComponent } from './runner-task-map.component';
import {TaskMapModule} from "../../runner-components/task-map/task-map.module";

@NgModule({
  imports: [
    CommonModule,
    RunnerTaskMapRoutingModule,
    TaskMapModule
  ],
  declarations: [RunnerTaskMapComponent]
})
export class RunnerTaskMapModule { }
