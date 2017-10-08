import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskMapComponent } from './task-map.component';
import {GeolocationModule} from "../geolocation/geolocation.module";

@NgModule({
  imports: [
    CommonModule,
    GeolocationModule
  ],
  declarations: [TaskMapComponent],
  exports: [TaskMapComponent]
})
export class TaskMapModule { }
