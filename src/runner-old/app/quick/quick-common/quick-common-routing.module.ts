import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickCommonComponent } from './quick-common.component';

const routes: Routes = [
  {
    path: '',
    component: QuickCommonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickCommonRoutingModule { }
