import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudPage } from './cloud-page';

import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share';

const routes: Routes = [
    {
        path: '',
        component: CloudPage
    }
];

@NgModule({
    declarations: [
        CloudPage
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ShareModule],
    exports: [
        CloudPage
    ],
    providers: [],
})
export class CloudPageModule { }