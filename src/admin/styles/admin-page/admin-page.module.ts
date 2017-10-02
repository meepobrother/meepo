import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPage } from './admin-page';
@NgModule({
    declarations: [
        AdminPage
    ],
    imports: [ CommonModule ],
    exports: [
        AdminPage
    ]
})
export class AdminPageModule {}