import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsPage } from './skills-page';
import { SkillsList, SkillsListEdit } from './skills-list';

import { SkillsGroup } from './skills-group/skills-group';
import { SkillsGroupAdd } from './skills-group/skills-group-add/skills-group-add';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: SkillsPage
    }
];

import { ShareModule } from '../../share';

const modules = [
    ShareModule
];
@NgModule({
    declarations: [
        SkillsPage,
        SkillsList,
        SkillsListEdit,
        SkillsGroup,
        SkillsGroupAdd
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules],
    exports: [
        SkillsPage
    ],
    providers: [],
    entryComponents: [
        SkillsListEdit,
        SkillsGroupAdd
    ]
})
export class SkillsPageModule { }