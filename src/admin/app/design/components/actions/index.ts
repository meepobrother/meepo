import { ActionsOrderSearchView, ActionsOrderSearchSetting, ActionsOrderSearchDefafult } from './actions-order-search';
import { ActionsOrderPostView, ActionsOrderPostSetting, ActionsOrderPostDefafult } from './actions-order-post';
import { ActionsTasksPostView, ActionsTasksPostSetting, ActionsTasksPostDefafult } from './actions-tasks-post';

export const actions_component = [
    ActionsOrderSearchView, ActionsOrderSearchSetting,
    ActionsOrderPostView, ActionsOrderPostSetting,
    ActionsTasksPostView, ActionsTasksPostSetting
];

export const actions_component_view = {
    'actions-order-post': ActionsOrderPostView,
    'actions-order-search': ActionsOrderSearchView,
    'actions-tasks-post': ActionsTasksPostSetting
};

export const actions_component_setting = {
    'actions-order-post': ActionsOrderPostSetting,
    'actions-order-search': ActionsOrderSearchSetting,
    'actions-tasks-post': ActionsTasksPostView
};

export const actions_models = [
    ActionsTasksPostDefafult,
    ActionsOrderSearchDefafult,
    ActionsOrderPostDefafult
];
