import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLayoutComponent } from './core-layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [CoreLayoutComponent],
  exports: [CoreLayoutComponent]
})
export class CoreLayoutModule { }
