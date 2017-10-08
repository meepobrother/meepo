import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingTimeComponent } from './setting-time.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SettingTimeComponent],
  exports: [SettingTimeComponent]
})
export class SettingTimeModule { }
