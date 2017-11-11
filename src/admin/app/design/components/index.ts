
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

import {
    PayRecordSetting, PayRecordView,
    PaySelectMoneySetting, PaySelectMoneyView,
    PayuiFlowSetting, PayuiFlowView,
    PayStateSetting, PayStateView
} from './payui';

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
    TaskListSetting, TaskListView,
    RunnerListSetting, RunnerListView,
    AddMoneyViewComponent, AddMoneySettingComponent,
    TaskDetailView, TaskDetailSetting
} from './runner';

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
    LayoutView, LayoutSetting
} from './layouts';

import {
    MeepoAdvsSetting, MeepoAdvsView,
    MeepoFilterSetting, MeepoFilterView,
    MeepoTasksSetting, MeepoTasksView,
    MeepoTextSetting, MeepoTextView,
    MeepoTagsSetting, MeepoTagsView,
    MeepoSwiperTagsSetting, MeepoSwiperTagsView,
    // 地址
    MeepoAddAddressView, MeepoAddAddressSetting,
    MeepoListSetting, MeepoListView,
    MeepoGridsSetting, MeepoGridsView,
    MeepoDanmuView, MeepoDanmuSetting,
    MeepoMarqueeSetting, MeepoMarqueeView,
    MeepoVideoSetting, MeepoVideoView,
    MeepoVoiceSetting, MeepoVoiceView,

    // meepo
    MeepoTabbarSetting, MeepoTabbarView,
    MeepoTitleSetting, MeepoTitleView,
    MeepoCardSetting, MeepoCardView,
    MeepoTabsSetting, MeepoTabsView
} from './meepo-ui';

import {
    MeepoFormMobileView, MeepoFormMobileSetting,
    MeepoFormTextareaView, MeepoFormTextareaSetting,
    MeepoFormWeightSetting, MeepoFormWeightView,
    MeepoFormTijiSetting, MeepoFormTijiView,
    MeepoFormPriceSetting, MeepoFormPriceView,
    MeepoFormMoneySetting, MeepoFormMoneyView,
    MeepoFormFeeSetting, MeepoFormFeeView,

    MeepoFormTimeSetting, MeepoFormTimeView,
    MeepoFormTimeStartSetting, MeepoFormTimeStartView,
    MeepoFormTimeEndSetting, MeepoFormTimeEndView,
    MeepoFormInputSetting, MeepoFormInputView,
    MeepoFormOrderSetting, MeepoFormOrderView,
    MeepoFormTagSetting, MeepoFormTagView,
    MeepoFormBaojiaSetting, MeepoFormBaojiaView,
    //
    MeepoFormAddressEndSetting, MeepoFormAddressEndView,
    MeepoFormAddressSetting, MeepoFormAddressStartSetting,
    MeepoFormAddressStartView, MeepoFormAddressView,

    MeepoFormIdcardSetting, MeepoFormIdcardView,
    MeepoFormBtnSetting, MeepoFormBtnView,
    MeepoFormRealnameView, MeepoFormRealnameSetting
} from './forms';

import {
    MeepoGoodsListSetting, MeepoGoodsListView
} from './goods';

import {
    TopicsListSetting, TopicsListView
} from './topics';

import {
    View, ViewSetting,
    ScrollView, ScrollViewSetting,
    SwiperItem, Swiper, SwiperSetting
} from './wxapp';

import {
    SETTING_COMPONENTS
} from '../../share/setting';

import { IconSelectDialog, CreateBtnDialog } from '../../dialogs';

