import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import {CoreUtilService} from "./core-util.service";
import {GroupModule} from "./group/group.module";
import {CorePagesModule} from "./core-pages/core-pages.module";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    GroupModule,
    CorePagesModule
  ],
  declarations: [],
  providers: [CoreUtilService]
})
export class MeepoCoreModule { }
