import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsksListComponent } from './asks-list/asks-list.component';
import { AsksItemComponent } from './asks-item/asks-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AsksListComponent, AsksItemComponent],
  exports: [AsksListComponent, AsksItemComponent]
})
export class AsksListModule { }
