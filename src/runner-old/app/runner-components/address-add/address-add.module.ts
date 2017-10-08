import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressAddComponent} from "./address-add.component";
import {FormsModule} from "@angular/forms";
import {LocpickerModule} from "../locpicker/locpicker.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LocpickerModule
  ],
  declarations: [
    AddressAddComponent
  ],
  exports: [
    AddressAddComponent
  ],
  providers: []
})
export class AddressAddModule { }
