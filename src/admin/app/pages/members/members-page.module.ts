import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { MembersPage } from './members-page';

import { MemberList } from './member-list/member-list';
import { MemberGroup, AddGroup } from './member-group';
import { MemberRights } from './member-rights/member-rights';

import { ShareModule } from '../../share';
const modules = [
    ShareModule
];

const component = [
    MembersPage,
    MemberList,
    MemberGroup,
    MemberRights,
    AddGroup
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
    entryComponents: [
        AddGroup
    ]
})
export class MembersPageModule {}
