import { ButtonSetting, ButtonView } from './button';
import { WeuiCellsSetting, WeuiCellsView } from './weui-cells';
import { InputSetting, InputView } from './input';
import { SliderSetting, SliderView } from './slider';
import { UploaderSetting, UploaderView } from './uploader';






export const COMPONENTS = [
    ButtonView, ButtonSetting,
    WeuiCellsSetting, WeuiCellsView,
    InputSetting, InputView,
    SliderSetting, SliderView,
    UploaderSetting, UploaderView
];

export * from './button';
export * from './input';
export * from './slider';
export * from './uploader';
export * from './weui-cells';

