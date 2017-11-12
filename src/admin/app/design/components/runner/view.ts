import {
    TaskListView,
    RunnerListView,
    AddMoneyViewComponent,
    TaskDetailSetting,
    RunnerConcatView,
    RunnerCouponView,
    TaskStatusView,
    RunnerRegisterView,
    ManNumView
} from './index';


export const runner_views = [
    TaskListView,
    RunnerListView,
    AddMoneyViewComponent,
    TaskDetailSetting,
    RunnerConcatView,
    RunnerCouponView,
    TaskStatusView,
    RunnerRegisterView,
    ManNumView
];

export const runner_view_map = {
    'task-list': TaskListView,
    'runner-list': RunnerListView,
    'runner-concat':  RunnerConcatView,
    'runner-coupon': RunnerCouponView,
    'task-status': TaskStatusView,
    'runner-register': RunnerRegisterView,
    'man-num': ManNumView
};