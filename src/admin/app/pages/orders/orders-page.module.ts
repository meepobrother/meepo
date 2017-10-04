import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { OrdersPage } from './orders-page';
const routes: Routes = [
    {
        path: '',
        component: OrdersPage
    }
];
@NgModule({
    declarations: [
        OrdersPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class OrdersPageModule {}
