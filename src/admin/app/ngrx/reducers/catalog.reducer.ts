import { Catalog } from '../domain';
export { Catalog } from '../domain';

import * as actions from '../actions/catalog.action';

export const initialState: Catalog = {};

export function reducer(state: Catalog = initialState, action: actions.Actions): Catalog {
    switch (action.type) {
        case actions.CATALOG_ADD: 
            return state;
        default: {
            return state;
        }
    }
}
