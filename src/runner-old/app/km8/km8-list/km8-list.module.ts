import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import { Km8TagComponent } from './km8-tag/km8-tag.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [Km8TagComponent],
  exports: [Km8TagComponent]
})
export class Km8ListModule { }
