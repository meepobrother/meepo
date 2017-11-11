import {
    PayuiFlowSetting, PayRecordSetting,
    PayScanCodeSetting, PaySelectMoneySetting,
    PayStateSetting
} from './index';

export const payui_settings = [
    PayuiFlowSetting, PayRecordSetting,
    PayScanCodeSetting, PaySelectMoneySetting,
    PayStateSetting
];
export const payui_setting_map = {
    'pay-record': PayRecordSetting,
    'pay-select-money': PaySelectMoneySetting,
    'payui-flow': PayuiFlowSetting,
    'pay-state': PayStateSetting,
    'pay-scan-code': PayScanCodeSetting
};