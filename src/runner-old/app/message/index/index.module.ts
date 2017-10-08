import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {RunnerComponentsModule} from "../../runner-components/runner-components.module";
import {MdButtonModule, MdCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    RunnerComponentsModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [IndexComponent]
})
export class MessageIndexModule { }
