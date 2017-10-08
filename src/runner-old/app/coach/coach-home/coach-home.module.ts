import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachHomeRoutingModule } from './coach-home-routing.module';
import { CoachHomeComponent } from './coach-home.component';
import {HeadImgModule} from "../../runner-components/head-img/head-img.module";
import {MyjdContentModule} from "../../runner-components/myjd-content/myjd-content.module";
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";

@NgModule({
  imports: [
    CommonModule,
    CoachHomeRoutingModule,
    HeadImgModule,
    MyjdContentModule,
    EditBtnModule
  ],
  declarations: [CoachHomeComponent]
})
export class CoachHomeModule { }
