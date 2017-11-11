import { 
    PayuiFlowView, PayRecordView,
    PayScanCodeView, PaySelectMoneyView,
    PayStateView
} from './index';

export const payui_views = [
    PayuiFlowView, PayRecordView,
    PayScanCodeView, PaySelectMoneyView,
    PayStateView
];
export const payui_view_map = {
    'pay-record': PayRecordView,
    'pay-select-money': PaySelectMoneyView,
    'payui-flow': PayuiFlowView,
    'pay-state': PayStateView,
    'pay-scan-code': PayScanCodeView
};