import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksPage } from './tasks-page';
const routes: Routes = [
    {
        path: '',
        component: TasksPage
    }
];
import { ShareModule } from '../../share';

const modules = [
    ShareModule
];
@NgModule({
    declarations: [
        TasksPage
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules],
    exports: [
        TasksPage
    ],
    providers: [],
})
export class TasksPageModule { }