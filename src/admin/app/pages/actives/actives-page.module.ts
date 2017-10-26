import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivesPage } from './actives-page';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share';

import { ActivesGroup } from './actives-group/actives-group';
import { ActivesList } from './actives-list/actives-list';
import { ActivesTags } from './actives-tags/actives-tags';

import { ActivesGroupAdd } from './actives-group/actives-group-add/actives-group-add';
import { ActivesListAdd } from './actives-list/actives-list-add/actives-list-add';
import { ActivesTagsAdd } from './actives-tags/actives-tags-add/actives-tags-add';

const routes: Routes = [
    {
        path: '',
        component: ActivesPage
    }
];
@NgModule({
    declarations: [
        ActivesPage,
        ActivesGroup,
        ActivesList,
        ActivesTags,
        ActivesGroupAdd,
        ActivesListAdd,
        ActivesTagsAdd
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ShareModule],
    exports: [
        ActivesPage
    ],
    providers: [],
    entryComponents: [
        ActivesGroupAdd,
        ActivesListAdd,
        ActivesTagsAdd
    ]
})
export class ActivesPageModule { }