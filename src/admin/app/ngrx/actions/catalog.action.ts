import { Action } from '@ngrx/store';
import { Catalog } from '../domain';
export const CATALOG_ADD = '[CATALOG_ADD] ActionName';
export const CATALOG_EDIT = '[CATALOG_EDIT] ActionName';
export const CATALOG_DELETE = '[CATALOG_DELETE] ActionName';

export class CatalogAddAction implements Action {
    readonly type = CATALOG_ADD;

    constructor(public payload: Catalog) { }
}

export class CatalogEditAction implements Action {
    readonly type = CATALOG_EDIT;

    constructor(public payload: Catalog) { }
}

export class CatalogDeleteAction implements Action {
    readonly type = CATALOG_DELETE;

    constructor(public payload: Catalog) { }
}

export type Actions
    = CatalogAddAction
    | CatalogEditAction
    | CatalogDeleteAction;