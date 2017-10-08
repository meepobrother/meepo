import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { StepComponent } from './step/step.component';
import {AlionModule} from "../../../../runner-components/alion/alion.module";

@NgModule({
  imports: [
    CommonModule,
    AlionModule
  ],
  declarations: [StepsComponent, StepComponent],
  exports: [StepsComponent, StepComponent]
})
export class StepsModule { }
