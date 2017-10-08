import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreTagsComponent} from "./core-tags.component";
import {EditBtnModule} from "../../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [CoreTagsComponent],
  exports: [CoreTagsComponent]
})
export class CoreTagsModule { }
