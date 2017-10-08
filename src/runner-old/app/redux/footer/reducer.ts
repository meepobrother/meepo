import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as actions from './action';

export interface State {
    items: any[],
    code: string;
}

export const initialState: State = {
    items: [],
    code: ''
}

function initSuccess(state,action){
    console.log(action);
    return {...state,items: action.payload}
}


export function reducer(state: State = initialState, action: actions.Actions): State {
    switch (action.type) {
        case actions.INIT:
            return {...state,code: action.payload}
        case actions.INIT_SUCCESS:
            return initSuccess(state,action);
        case actions.INIT_FAIL:
            return state;
        default:
            return state;
    }
}


/* 
    Below are the selectors for this reducer. Make sure to make compact selectors as per 
    requirements of your application.
*/

export const getItems = (state: State) => state.items;
