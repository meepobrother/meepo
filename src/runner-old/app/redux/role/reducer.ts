import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as actions from './action';

export interface State {
    role: string;
    pomission: any[];
}

export const initialState: State = {
    role: 'fans',
    pomission: []
}

export function checkPomission(state,action){
    return state;
}

function initSuccess(state,action){
    let pomissions = state.pomission;
    let newPomissions = action.payload;
    if(!(newPomissions instanceof Array)){
        newPomissions = [];
    }
    let news = [...newPomissions,...pomissions];
    return {...state,pomission: news}
}


function add(state,action){
    let pomissions = state.pomission;
    let news = [...pomissions,action.payload];
    return {...state,pomission: news}    
}
export function reducer(state: State = initialState, action: actions.Actions): State {
    switch (action.type) {
        case actions.CHECK:
            return checkPomission(state,action);
        case actions.ADD:
            return add(state,action);
        case actions.GET:
        case actions.INIT:
        case actions.INIT_FAIL:
        case actions.INIT_SUCCESS:
            return initSuccess(state,action);
        default:
            return state;
    }
}


export const getRole = (state: State) => state.role;
export const getPomission = (state: State) => state.pomission;
