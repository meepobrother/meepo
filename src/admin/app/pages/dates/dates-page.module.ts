import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DatesPage } from './dates-page';
const routes: Routes = [
    {
        path: '',
        component: DatesPage
    }
];
@NgModule({
    declarations: [
        DatesPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class DatesPageModule {}