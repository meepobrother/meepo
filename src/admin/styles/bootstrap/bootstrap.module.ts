import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bootstrap } from './bootstrap';
@NgModule({
    declarations: [
        Bootstrap
    ],
    imports: [ CommonModule ],
    exports: [
        Bootstrap
    ],
    providers: [],
})
export class BootstrapModule {}