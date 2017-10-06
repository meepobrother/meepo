import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachsPage } from './coachs-page';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share';
const routes: Routes = [
    {
        path: '',
        component: CoachsPage
    }
];
@NgModule({
    declarations: [
        CoachsPage
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ShareModule],
    exports: [
        CoachsPage
    ],
    providers: [],
})
export class CoachsPageModule { }