import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberSelect } from './member-select';
@NgModule({
    declarations: [
        MemberSelect
    ],
    imports: [ CommonModule ],
    exports: [
        MemberSelect
    ],
    providers: [],
    entryComponents: [
        MemberSelect
    ]
})
export class MemberSelectModule {}