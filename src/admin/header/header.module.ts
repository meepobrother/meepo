import { NgModule } from '@angular/core';
import { AdminHeader } from './header';
import { ShareModule } from '../share/share.module';
@NgModule({
    imports: [
        ShareModule
    ],
    exports: [
        AdminHeader
    ],
    declarations: [
        AdminHeader
    ]
})
export class AdminHeaderModule{}