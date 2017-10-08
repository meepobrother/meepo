import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GongGaoComponent } from './gong-gao.component';
import {EditBtnModule} from "../edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [GongGaoComponent],
  exports: [GongGaoComponent]
})
  export class GongGaoModule { }
