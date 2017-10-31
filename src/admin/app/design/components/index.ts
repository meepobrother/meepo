import {
    MeepoAdvs, MeepoFilter,
    MeepoTasks, MeepoTags,
    MeepoFormMobile, MeepoFormTextareaDefault,
    MeepoAddAddress, MeepoList, MeepoSwiperTags,
    MeepoFormWeightDefault, MeepoFormTijiDefault,
    MeepoFormPriceDefault, MeepoFormTimeDefault,
    MeepoFormTimeStartDefault, MeepoFormTimeEndDefault,
    MeepoFormMoneyDefault, MeepoFormFeeDefault, MeepoFormInputDefault,
    MeepoFormOrderDefault, MeepoFormTagDefault, MeepoFormBaojiaDefault,
    MeepoFormAddressDefault, MeepoFormAddressEndDefault, MeepoFormAddressStartDefault,
    TopicsListDefault, UuItemBoxDefault, UuSwiperDefault, UuBenefitDefault, UuHeaderDefault,
    UuHomeHeaderDefault, UuHomeItemDefault, UuConDefault, UuCouponDefault,
    ActiveItemDefault, BargainItemDefault, ArticleItemDefault, CityItemDefault,
    MeepoDanmu, PayRecordDefault, PaySelectMoneyDefault, IqiyiHeadNavDefault,
    MeepoFormBtnDefault
} from '../classes';

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
    PaySelectMoneySetting, PaySelectMoneyView
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
    MeepoSwiperTagsSetting, MeepoSwiperTagsView,

    // 地址
    MeepoAddAddressView, MeepoAddAddressSetting,
    MeepoListSetting, MeepoListView,
    MeepoDanmuSetting, MeepoDanmuView
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
    MeepoFormBtnSetting, MeepoFormBtnView
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
    SettingContainerMargin, SettingContainerPadding,
    NumberComponent, NumberPx, FontSize, TextAlign,
    BindDataSource, ShopsGroupDataSelect, BindRightSource,
    SelectPageDialog, GoodsGroupDataSelect,
    TasksGroupDataSelect, SkillsGroupDataSelect, OrdersGroupDataSelect,
    SettingContainerColor, SettingContainerBorder,
    TopicsGroupDataSelect, IconLinkSelect, ImageLinkSelect,
    IconSelectDialog, IconLinkIconSelect, ImageLinkTitleSelect
} from './setting';

import {
    CardComponent, CardSetting, CardView, SlotDirective
} from './zan-ui';

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
    TopicsGroupDataSelect, IconSelectDialog, IconLinkIconSelect, ImageLinkTitleSelect,

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
    MeepoSwiperTagsSetting, MeepoSwiperTagsView,

    // wxapp
    View, ViewSetting,
    ScrollView, ScrollViewSetting,
    SwiperItem, Swiper, SwiperSetting,

    // setting
    SettingContainerMargin, SettingContainerPadding, SettingContainerBorder,
    NumberComponent, NumberPx, FontSize, TextAlign,
    BindDataSource, ShopsGroupDataSelect, BindRightSource,
    SelectPageDialog, GoodsGroupDataSelect,
    TasksGroupDataSelect, SkillsGroupDataSelect, OrdersGroupDataSelect,
    SettingContainerColor, IconLinkSelect, ImageLinkSelect,

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
    MeepoDanmuSetting, MeepoDanmuView,


    PayRecordSetting, PayRecordView,
    PaySelectMoneySetting, PaySelectMoneyView,
    IqiyiHeadNavView, IqiyiHeadNavSetting,
    MeepoFormBtnSetting, MeepoFormBtnView
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
    'meepo-danmu': MeepoDanmuView,
    'pay-record': PayRecordView,
    'pay-select-money': PaySelectMoneyView,
    'iqiyi-head-nav': IqiyiHeadNavView,
    'meepo-form-btn': MeepoFormBtnView
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
    'meepo-danmu': MeepoDanmuSetting, 
    'pay-record': PayRecordSetting,
    'pay-select-money': PaySelectMoneySetting, 
    'iqiyi-head-nav':  IqiyiHeadNavSetting,
    'meepo-form-btn': MeepoFormBtnSetting, 
};


export const WIDGETS = {
    'meepo-advs': MeepoAdvs,
    'meepo-filter': MeepoFilter,
    'meepo-tasks': MeepoTasks,
    'meepo-tags': MeepoTags,

    'meepo-add-address': MeepoAddAddress,
    'meepo-list': MeepoList,
    'meepo-swiper-tags': MeepoSwiperTags,

    // forms
    'meepo-form-mobile': MeepoFormMobile,
    'meepo-form-textarea': MeepoFormTextareaDefault,

    'meepo-form-weight': MeepoFormWeightDefault,
    'meepo-form-tiji': MeepoFormTijiDefault,
    'meepo-form-price': MeepoFormPriceDefault,
    'meepo-form-time': MeepoFormTimeDefault,
    'meepo-form-time-start': MeepoFormTimeStartDefault,
    'meepo-form-time-end': MeepoFormTimeEndDefault,
    'meepo-form-money': MeepoFormMoneyDefault,
    'meepo-form-fee': MeepoFormFeeDefault,
    'meepo-form-input': MeepoFormInputDefault,
    'meepo-form-order': MeepoFormOrderDefault,
    'meepo-form-tag': MeepoFormTagDefault,
    'meepo-form-baojia': MeepoFormBaojiaDefault,
    // 地址
    'meepo-form-address': MeepoFormAddressDefault,
    'meepo-form-address-end': MeepoFormAddressEndDefault,
    'meepo-form-address-start': MeepoFormAddressStartDefault,

    //
    'meepo-topics-list': TopicsListDefault,
    'uu-item-box': UuItemBoxDefault,
    'uu-swiper': UuSwiperDefault,
    'uu-benefit': UuBenefitDefault,
    'uu-header': UuHeaderDefault,   
    'uu-home-header': UuHomeHeaderDefault,
    'uu-home-item': UuHomeItemDefault,
    'uu-con': UuConDefault,
    'uu-coupon': UuCouponDefault,
    'active-item': ActiveItemDefault,
    'bargain-item': BargainItemDefault,
    'article-item': ArticleItemDefault,
    'city-item': CityItemDefault,
    'meepo-danmu': MeepoDanmu,
    'pay-record': PayRecordDefault,
    'pay-select-money': PaySelectMoneyDefault,
    'iqiyi-head-nav': IqiyiHeadNavDefault,
    'meepo-form-btn': MeepoFormBtnDefault
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
export * from './zan-ui';

