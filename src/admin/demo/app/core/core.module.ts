import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule, AnimateCssModule, FontAwesomeModule, AdminPageModule } from '@meepo/admin';
@NgModule({
    declarations: [],
    imports: [ 
        BootstrapModule, AnimateCssModule, FontAwesomeModule, AdminPageModule
     ],
    exports: [
        BootstrapModule, AnimateCssModule, FontAwesomeModule, AdminPageModule
    ],
    providers: [],
})
export class CoreModule {}
