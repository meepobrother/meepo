import { 
    PayuiFlowView, PayRecordView,
    PayScanCodeView, PaySelectMoneyView,
    PayStateView, PayInputMoneyView, PayMessageSuccessView
} from './index';

export const payui_views = [
    PayuiFlowView, PayRecordView,
    PayScanCodeView, PaySelectMoneyView,
    PayStateView, PayInputMoneyView, PayMessageSuccessView
];
export const payui_view_map = {
    'pay-record': PayRecordView,
    'pay-select-money': PaySelectMoneyView,
    'payui-flow': PayuiFlowView,
    'pay-state': PayStateView,
    'pay-scan-code': PayScanCodeView,
    'pay-input-money': PayInputMoneyView,
    'pay-message-success-view': PayMessageSuccessView
};