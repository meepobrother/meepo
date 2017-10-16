import {
    MeepoAdvs, MeepoFilter,
    MeepoTasks, MeepoTags,
    MeepoFormMobile, MeepoFormTextarea,
    MeepoAddAddress
} from '../classes';

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
    LayoutService,
    LayoutHeaderSelect, LayoutHeaderSetting, LayoutHeaderView,
    LayoutBodySelect, LayoutBodySetting, LayoutBodyView,
    LayoutContainerSelect, LayoutContainerSetting, LayoutContainerView,
    LayoutFooterSelect, LayoutFooterSetting, LayoutFooterView,
    LayoutMenuSelect, LayoutMenuSetting, LayoutMenuView,
    LayoutSelect, LayoutView, LayoutSetting
} from './layouts';

import {
    MeepoAdvsSetting, MeepoAdvsView,
    MeepoFilterSetting, MeepoFilterView,
    MeepoTasksSetting, MeepoTasksView,
    MeepoTextSetting, MeepoTextView,
    MeepoTagsSetting, MeepoTagsView,
    MeepoFormMobileView, MeepoFormMobileSetting,
    MeepoFormTextareaView, MeepoFormTextareaSetting,
    MeepoSwiperTagsSetting, MeepoSwiperTagsView,

    // 地址
    MeepoAddAddressView, MeepoAddAddressSetting
} from './meepo-ui';

import {
    View, ViewSetting,
    ScrollView, ScrollViewSetting,
    SwiperItem, Swiper, SwiperSetting
} from './wxapp';

import {
    SettingContainerMargin, SettingContainerPadding,
    NumberComponent, NumberPx, FontSize, TextAlign
} from './setting';

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
    LayoutFooterSelect, LayoutFooterSetting, LayoutFooterView,
    LayoutMenuSelect, LayoutMenuSetting, LayoutMenuView,

    // components
    MeepoAdvsSetting, MeepoAdvsView,
    MeepoFilterSetting, MeepoFilterView,
    MeepoTasksSetting, MeepoTasksView,
    MeepoTextSetting, MeepoTextView,
    MeepoTagsSetting, MeepoTagsView,
    MeepoFormMobileView, MeepoFormMobileSetting,
    MeepoFormTextareaView, MeepoFormTextareaSetting,
    MeepoSwiperTagsSetting, MeepoSwiperTagsView,

    // wxapp
    View, ViewSetting,
    ScrollView, ScrollViewSetting,
    SwiperItem, Swiper, SwiperSetting,

    // setting
    SettingContainerMargin, SettingContainerPadding,
    NumberComponent, NumberPx, FontSize, TextAlign,

    // address
    MeepoAddAddressView, MeepoAddAddressSetting
];

export const COMPONENTS_SELECT = {
    'button': ButtonSelect,
    'tabbar': TabbarSelect,
    'navbar': NavbarSelect,
    'picker': PickerSelect,
    'layout-container': LayoutContainerSelect,
    'layout-body': LayoutBodySelect,
    'layout-footer': LayoutFooterSelect,
    'layout-header': LayoutHeaderSelect,
    'layout-menu': LayoutMenuSelect
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
    'layout-header': LayoutHeaderView,
    'layout-menu': LayoutMenuView,
    'meepo-advs': MeepoAdvsView,
    'meepo-filter': MeepoFilterView,
    'meepo-tasks': MeepoTasksView,
    'meepo-tags': MeepoTagsView,
    'meepo-form-mobile': MeepoFormMobileView,
    'meepo-form-textarea': MeepoFormTextareaView,
    'meepo-add-address': MeepoAddAddressView
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
    'layout-header': LayoutHeaderSetting,
    'layout-menu': LayoutMenuSetting,
    'layout': LayoutSetting,

    'meepo-advs': MeepoAdvsSetting,
    'meepo-filter': MeepoFilterSetting,
    'meepo-tasks': MeepoTasksSetting,
    'meepo-tags': MeepoTagsSetting,
    'meepo-form-mobile': MeepoFormMobileSetting,
    'meepo-form-textarea': MeepoFormTextareaSetting,

    'meepo-add-address': MeepoAddAddressSetting
};


export const WIDGETS = {
    'meepo-advs': MeepoAdvs,
    'meepo-filter': MeepoFilter,
    'meepo-tasks': MeepoTasks,
    'meepo-tags': MeepoTags,
    'meepo-form-mobile': MeepoFormMobile,
    'meepo-form-textarea': MeepoFormTextarea,
    'meepo-add-address': MeepoAddAddress
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatDialog } from '@angular/material';
@Injectable()
export class ComponentsService {
    onSelectStream: Subject<any> = new Subject();
    onCreateStream: Subject<any> = new Subject();

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
    // 创建
    createWidget(name: string) {
        const widget = new WIDGETS[name]();
        this.onCreateStream.next(widget);
    }
}

export * from './weui';
export * from './layouts';
export * from './wxapp';
