import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemosPage } from './demos.page';

@NgModule({
    declarations: [
        DemosPage
    ],
    imports: [CommonModule, RouterModule.forChild([
        {
            path: '',
            component: DemosPage
        }
    ])],
    exports: [],
    providers: [],
})
export class DemosPageModule { }