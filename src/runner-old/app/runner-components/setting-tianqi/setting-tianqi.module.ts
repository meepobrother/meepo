import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingTianqiComponent } from './setting-tianqi.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SettingTianqiComponent],
  exports: [SettingTianqiComponent]
})
export class SettingTianqiModule { }
