import { Action } from '@ngrx/store';

export const INIT =           '[footer] init';
export const INIT_SUCCESS =           '[footer] init success';
export const INIT_FAIL =           '[footer] init fail';

export const SHOW = '[footer] show';
export const HIDE = '[footer] hide';

export class ShowAction implements Action {
    readonly type = SHOW;
    constructor(public payload: any) { }
}

export class HideAction implements Action {
    readonly type = HIDE;
    constructor(public payload: any) { }
}

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

export type Actions
= InitAction
| InitSuccessAction
| InitFailAction
| ShowAction
| HideAction;