import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as actions from './action';
import * as _ from 'underscore';

const cacheKey = 'cataData.data';
import * as store from 'store';


export interface State {
    catalogs?: actions.CatalogGroup[];
    currentCatalog?: actions.CatalogGroup;
    currentCatalogIndex?: number;
    currentPage?: actions.CatalogPage;
    currentPageIndex?: number;
    currentWidget?: any;
    currentWidgetIndex?: number;
}

export const initialState: State = {
    catalogs: store.get(cacheKey,[]),
    currentCatalog: null,
    currentCatalogIndex: 0,
    currentPage: null,
    currentPageIndex: 0,
    currentWidget: null,
    currentWidgetIndex: 0
}


import * as control from './control';

export function reducer(state: State = initialState, action: actions.Actions): State {
    switch (action.type) {
        case actions.CATALOG_ADD:
            return control.addCatalog(state, action);
        case actions.CATALOG_DELETE:
            return control.deleteCatalog(state, action)
        case actions.CATALOG_EDIT:
            return control.editCatalog(state, action);
        case actions.PAGE_ADD:
            return control.addPage(state, action);
        case actions.PAGE_DELETE:
            return control.deletePage(state, action);
        case actions.PAGE_EDIT:
            return control.editPage(state,action);
        default:
            return state;
    }
}


/* 
    Below are the selectors for this reducer. Make sure to make compact selectors as per 
    requirements of your application.
*/

export const getCatalogs = (state: State) => state.catalogs;
export const getCurrentCatalog = (state: State) => state.currentCatalog;
export const getCurrentPage = (state: State) => state.currentPage;
export const getCurrentPageIndex = (state: State) => state.currentCatalogIndex;
export const currentPageIndex = (state: State) => state.currentPageIndex;
export const currentWidget = (state: State) => state.currentWidget;
export const currentWidgetIndex = (state: State) => state.currentWidgetIndex;


