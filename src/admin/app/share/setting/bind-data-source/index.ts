export * from './goods-group-select/goods-group-data-select';
export * from './shops-group-select/shops-group-data-select';

export * from './orders-group-select/orders-group-data-select';
export * from './skills-group-select/skills-group-data-select';
export * from './tasks-group-select/tasks-group-data-select';
export * from './topics-group-select/topics-group-data-select';

export * from './bind-data-source';


import { GoodsGroupDataSelect } from './goods-group-select/goods-group-data-select';
import { ShopsGroupDataSelect } from './shops-group-select/shops-group-data-select';

import { OrdersGroupDataSelect } from './orders-group-select/orders-group-data-select';
import { SkillsGroupDataSelect } from './skills-group-select/skills-group-data-select';

import { TasksGroupDataSelect } from './tasks-group-select/tasks-group-data-select';
import { TopicsGroupDataSelect } from './topics-group-select/topics-group-data-select';

export const SELECTS_COMPONENTS = [
    GoodsGroupDataSelect, ShopsGroupDataSelect,
    OrdersGroupDataSelect, SkillsGroupDataSelect,
    TasksGroupDataSelect, TopicsGroupDataSelect
];