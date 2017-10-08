import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerWebRouterComponent} from "./runner-web-router/runner-web-router.component";

const routes: Routes = [
  {
    path: 'runner/web',
    component: RunnerWebRouterComponent,
    children: [
      {
        path: 'index',
        loadChildren: './runner-web-index/runner-web-index.module#RunnerWebIndexModule'
      },
      {
        path: 'tasks',
        loadChildren: './runner-web-tasks/runner-web-tasks.module#RunnerWebTasksModule'
      },
      {
        path: 'member',
        loadChildren: './runner-web-member/runner-web-member.module#RunnerWebMemberModule'
      },
      {
        path: 'runner',
        loadChildren: './runner-web-runner/runner-web-runner.module#RunnerWebRunnerModule'
      },
      {
        path: 'money',
        loadChildren: './runner-web-money/runner-web-money.module#RunnerWebMoneyModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImeeposRunnerWebRoutingModule { }
