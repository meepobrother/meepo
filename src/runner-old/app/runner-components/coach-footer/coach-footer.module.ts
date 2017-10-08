import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachFooterComponent } from './coach-footer.component';
import {AlionModule} from "../alion/alion.module";

@NgModule({
  imports: [
    CommonModule,
    AlionModule
  ],
  declarations: [CoachFooterComponent],
  exports: [CoachFooterComponent]
})
export class CoachFooterModule { }
