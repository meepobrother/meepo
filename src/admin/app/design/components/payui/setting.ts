import {
    PayuiFlowSetting, PayRecordSetting,
    PayScanCodeSetting, PaySelectMoneySetting,
    PayStateSetting, PayInputMoneySetting,
    PayMessageSuccessSetting
} from './index';

export const payui_settings = [
    PayuiFlowSetting, PayRecordSetting,
    PayScanCodeSetting, PaySelectMoneySetting,
    PayStateSetting, PayInputMoneySetting, PayMessageSuccessSetting
];
export const payui_setting_map = {
    'pay-record': PayRecordSetting,
    'pay-select-money': PaySelectMoneySetting,
    'payui-flow': PayuiFlowSetting,
    'pay-state': PayStateSetting,
    'pay-scan-code': PayScanCodeSetting,
    'pay-input-money': PayInputMoneySetting,
    'pay-message-success': PayMessageSuccessSetting
};