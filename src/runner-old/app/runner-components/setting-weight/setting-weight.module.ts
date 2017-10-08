import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingWeightComponent } from './setting-weight.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SettingWeightComponent],
  exports: [SettingWeightComponent]
})
export class SettingWeightModule { }
