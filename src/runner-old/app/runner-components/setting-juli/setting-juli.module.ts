import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingJuliComponent } from './setting-juli.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SettingJuliComponent],
  exports: [SettingJuliComponent]
})
export class SettingJuliModule { }
