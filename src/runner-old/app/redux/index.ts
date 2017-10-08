import { Action, StoreModule } from '@ngrx/store';
import { createSelector,combineReducers } from '@ngrx/store';

import { NgModule } from '@angular/core';
import * as QuickReducer from './quick/reducer';
import * as RoleReducer from './role/reducer';
import * as FooterReducer from './footer/reducer';
import * as SliderReducer from './slider/reducer';




export interface State {
    quick: QuickReducer.State,
    role: RoleReducer.State,
    footer: FooterReducer.State,
    slider: SliderReducer.State
}

export const initialState: State = {
    quick: QuickReducer.initialState,
    role: RoleReducer.initialState,
    footer: FooterReducer.initialState,
    slider: SliderReducer.initialState
}

export const reducers = {
    quick: QuickReducer.reducer,
    role: RoleReducer.reducer,
    footer: FooterReducer.reducer,
    slider: SliderReducer.reducer
}

export const getQuickState = (state: State) => state.quick;
export const getRoleState = (state: State) => state.role;
export const getFooterState = (state: State) => state.footer;
export const getSliderState = (state: State) => state.slider;


export const quickSelector = createSelector(getQuickState,QuickReducer.getOpen);
export const roleSelector = createSelector(getRoleState,RoleReducer.getRole);
export const pomissionSelector = createSelector(getRoleState,RoleReducer.getPomission);
export const footerSelector = createSelector(getFooterState,FooterReducer.getItems);
export const sliderSelector = createSelector(getSliderState,SliderReducer.getShow);



// effects
import { RoleEffects } from './role/effect';
import { FooterEffects } from './footer/effect';
import { EffectsModule } from '@ngrx/effects';
import { DemoPage } from './domain/demoPage'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        DemoPage
    ],
    imports: [
        StoreModule.forRoot(reducers),
        HttpClientModule,
        EffectsModule.forRoot([
            RoleEffects,
            FooterEffects
        ])
    ],
    exports: [
        StoreModule,
        EffectsModule,
        DemoPage
    ]
})
export class AppStoreModule{

}