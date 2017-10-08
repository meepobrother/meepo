import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchFilterComponent],
  exports: [SearchFilterComponent]
})
export class SearchFilterModule { }
