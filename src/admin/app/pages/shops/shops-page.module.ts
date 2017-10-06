import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ShopsPage } from './shops-page';
import { ShopsGroupModule } from './shops-group';
import { ShopsListModule } from './shops-list';
import { ShopsTagsModule } from './shops-tags';

const routes: Routes = [
    {
        path: '',
        component: ShopsPage
    }
];
import { ShareModule } from '../../share';

const modules = [
    ShareModule,
    ShopsTagsModule,
    ShopsListModule,
    ShopsGroupModule
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
