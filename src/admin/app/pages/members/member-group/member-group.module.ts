import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberGroup } from './member-group';
import { AddGroup } from './add-group';

const components = [
    MemberGroup,
    AddGroup
];
import { ShareModule } from '../../../share';
const modules = [
    CommonModule,
    ShareModule
];

import { MemberGroupServiceService } from './member-group.service';
const services = [
    MemberGroupServiceService
];


@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        ...modules
    ],
    exports: [
        ...components
    ],
    providers: [
        ...services
    ],
    entryComponents: [
        AddGroup
    ]
})
export class MemberGroupModule {}