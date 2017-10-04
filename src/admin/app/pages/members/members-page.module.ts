import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MembersPage } from './members-page';

import { MemberList } from './member-list/member-list';
import { MemberRights } from './member-rights/member-rights';
import { ShareModule } from '../../share';
import { MemberGroupModule } from './member-group';


const modules = [
    ShareModule,
    MemberGroupModule
];

const component = [
    MembersPage,
    MemberList,
    MemberRights
];
const routes: Routes = [
    {
        path: '',
        component: MembersPage
    }
];
@NgModule({
    declarations: [
        ...component
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ...modules
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class MembersPageModule { }
