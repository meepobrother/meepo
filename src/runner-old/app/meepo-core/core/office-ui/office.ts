import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeIcon } from './office-icon';
import { OfficePage } from './office-page';

let pages = [
    OfficePage,
    OfficeIcon
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: pages,
  exports: pages,
  entryComponents: pages
})
export class OfficeModule { }
