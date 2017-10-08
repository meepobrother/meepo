import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairWeixiuTagComponent } from './repair-weixiu-tag/repair-weixiu-tag.component';
import { RepairXicheTagComponent } from './repair-xiche-tag/repair-xiche-tag.component';
import { RepairMeirongTagComponent } from './repair-meirong-tag/repair-meirong-tag.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";
import { CarOcrComponent } from './car-ocr/car-ocr.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { RepairCoachTagComponent } from './repair-coach-tag/repair-coach-tag.component';

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [RepairWeixiuTagComponent, RepairXicheTagComponent, RepairMeirongTagComponent, CarOcrComponent, CarInfoComponent, RepairCoachTagComponent],
  exports: [RepairWeixiuTagComponent, RepairXicheTagComponent, RepairMeirongTagComponent,CarOcrComponent,CarInfoComponent,RepairCoachTagComponent]
})
export class RepairListModule { }
