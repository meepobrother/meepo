import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachRoutingComponent} from "./coach-routing/coach-routing.component";

const routes: Routes = [
  {
    path: 'coach',
    component: CoachRoutingComponent,
    children: [
      {
        path: 'lesson',
        loadChildren: './coach-lesson/coach-lesson.module#CoachLessonModule'
      },
      {
        path: 'lesson-detail/:id/:day',
        loadChildren: './coach-lesson-detail/coach-lesson-detail.module#CoachLessonDetailModule'
      },
      {
        path: 'teacher',
        loadChildren:'./coach-teacher/coach-teacher.module#CoachTeacherModule'
      },
      {
        path: 'teacher-detail/:id',
        loadChildren: './coach-teacher-detail/coach-teacher-detail.module#CoachTeacherDetailModule'
      },
      {
        path: 'teacher-join',
        loadChildren: './coach-teacher-join/coach-teacher-join.module#CoachTeacherJoinModule'
      },
      {
        path: 'teacher-index',
        loadChildren: './coach-teacher-index/coach-teacher-index.module#CoachTeacherIndexModule'
      },
      {
        path: 'mylesson', //我的课程
        loadChildren: './coach-mylesson/coach-mylesson.module#CoachMylessonModule'
      },
      {
        path: 'myinfo',
        loadChildren: './coach-myinfo/coach-myinfo.module#CoachMyinfoModule'
      },
      {
        path: 'mylog',
        loadChildren: './coach-mylog/coach-mylog.module#CoachMylogModule'
      },
      {
        path: 'seat',
        loadChildren: './coach-seat/coach-seat.module#CoachSeatModule'
      },
      {
        path: 'shopinfo', //店铺详情
        loadChildren: './coach-shopinfo/coach-shopinfo.module#CoachShopinfoModule'
      },
      {
        path: 'log', //我的预约
        loadChildren: './coach-log/coach-log.module#CoachLogModule'
      },
      {
        path: 'home',
        loadChildren: './coach-home/coach-home.module#CoachHomeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
