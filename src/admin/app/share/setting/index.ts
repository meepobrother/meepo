export * from './number/number';
export * from './text-align/text-align';
export * from './number-px/number-px';
export * from './font-size/font-size';

export * from './select-page-dialog/select-page-dialog';
export * from './bind-data-source';
export * from './bind-right-source';

export * from './setting-container-margin/setting-container-margin';
export * from './setting-container-padding/setting-container-padding';
export * from './setting-container-color/setting-container-color';

export * from './setting-container-border/setting-container-border';
export * from './icon-link-select/icon-link-select';

export * from './image-link-select/image-link-select';
export * from './image-link-title-select/image-link-title-select';


export * from './icon-link-icon-select/icon-link-icon-select';
export * from './icon-title-dialog/icon-title-dialog';

export * from './image-link-title-select/image-link-title-select';

import { SettingContainerMargin } from './setting-container-margin/setting-container-margin';
import { SettingContainerPadding } from './setting-container-padding/setting-container-padding';
import { SettingContainerColor } from './setting-container-color/setting-container-color';
import { SettingContainerBorder } from './setting-container-border/setting-container-border';
import { NumberComponent } from './number/number';
import { NumberPx } from './number-px/number-px';
import { FontSize } from './font-size/font-size';
import { TextAlign } from './text-align/text-align';
import { BindDataSource, SELECTS_COMPONENTS } from './bind-data-source';
import { BindRightSource } from './bind-right-source/bind-right-source';
import { SelectPageDialog } from './select-page-dialog/select-page-dialog';
import { IconLinkSelect } from './icon-link-select/icon-link-select';
import { ImageLinkSelect } from './image-link-select/image-link-select';
import { IconLinkIconSelect } from './icon-link-icon-select/icon-link-icon-select';
import { ImageLinkTitleSelect } from './image-link-title-select/image-link-title-select';
import { IconTitleDialog } from './icon-title-dialog/icon-title-dialog';

import { ImageSetting } from './image-setting/image-setting';
import { FontSetting } from './font-setting/font-setting';
import { BorderSetting } from './border-setting/border-setting';

import { ImageSelectDirective } from './image-select/image-select';
export { ImageSelectDirective } from './image-select/image-select';

import { TagsSelect } from './tags-select/tags-select';
export { TagsSelect } from './tags-select/tags-select';


export const SETTING_COMPONENTS = [
    SettingContainerMargin, SettingContainerPadding, 
    SettingContainerColor, SettingContainerBorder,
    NumberComponent, NumberPx, FontSize, TextAlign,
    BindDataSource, BindRightSource,
    ...SELECTS_COMPONENTS,
    SelectPageDialog, IconLinkSelect, ImageLinkSelect,
    IconLinkIconSelect, ImageLinkTitleSelect,
    IconTitleDialog, ImageSetting, FontSetting,
    BorderSetting, TagsSelect
];
