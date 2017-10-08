import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressWayComponent } from './express-way.component';
import {ZanActionsheetModule} from "../../components-common/zan-actionsheet/zan-actionsheet.module";
import {ZanCellGroupModule} from "../../components-common/zan-cell-group/zan-cell-group.module";
import {ZanRadiosModule} from "../../components-common/zan-radios/com-radios.module";

@NgModule({
  imports: [
    CommonModule,
    ZanActionsheetModule,
    ZanCellGroupModule,
    ZanRadiosModule
  ],
  declarations: [ExpressWayComponent],
  exports: [ExpressWayComponent]
})
export class ExpressWayModule { }
