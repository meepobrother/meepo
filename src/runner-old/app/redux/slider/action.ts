import { Action } from '@ngrx/store';

export const SHOW =           '[slider] show';
export const HIDE =           '[slider] hide';
export const TOGGLE =           '[slider] toggle';


export class ToggleAction implements Action {
    readonly type = TOGGLE;
    constructor(public payload: any) { }
}
export class ShowAction implements Action {
  readonly type = SHOW;
  constructor(public payload: any) { }
}

export class HideAction implements Action {
    readonly type = HIDE;
    constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= ShowAction
| HideAction
| ToggleAction;