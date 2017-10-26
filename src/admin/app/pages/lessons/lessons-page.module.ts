import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsPage } from './lessons-page';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share';

import { LessonsGroup } from './lessons-group/lessons-group';
import { LessonsList } from './lessons-list/lessons-list';
import { LessonsTags } from './lessons-tags/lessons-tags';

import { LessonsGroupAdd } from './lessons-group/lessons-group-add/lessons-group-add';
import { LessonsListAdd } from './lessons-list/lessons-list-add/lessons-list-add';
import { LessonsTagsAdd } from './lessons-tags/lessons-tags-add/lessons-tags-add';

const routes: Routes = [
    {
        path: '',
        component: LessonsPage
    }
];
@NgModule({
    declarations: [
        LessonsPage,
        LessonsGroup,
        LessonsList,
        LessonsTags,
        LessonsGroupAdd,
        LessonsListAdd,
        LessonsTagsAdd
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ShareModule],
    exports: [
        LessonsPage
    ],
    providers: [],
    entryComponents: [
        LessonsGroupAdd,
        LessonsListAdd,
        LessonsTagsAdd
    ]
})
export class LessonsPageModule { }