import {
    TaskListSetting,
    RunnerListSetting,
    AddMoneySettingComponent,
    TaskDetailView,
    RunnerConcatSetting,
    RunnerCouponSetting,
    TaskStatusSetting,
    RunnerRegisterSetting,
    ManNumSetting
} from './index';

export const runner_settings = [
    TaskListSetting,
    RunnerListSetting,
    AddMoneySettingComponent,
    TaskDetailView,
    RunnerConcatSetting,
    RunnerCouponSetting,
    TaskStatusSetting,
    RunnerRegisterSetting,
    ManNumSetting
];

export const runner_setting_map = {
    'runner-concat': RunnerConcatSetting,
    'runner-coupon': RunnerCouponSetting,
    'task-status': TaskStatusSetting,
    'runner-register': RunnerRegisterSetting,
    'task-list': TaskListSetting,
    'runner-list': RunnerListSetting,
    'man-num': ManNumSetting
};