import {
    CardComponent, CardSetting, CardView, SlotDirective,
    ZanSearchSetting, ZanSearchView
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
    ...SETTING_COMPONENTS,
    IconSelectDialog, CreateBtnDialog,

    // layouts
    LayoutView, LayoutSetting,
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
    MeepoSwiperTagsSetting, MeepoSwiperTagsView,

    // wxapp
    View, ViewSetting,
    ScrollView, ScrollViewSetting,
    SwiperItem, Swiper, SwiperSetting,

    // address
    MeepoAddAddressView, MeepoAddAddressSetting,
    MeepoListSetting, MeepoListView,

    // zan ui
    CardComponent, CardSetting, CardView,


    // forms
    MeepoFormMobileView, MeepoFormMobileSetting,
    MeepoFormTextareaView, MeepoFormTextareaSetting,
    MeepoFormWeightSetting, MeepoFormWeightView,
    MeepoFormTijiSetting, MeepoFormTijiView,
    MeepoFormPriceSetting, MeepoFormPriceView,
    MeepoFormTimeSetting, MeepoFormTimeView,
    MeepoFormTimeStartSetting, MeepoFormTimeStartView,
    MeepoFormTimeEndSetting, MeepoFormTimeEndView,

    MeepoFormMoneySetting, MeepoFormMoneyView,
    MeepoFormFeeSetting, MeepoFormFeeView,
    MeepoFormInputSetting, MeepoFormInputView,
    MeepoFormOrderSetting, MeepoFormOrderView,
    MeepoFormTagSetting, MeepoFormTagView,
    MeepoFormBaojiaSetting, MeepoFormBaojiaView,

    MeepoFormAddressEndSetting, MeepoFormAddressEndView,
    MeepoFormAddressSetting, MeepoFormAddressStartSetting,
    MeepoFormAddressStartView, MeepoFormAddressView,

    // 
    MeepoFormIdcardSetting, MeepoFormIdcardView,

    // 
    MeepoGoodsListSetting, MeepoGoodsListView,

    //
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

    PayRecordSetting, PayRecordView,
    PaySelectMoneySetting, PaySelectMoneyView,
    IqiyiHeadNavView, IqiyiHeadNavSetting,
    MeepoFormBtnSetting, MeepoFormBtnView,
    MeepoFormRealnameView, MeepoFormRealnameSetting,
    PayuiFlowSetting, PayuiFlowView,
    ...actions_component,
    MeepoGridsSetting, MeepoGridsView,
    PayStateSetting, PayStateView,

    TaskListSetting, TaskListView,
    RunnerListSetting, RunnerListView,
    AddMoneyViewComponent, AddMoneySettingComponent,
    TaskDetailView, TaskDetailSetting,
    WeuiPreviewView, WeuiPreviewSetting,
    MeepoDanmuView, MeepoDanmuSetting,


    LayoutVesselSetting, LayoutVesselView,
    FreeVesselSetting, FreeVesselView,
    ZanSearchSetting, ZanSearchView,

    JdHomeHeaderSetting, JdHomeHeaderView,
    JdHomeMoneySetting, JdHomeMoneyView,
    JdHomeOrderSetting, JdHomeOrderView,
    JdHomeListSetting, JdHomeListView,

    MeepoMarqueeSetting, MeepoMarqueeView,
    MeepoVideoSetting, MeepoVideoView,
    MeepoVoiceSetting, MeepoVoiceView,

    MeepoTabbarSetting, MeepoTabbarView,
    MeepoTitleSetting, MeepoTitleView,
    MeepoCardSetting, MeepoCardView,

    MeepoTabsSetting, MeepoTabsView
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
    'meepo-add-address': MeepoAddAddressView,
    'meepo-list': MeepoListView,
    'meepo-swiper-tags': MeepoSwiperTagsView,
    // forms
    'meepo-form-weight': MeepoFormWeightView,
    'meepo-form-tiji': MeepoFormTijiView,
    'meepo-form-price': MeepoFormPriceView,
    'meepo-form-time': MeepoFormTimeView,
    'meepo-form-time-start': MeepoFormTimeStartView,
    'meepo-form-time-end': MeepoFormTimeEndView,
    'meepo-form-money': MeepoFormMoneyView,
    'meepo-form-fee': MeepoFormFeeView,
    'meepo-form-input': MeepoFormInputView,
    'meepo-form-textarea': MeepoFormTextareaView,
    'meepo-form-mobile': MeepoFormMobileView,
    'meepo-form-order': MeepoFormOrderView,
    'meepo-form-tag': MeepoFormTagView,
    'meepo-form-baojia': MeepoFormBaojiaView,

    // 地址
    'meepo-form-address': MeepoFormAddressView,
    'meepo-form-address-end': MeepoFormAddressEndView,
    'meepo-form-address-start': MeepoFormAddressStartView,

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
    'pay-record': PayRecordView,
    'pay-select-money': PaySelectMoneyView,
    'iqiyi-head-nav': IqiyiHeadNavView,
    'meepo-form-btn': MeepoFormBtnView,
    'meepo-form-realname': MeepoFormRealnameView,
    'weui-cells': WeuiCellsView,
    'payui-flow': PayuiFlowView,
    ...actions_component_view,
    'meepo-grids': MeepoGridsView,
    'pay-state': PayStateView,
    'task-list': TaskListView,
    'runner-list': RunnerListView,
    'zan-search': ZanSearchView,

    'jd-home-header': JdHomeHeaderView,
    'jd-home-money': JdHomeMoneyView,
    'jd-home-order': JdHomeOrderView,
    'jd-home-list': JdHomeListView,
    'meepo-danmu': MeepoDanmuView,
    'meepo-marquee': MeepoMarqueeView,
    'meepo-text': MeepoTextView,
    'meepo-video': MeepoVideoView,
    'meepo-voice': MeepoVoiceView,

    'meepo-tabbar': MeepoTabbarView,
    'meepo-title': MeepoTitleView,
    'meepo-card': MeepoCardView,
    'meepo-tabs': MeepoTabsView
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


    'meepo-add-address': MeepoAddAddressSetting,
    'meepo-list': MeepoListSetting,
    'meepo-swiper-tags': MeepoSwiperTagsSetting,

    // forms
    'meepo-form-weight': MeepoFormWeightSetting,
    'meepo-form-tiji': MeepoFormTijiSetting,
    'meepo-form-price': MeepoFormPriceSetting,
    'meepo-form-time': MeepoFormTimeSetting,
    'meepo-form-time-start': MeepoFormTimeStartSetting,
    'meepo-form-time-end': MeepoFormTimeEndSetting,
    'meepo-form-money': MeepoFormMoneySetting,
    'meepo-form-fee': MeepoFormFeeSetting,
    'meepo-form-input': MeepoFormInputSetting,
    'meepo-form-mobile': MeepoFormMobileSetting,
    'meepo-form-textarea': MeepoFormTextareaSetting,
    'meepo-form-order': MeepoFormOrderSetting,
    'meepo-form-tag': MeepoFormTagSetting,
    'meepo-form-baojia': MeepoFormBaojiaSetting,
    // 地址
    'meepo-form-address': MeepoFormAddressSetting,
    'meepo-form-address-end': MeepoFormAddressEndSetting,
    'meepo-form-address-start': MeepoFormAddressStartSetting,

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
    'pay-record': PayRecordSetting,
    'pay-select-money': PaySelectMoneySetting,
    'iqiyi-head-nav': IqiyiHeadNavSetting,
    'meepo-form-btn': MeepoFormBtnSetting,
    'meepo-form-realname': MeepoFormRealnameSetting,
    'weui-cells': WeuiCellsSetting,
    'payui-flow': PayuiFlowSetting,
    ...actions_component_setting,
    'meepo-grids': MeepoGridsSetting,
    'pay-state': PayStateSetting,
    'task-list': TaskListSetting,
    'runner-list': RunnerListSetting,
    'zan-search': ZanSearchSetting,

    'jd-home-header': JdHomeHeaderSetting,
    'jd-home-money': JdHomeMoneySetting,
    'jd-home-order': JdHomeOrderSetting,
    'jd-home-list': JdHomeListSetting,
    'meepo-danmu': MeepoDanmuSetting,
    'meepo-marquee': MeepoMarqueeSetting,
    'meepo-text': MeepoTextSetting,
    'meepo-video': MeepoVideoSetting,
    'meepo-voice': MeepoVoiceSetting,

    'meepo-tabbar': MeepoTabbarSetting,
    'meepo-title': MeepoTitleSetting,
    'meepo-card': MeepoCardSetting,
    'meepo-tabs': MeepoTabsSetting
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
        const widget = new WIDGETS[name]();
        this.onCreateStream.next(widget);
    }
}

export * from './weui';
export * from './layouts';
export * from './wxapp';
export * from './zan-ui';
