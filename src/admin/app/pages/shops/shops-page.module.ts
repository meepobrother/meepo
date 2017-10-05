import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ShopsPage } from './shops-page';
const routes: Routes = [
    {
        path: '',
        component: ShopsPage
    }
];
import { ShareModule } from '../../share';

const modules = [
    ShareModule
];
@NgModule({
    declarations: [
        ShopsPage
    ],
    imports: [ 
        CommonModule, 
        RouterModule.forChild(routes),
        ...modules
    ],
    exports: [],
    providers: [],
})
export class ShopsPageModule {}
