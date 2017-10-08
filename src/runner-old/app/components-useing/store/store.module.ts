import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {ZanIconModule} from "../../components-common/zan-icon/zan-icon.module";

@NgModule({
  imports: [
    CommonModule,
    ZanIconModule
  ],
  declarations: [StoreComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
