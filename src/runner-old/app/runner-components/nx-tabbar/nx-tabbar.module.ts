import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxTabbarComponent } from './nx-tabbar.component';
import {EditBtnModule} from "../edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
      FormsModule
  ],
  declarations: [NxTabbarComponent],
  exports: [NxTabbarComponent]
})
export class NxTabbarModule { }
