import {
    ButtonSetting, ButtonView, ButtonSelect,
    WeuiCellsSetting, WeuiCellsView,
    InputSetting, InputView,
    SliderSetting, SliderView,
    UploaderSetting, UploaderView,
    PageSetting, IconView,
    TabbarSelect, TabbarSetting, TabbarView,
    NavbarSelect, NavbarView, NavbarSetting,
    PickerSelect, PickerView, PickerSetting
} from './weui';

import {
    LayoutHeaderSelect, LayoutHeaderSetting, LayoutHeaderView,
    LayoutBodySelect, LayoutBodySetting, LayoutBodyView,
    LayoutContainerSelect, LayoutContainerSetting, LayoutContainerView,
    LayoutFooterSelect, LayoutFooterSetting, LayoutFooterView,
    LayoutSelect, LayoutView, LayoutSetting
} from './layouts';


export const COMPONENTS = [
    ButtonView, ButtonSetting, ButtonSelect,
    WeuiCellsSetting, WeuiCellsView,
    InputSetting, InputView,
    SliderSetting, SliderView,
    UploaderSetting, UploaderView,
    PageSetting, IconView,
    TabbarSelect, TabbarSetting, TabbarView,
    NavbarSelect, NavbarView, NavbarSetting,
    PickerSelect, PickerView, PickerSetting,

    // layouts
    LayoutSelect, LayoutView, LayoutSetting,
    LayoutHeaderSelect, LayoutHeaderSetting, LayoutHeaderView,
    LayoutBodySelect, LayoutBodySetting, LayoutBodyView,
    LayoutContainerSelect, LayoutContainerSetting, LayoutContainerView,
    LayoutFooterSelect, LayoutFooterSetting, LayoutFooterView
];

export const COMPONENTS_SELECT = {
    'button': ButtonSelect,
    'tabbar': TabbarSelect,
    'navbar': NavbarSelect,
    'picker': PickerSelect,
    'layout-container': LayoutContainerSelect,
    'layout-body': LayoutBodySelect,
    'layout-footer': LayoutFooterSelect,
    'layout-header': LayoutHeaderSelect
};

export const COMPONENTS_VIEW = {
    'button': ButtonView,
    'tabbar': TabbarView,
    'navbar': NavbarView,
    'picker': PickerView,
    'layout': LayoutView,
    'layout-container': LayoutContainerView,
    'layout-body': LayoutBodyView,
    'layout-footer': LayoutFooterView,
    'layout-header': LayoutHeaderView
};

export const COMPONENTS_SETTING = {
    'button': ButtonSetting,
    'page': PageSetting,
    'tabbar': TabbarSetting,
    'navbar': NavbarSetting,
    'picker': PickerSetting,
    'layout-container': LayoutContainerSetting,
    'layout-body': LayoutBodySetting,
    'layout-footer': LayoutFooterSetting,
    'layout-header': LayoutHeaderSetting
};

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatDialog } from '@angular/material';
@Injectable()
export class ComponentsService {
    onSelectStream: Subject<any> = new Subject();
    constructor(
        public dialog: MatDialog
    ) { }
    // 选择组件样式
    selectComponent(name: string) {
        const dialogRef = this.dialog.open(COMPONENTS_SELECT[name]);
        dialogRef.afterClosed().subscribe(res => {
            this.onSelectStream.next(res);
        });
    }
}

export * from './weui';
export * from './layouts';


