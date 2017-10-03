import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown } from './dropdown/dropdown';
import { DropdownItem } from './dropdown-item/dropdown-item';
import { DropdownMenu } from './dropdown-menu/dropdown-menu';
import { DropdownToggle } from './dropdown-toggle/dropdown-toggle';
import { DropdownService } from './dropdown.service';
import { DropdownsService } from './dropdowns.service';

const components = [
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [ CommonModule ],
    exports: [
        ...components
    ],
    providers: [
        DropdownService,
        DropdownsService
    ],
})
export class DropdownModule {}