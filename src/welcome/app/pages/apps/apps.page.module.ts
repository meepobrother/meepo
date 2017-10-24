import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppsPage } from './apps.page';

@NgModule({
    declarations: [
        AppsPage
    ],
    imports: [CommonModule, RouterModule.forChild([
        {
            path: '',
            component: AppsPage
        }
    ])],
    exports: [],
    providers: [],
})
export class AppsPageModule { }