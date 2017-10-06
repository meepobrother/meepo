import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsGroup } from './shops-group';
@NgModule({
    declarations: [
        ShopsGroup
    ],
    imports: [ CommonModule ],
    exports: [
        ShopsGroup
    ],
    providers: [],
})
export class ShopsGroupModule {}