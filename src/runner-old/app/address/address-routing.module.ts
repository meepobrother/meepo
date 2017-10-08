import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'address/add',
    loadChildren: './add/add.module#AddressAddPageModule'
  },
  {
    path: 'address/edit/:id',
    loadChildren: './edit/edit.module#AddressEditPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
