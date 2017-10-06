import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsGroup } from './shops-group';
import { ShareModule } from '../../../share';
import { ShopsGroupService } from './shops-group.service';
@NgModule({
    declarations: [
        ShopsGroup
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        ShopsGroup
    ],
    providers: [
        ShopsGroupService
    ],
})
export class ShopsGroupModule { }