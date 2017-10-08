import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarfilesEditRoutingModule } from './carfiles-edit-routing.module';
import { CarfilesEditComponent } from './carfiles-edit.component';

@NgModule({
  imports: [
    CommonModule,
    CarfilesEditRoutingModule
  ],
  declarations: [CarfilesEditComponent]
})
export class CarfilesEditModule { }
