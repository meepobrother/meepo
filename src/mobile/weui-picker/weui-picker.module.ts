import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    WeuiPickerItem,
    WeuiPickerItemDisabled,
} from './picker-item';

import {
    WeuiPickerGroup
} from './picker-group';

import {
    WeuiPickerAction,
    WeuiPickerHd,
    WeuiPickerActionLeft,
    WeuiPickerActionRight
} from './picker-hd';

import {
    WeuiPicker,
    WeuiPickerBd,
    WeuiPickerContent,
    WeuiPickerIndicator,
    WeuiPickerMask,
} from './weui-picker';


const components = [
    WeuiPicker,
    WeuiPickerAction,
    WeuiPickerBd,
    WeuiPickerContent,
    WeuiPickerGroup,
    WeuiPickerHd,
    WeuiPickerIndicator,
    WeuiPickerItem,
    WeuiPickerItemDisabled,
    WeuiPickerMask,
    WeuiPickerActionLeft,
    WeuiPickerActionRight
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [CommonModule],
    exports: [
        ...components
    ]
})
export class WeuiPickerModule { }
