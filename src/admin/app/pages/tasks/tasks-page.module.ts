import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksPage } from './tasks-page';
import { TasksList } from './tasks-list/tasks-list';
import { TasksListAdd } from './tasks-list/tasks-list-add/tasks-list-add';

import { TasksGroup } from './tasks-group/tasks-group';
import { TasksGroupAdd } from './tasks-group/tasks-group-add/tasks-group-add';

import { TasksTag } from './tasks-tag/tasks-tag';
import { TasksTagAdd } from './tasks-tag/tasks-tag-add/tasks-tag-add';

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
        TasksPage,
        TasksListAdd,
        TasksList,
        TasksGroup,
        TasksGroupAdd,
        TasksTag,
        TasksTagAdd
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules],
    exports: [
        TasksPage
    ],
    providers: [],
    entryComponents: [
        TasksListAdd,
        TasksGroupAdd,
        TasksTagAdd
    ]
})
export class TasksPageModule { }