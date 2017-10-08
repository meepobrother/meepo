import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesSelectComponent } from './modules-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModulesSelectComponent],
  exports: [ModulesSelectComponent]
})
export class ModulesSelectModule { }
