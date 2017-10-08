import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssistiveTouchComponent} from "./assistive-touch.component";
import {RouterModule} from "@angular/router";
import {RunnerUtilService} from "../runner-util.service";
import {CoreComponentsModule} from "../../meepo-core/core-components/core-components.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreComponentsModule
  ],
  declarations: [AssistiveTouchComponent],
  exports: [AssistiveTouchComponent],
  providers: [RunnerUtilService]
})
export class AssistiveTouchModule { }
