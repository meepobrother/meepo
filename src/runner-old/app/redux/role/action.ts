import { Action } from '@ngrx/store';

export const INIT =           '[init] init';
export const INIT_SUCCESS =           '[init] init success';
export const INIT_FAIL =           '[role] init fail';
export const GET =           '[role] get';
export const CHECK =           '[role] check';
export const ADD =           '[role] add';

export class InitAction implements Action {
  readonly type = INIT;
  constructor(public payload: any) { }
}

export class InitSuccessAction implements Action {
    readonly type = INIT_SUCCESS;
    constructor(public payload: any) { }
}

export class InitFailAction implements Action {
    readonly type = INIT_FAIL;
    constructor(public payload: any) { }
}

export class GetAction implements Action {
    readonly type = GET;
    constructor(public payload: any) { }
}

export class CheckAction implements Action {
    readonly type = CHECK;
    constructor(public payload: any) { }
}

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= InitAction
| InitSuccessAction
| InitFailAction
| GetAction
| CheckAction
| AddAction;