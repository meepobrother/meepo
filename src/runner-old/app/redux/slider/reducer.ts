import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as actions from './action';
export interface State {
    show: boolean;
}

export const initialState: State = {
    show: false
}


export function reducer(state: State = initialState, action: actions.Actions): State {
    switch (action.type) {
        case actions.HIDE:
            return {show: false}
        case actions.SHOW:
            return {show: true}
        case actions.TOGGLE:
            return {show: !state.show};
        default:
            return state;
    }
}

export const getShow = (state: State) => state.show;
