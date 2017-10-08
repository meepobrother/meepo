import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerWebIndexRoutingModule } from './runner-web-index-routing.module';
import { RunnerWebIndexComponent } from './runner-web-index.component';
import {HIboxModule} from "../../components-web/h-ibox/h-ibox.module";

@NgModule({
  imports: [
    CommonModule,
    RunnerWebIndexRoutingModule,
    HIboxModule
  ],
  declarations: [RunnerWebIndexComponent]
})
export class RunnerWebIndexModule { }
