import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContainer } from './menu-container';
@NgModule({
    declarations: [
        MenuContainer
    ],
    imports: [ CommonModule ],
    exports: [
        MenuContainer
    ],
    providers: [],
})
export class MenuModule {}