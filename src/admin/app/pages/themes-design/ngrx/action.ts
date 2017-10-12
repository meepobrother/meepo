import { Action } from '@ngrx/store';

export const CATALOG_ADD = '[CATALOG_ADD] ActionName';
export const CATALOG_EDIT = '[CATALOG_EDIT] ActionName';
export const CATALOG_DELETE = '[CATALOG_DELETE] ActionName';

export class CatalogAddAction implements Action {
    readonly type = CATALOG_ADD;

    constructor(public payload: CatalogGroup) { }
}

export class CatalogEditAction implements Action {
    readonly type = CATALOG_EDIT;

    constructor(public payload: CatalogGroup) { }
}

export class CatalogDeleteAction implements Action {
    readonly type = CATALOG_DELETE;

    constructor(public payload: CatalogGroup) { }
}

import { LayoutContainer } from '../../../design';
export { LayoutContainer } from '../../../design';


export const PAGE_ADD = '[PAGE_ADD] ActionName';
export const PAGE_EDIT = '[PAGE_EDIT] ActionName';
export const PAGE_DELETE = '[PAGE_DELETE] ActionName';

export class PageAddAction implements Action {
    readonly type = PAGE_ADD;

    constructor(public payload: CatalogPage) { }
}

export class PageEditAction implements Action {
    readonly type = PAGE_EDIT;

    constructor(public payload: CatalogPage) { }
}

export class PageDeleteAction implements Action {
    readonly type = PAGE_DELETE;

    constructor(public payload: CatalogPage) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = CatalogAddAction
    | CatalogEditAction
    | CatalogDeleteAction
    | PageAddAction
    | PageEditAction
    | PageDeleteAction;




import uuid from 'uuid';

export class CatalogGroup {
    title: string = '';
    id: string = uuid();
    pages: Map<string, CatalogPage> = new Map();
}


export class CatalogPage {
    title: string = '';
    id: string = uuid();
    type: string = 'page';
    cata_id: string;

    // 头部
    header: Map<string, any> = new Map();
    body: Map<string, any> = new Map();
    footer: Map<string, any> = new Map();
    menu: Map<string, any> = new Map();
}

