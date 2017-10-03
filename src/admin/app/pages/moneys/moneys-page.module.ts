import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { MoneysPage } from './moneys-page';
const routes: Routes = [
    {
        path: '',
        component: MoneysPage
    }
];
@NgModule({
    declarations: [
        MoneysPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class MoneysPageModule {}
