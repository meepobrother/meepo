import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressEditComponent} from "./address-edit.component";
import {FormsModule} from "@angular/forms";
import {LocpickerModule} from "../locpicker/locpicker.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LocpickerModule,
    RouterModule
  ],
  declarations: [AddressEditComponent],
  exports: [AddressEditComponent],
  providers: []
})
export class AddressEditModule { }
