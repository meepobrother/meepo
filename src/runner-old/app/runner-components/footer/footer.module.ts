import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer.component";
import {RouterModule} from "@angular/router";
import {AlionModule} from "../alion/alion.module";
import {RunnerUtilService} from "../runner-util.service";
import {MusicTipModule} from "../music-tip/music-tip.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlionModule,
    MusicTipModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
  providers: [RunnerUtilService]
})
export class FooterModule { }
