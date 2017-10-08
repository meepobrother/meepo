import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreBaojiaComponent } from './core-baojia.component';
import {EditBtnModule} from "../../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
      EditBtnModule,
      FormsModule
  ],
  declarations: [CoreBaojiaComponent],
  exports: [CoreBaojiaComponent]
})
export class CoreBaojiaModule { }
