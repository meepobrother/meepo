import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditBtnComponent} from "./edit-btn.component";
import {RunnerUtilService} from "../runner-util.service";
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EditBtnComponent],
  exports: [EditBtnComponent],
  providers: [RunnerUtilService]
})
export class EditBtnModule { }
