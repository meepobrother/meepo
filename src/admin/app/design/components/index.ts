
import {
    UuItemBoxSetting, UuItemBoxView,
    UuSwiperSetting, UuSwiperView,
    UuBenefitSetting, UuBenefitView,
    UuHeaderSetting, UuHeaderView,
    UuHomeHeaderSetting, UuHomeHeaderView,
    UuHomeItemSetting, UuHomeItemView,
    UuConSetting, UuConView,
    UuCouponSetting, UuCouponView
} from './uupao';

import { payui_setting_map, payui_settings } from './payui/setting';
import { payui_view_map, payui_views } from './payui/view';

import { runner_setting_map, runner_settings } from './runner/setting';
import { runner_view_map, runner_views } from './runner/view';

import { hm_setting_map, hm_settings } from './heimao/setting';
import { hm_view_map, hm_views } from './heimao/view';

import { hdb_setting_map, hdb_settings } from './hdb/setting';
import { hdb_view_map, hdb_views } from './hdb/view';

import {
    IqiyiHeadNavView, IqiyiHeadNavSetting
} from './iqiyi';

import {
    ActiveItemSetting, ActiveItemView,
    BargainItemSetting, BargainItemView,
    ArticleItemSetting, ArticleItemView,
    CityItemSetting, CityItemView
} from './active';

import {
    ButtonSetting, ButtonView, ButtonSelect,
    WeuiCellsSetting, WeuiCellsView,
    InputSetting, InputView,
    SliderSetting, SliderView,
    UploaderSetting, UploaderView,
    PageSetting, IconView,
    TabbarSelect, TabbarSetting, TabbarView,
    NavbarSelect, NavbarView, NavbarSetting,
    PickerSelect, PickerView, PickerSetting,
    WeuiPreviewView, WeuiPreviewSetting
} from './weui';

import {
    LayoutService,
    LayoutHeaderSelect, LayoutHeaderSetting, LayoutHeaderView,
    LayoutBodySelect, LayoutBodySetting, LayoutBodyView,
    LayoutContainerSelect, LayoutContainerSetting, LayoutContainerView,
    LayoutFooterSelect, LayoutFooterSetting, LayoutFooterView,
    LayoutMenuSelect, LayoutMenuSetting, LayoutMenuView,
    LayoutView, LayoutSetting,
    FloorSetting, FloorView
} from './layouts';

import { meepoui_settings, meepoui_setting_map } from './meepo-ui/setting';
import { meepoui_views, meepoui_view_map } from './meepo-ui/view';


import {
    forms_settings, forms_setting_map
} from './forms/setting';
import {
    forms_views, forms_view_map
} from './forms/view';

import {
    MeepoGoodsListSetting, MeepoGoodsListView
} from './goods';

import {
    TopicsListSetting, TopicsListView
} from './topics';

import {
    im_settings, im_setting_map
} from './im/setting';

import {
    im_views, im_view_map
} from './im/view';

import {
    View, ViewSetting,
    ScrollView, ScrollViewSetting,
    SwiperItem, Swiper, SwiperSetting
} from './wxapp';


import { IconSelectDialog, CreateBtnDialog } from '../../dialogs';

import {
    CardComponent, CardSetting, CardView, SlotDirective,
    ZanSearchSetting, ZanSearchView,
    ZanTagSetting, ZanTagView,
    ZanCellSetting, ZanCellView,
    ZanPanelSetting, ZanPanelView,
    ZanQuantitySetting, ZanQuantityView, 
    ZanSwitchSetting, ZanSwitchView
} from './zan-ui';

import {
    LayoutVesselSetting, LayoutVesselView,
    FreeVesselSetting, FreeVesselView
} from './vessel';

import { actions_component, actions_component_view, actions_component_setting, actions_models } from './actions';

