import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HSidebar } from './h-sidebar';
@NgModule({
    declarations: [
        HSidebar
    ],
    imports: [ CommonModule ],
    exports: [
        HSidebar
    ],
    providers: [],
})
export class HSidebarModule {}