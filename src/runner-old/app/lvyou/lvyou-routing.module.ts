import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lvyou/index',
    loadChildren: 'app/lvyou/lvyou-index/lvyou-index.module#LvyouIndexModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LvyouRoutingModule { }
