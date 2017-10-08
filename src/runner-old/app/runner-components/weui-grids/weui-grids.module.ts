import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeuiGridsComponent} from "./weui-grids.component";
import {RouterModule} from "@angular/router";
import {EditBtnModule} from "../edit-btn/edit-btn.module";
import {LinkSelectModule} from "../link-select/link-select.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditBtnModule,
    LinkSelectModule
  ],
  declarations: [WeuiGridsComponent],
  exports: [WeuiGridsComponent]
})
export class WeuiGridsModule { }
