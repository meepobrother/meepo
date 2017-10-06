import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachsPage } from './coachs-page';
import { Routes, RouterModule } from '@angular/router';
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
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [
        CoachsPage
    ],
    providers: [],
})
export class CoachsPageModule { }