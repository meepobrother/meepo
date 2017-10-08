import { Action } from '@ngrx/store';

export const OPEN =           '[quick] open';
export const CLOSE =           '[quick] close';
export const TOGGLE = '[quick] toggle';

export class OpenAction implements Action {
  readonly type = OPEN;
  constructor(public payload: any) { }
}

export class CloseAction implements Action {
    readonly type = CLOSE;
    constructor(public payload: any) { }
}

export class ToggleAction implements Action {
  readonly type = TOGGLE;
  constructor(public payload: any) { }
}

export type Actions
= OpenAction
| CloseAction
| ToggleAction;