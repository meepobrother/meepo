import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbsListComponent } from './bbs-list/bbs-list.component';
import { BbsItemComponent } from './bbs-item/bbs-item.component';
import { BbsTagComponent } from './bbs-tag/bbs-tag.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";
import {ThreadclassService} from "services-components";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [BbsListComponent, BbsItemComponent, BbsTagComponent],
  exports: [BbsListComponent, BbsItemComponent,BbsTagComponent],
  providers: [ThreadclassService]
})
export class BbsListModule { }
