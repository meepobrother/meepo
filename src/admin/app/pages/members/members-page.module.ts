import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { MembersPage } from './members-page';
const routes: Routes = [
    {
        path: '',
        component: MembersPage
    }
];
@NgModule({
    declarations: [
        MembersPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class MembersPageModule {}
