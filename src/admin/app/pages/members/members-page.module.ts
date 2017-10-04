import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { MembersPage } from './members-page';

import { ShareModule } from '../../share';
import { MemberList } from './member-list/member-list';
import { MemberGroup } from './member-group/member-group';
import { MemberRights } from './member-rights/member-rights';


import { CdkTableModule } from '@angular/cdk/table';
import { MdTableModule, MatSortModule, MdFormFieldModule,MdInputModule } from '@angular/material';


const modules = [
    ShareModule,
    CdkTableModule,
    MdTableModule,
    MatSortModule,
    MdFormFieldModule,
    MdInputModule
];

const component = [
    MembersPage,
    MemberList,
    MemberGroup,
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
})
export class MembersPageModule {}
