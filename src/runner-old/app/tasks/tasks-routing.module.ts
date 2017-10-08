import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tasks/index',
    loadChildren: 'app/tasks/index/index.module#TasksIndexModule'
  },
  {
    path: 'tasks/search',
    loadChildren: 'app/tasks/search/search.module#TasksSearchModule'
  },
  {
    path: 'tasks/detail/:id',
    loadChildren: 'app/tasks/task-detail/task-detail.module#TaskDetailModule'
  },
  {
    path: 'tasks/rout-map/:url',
    loadChildren: 'app/tasks/rout-map/rout-map.module#RoutMapModule'
  },
  {
    path: 'tasks/ticket/:id',
    loadChildren: 'app/tasks/ticket/ticket.module#TicketModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
