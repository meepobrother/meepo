import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent],
  providers: [RunnerUtilService]
})
export class TasksSearchModule { }
