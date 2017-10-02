import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HNavigation } from './h-navigation';
@NgModule({
    declarations: [
        HNavigation
    ],
    imports: [ CommonModule ],
    exports: [
        HNavigation
    ],
    providers: [],
})
export class HNavigationModule {}