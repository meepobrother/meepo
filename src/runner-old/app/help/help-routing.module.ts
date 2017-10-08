import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'help/index',
    loadChildren: './help-index/index.module#HelpIndexModule'
  },
  {
    path: 'help/detail/:id',
    loadChildren: './help-detail/detail.module#DetailModule'
  },
  {
    path: 'help/post',
    loadChildren: './help-post/post.module#PostModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
