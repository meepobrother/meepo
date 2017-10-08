import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreTabbarComponent} from "./core-tabbar.component";
import {CoreFormsModule} from "../core-forms/core-forms.module";
import {CoreTagsModule} from "../core-tags/core-tags.module";
import {NxTabbarModule} from "../../../runner-components/nx-tabbar/nx-tabbar.module";

@NgModule({
  imports: [
    CommonModule,
    CoreFormsModule,
    CoreTagsModule,
    NxTabbarModule
  ],
  declarations: [CoreTabbarComponent],
  exports: [CoreTabbarComponent]
})
export class CoreTabbarModule { }
