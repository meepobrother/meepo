import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsGroup } from './shops-group';
import { ShareModule } from '../../../share';
import { ShopsGroupService } from './shops-group.service';
import { ShopsGroupAdd } from './shops-group-add';
import { ShopsTagsSelect } from './shops-tags-select';


@NgModule({
    declarations: [
        ShopsGroup,
        ShopsGroupAdd,
        ShopsTagsSelect
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        ShopsGroup,
        ShopsGroupAdd,
        ShopsTagsSelect
    ],
    providers: [
        ShopsGroupService
    ],
    entryComponents: [
        ShopsGroupAdd
    ]
})
export class ShopsGroupModule { }