import {
    JdHomeHeaderSetting, JdHomeHeaderView,
    JdHomeMoneySetting, JdHomeMoneyView,
    JdHomeOrderSetting, JdHomeOrderView,
    JdHomeListSetting, JdHomeListView
} from './jd';

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
    IconSelectDialog, CreateBtnDialog,

    // layouts
    LayoutView, LayoutSetting,
    LayoutHeaderSelect, LayoutHeaderSetting, LayoutHeaderView,
    LayoutBodySelect, LayoutBodySetting, LayoutBodyView,
    LayoutContainerSelect, LayoutContainerSetting, LayoutContainerView,
    LayoutFooterSelect, LayoutFooterSetting, LayoutFooterView,
    LayoutMenuSelect, LayoutMenuSetting, LayoutMenuView,

    // wxapp
    View, ViewSetting,
    ScrollView, ScrollViewSetting,
    SwiperItem, Swiper, SwiperSetting,

    // address
    // zan ui
    CardComponent, CardSetting, CardView,
    // forms
    MeepoGoodsListSetting, MeepoGoodsListView,
    TopicsListSetting, TopicsListView,
    UuItemBoxSetting, UuItemBoxView,
    UuSwiperSetting, UuSwiperView,
    UuBenefitSetting, UuBenefitView,
    UuHeaderSetting, UuHeaderView,
    UuHomeHeaderSetting, UuHomeHeaderView,
    UuHomeItemSetting, UuHomeItemView,
    UuConSetting, UuConView,
    UuCouponSetting, UuCouponView,
    ActiveItemSetting, ActiveItemView,
    BargainItemSetting, BargainItemView,
    ArticleItemSetting, ArticleItemView,
    CityItemSetting, CityItemView,

    IqiyiHeadNavView, IqiyiHeadNavSetting,
    ...actions_component,

    WeuiPreviewView, WeuiPreviewSetting,
    LayoutVesselSetting, LayoutVesselView,
    FreeVesselSetting, FreeVesselView,
    ZanSearchSetting, ZanSearchView,

    JdHomeHeaderSetting, JdHomeHeaderView,
    JdHomeMoneySetting, JdHomeMoneyView,
    JdHomeOrderSetting, JdHomeOrderView,
    JdHomeListSetting, JdHomeListView,

    ZanTagSetting, ZanTagView,
    ZanCellSetting, ZanCellView,
    ZanPanelSetting, ZanPanelView,
    ZanQuantitySetting, ZanQuantityView, 
    ZanSwitchSetting, ZanSwitchView,

    //
    FloorSetting, FloorView,
    ...meepoui_settings,
    ...meepoui_views,
    ...payui_settings,
    ...payui_views,
    ...runner_views,
    ...runner_settings,
    ...hm_settings,
    ...hm_views,
    ...hdb_settings,
    ...hdb_views,
    ...forms_views,
    ...forms_settings,
    ...im_settings,
    ...im_views
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
    // forms

    'meepo-topics-list': TopicsListView,
    'uu-item-box': UuItemBoxView,
    'uu-swiper': UuSwiperView,
    'uu-benefit': UuBenefitView,
    'uu-header': UuHeaderView,
    'uu-home-header': UuHomeHeaderView,
    'uu-home-item': UuHomeItemView,
    'uu-con': UuConView,
    'uu-coupon': UuCouponView,
    'active-item': ActiveItemView,
    'bargain-item': BargainItemView,
    'article-item': ArticleItemView,
    'city-item': CityItemView,
    
    'iqiyi-head-nav': IqiyiHeadNavView,
    'weui-cells': WeuiCellsView,
    
    
    ...actions_component_view,
    
    'zan-search': ZanSearchView,

    'jd-home-header': JdHomeHeaderView,
    'jd-home-money': JdHomeMoneyView,
    'jd-home-order': JdHomeOrderView,
    'jd-home-list': JdHomeListView,

    ...meepoui_view_map,
    ...payui_view_map,
    ...runner_view_map,
    ...hm_view_map,
    ...hdb_view_map,    
    ...forms_view_map,
    ...im_view_map
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
    // forms
    //
    'meepo-topics-list': TopicsListSetting,
    'uu-item-box': UuItemBoxSetting,
    'uu-swiper': UuSwiperSetting,
    'uu-benefit': UuBenefitSetting,
    'uu-header': UuHeaderSetting,
    'uu-home-header': UuHomeHeaderSetting,
    'uu-home-item': UuHomeItemSetting,
    'uu-con': UuConSetting,
    'uu-coupon': UuCouponSetting,
    'active-item': ActiveItemSetting,
    'bargain-item': BargainItemSetting,
    'article-item': ArticleItemSetting,
    'city-item': CityItemSetting,
    'iqiyi-head-nav': IqiyiHeadNavSetting,
    'weui-cells': WeuiCellsSetting,
    ...actions_component_setting,
    
    'zan-search': ZanSearchSetting,
    'jd-home-header': JdHomeHeaderSetting,
    'jd-home-money': JdHomeMoneySetting,
    'jd-home-order': JdHomeOrderSetting,
    'jd-home-list': JdHomeListSetting,
    
    ...meepoui_setting_map,
    ...payui_setting_map,
    ...runner_setting_map,
    ...hm_setting_map,
    ...hdb_setting_map,
    ...forms_setting_map,
    ...im_setting_map
};

export * from '../classes/widgets';
import { WIDGETS } from '../classes/widgets';

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
        console.log('createWidget',name);
        console.log(WIDGETS);
        const widget = new WIDGETS[name]();
        console.log('createWidget',widget);
        this.onCreateStream.next(widget);
    }
}

export * from './weui';
export * from './layouts';
export * from './wxapp';
export * from './zan-ui';
