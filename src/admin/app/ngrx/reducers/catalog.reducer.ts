import { Catalog } from '../domain';
export { Catalog } from '../domain';
// 分类列表
import * as store2 from 'store';
const cacheKey = 'cataData.data';
import * as actions from '../actions/catalog.action';
let cacheCatalog = store2.get(cacheKey,[]);
if(cacheCatalog instanceof Array){

}else{
    cacheCatalog = [];
}
// 初始化
export const initialState: any[] =cacheCatalog;

function addCatalog(state,action){
   let catalogs = [...state,action.payload];
    saveData(catalogs);
    return catalogs;
}

function editCatalog(state, action){
    const catalogs = state;
    const res = action.payload;
    for(let i=0;i<catalogs.length;i++){
        if(catalogs[i].id == res.id){
            catalogs[i] = res;
        }
    }
    saveData(catalogs);
    return catalogs;
}

function deleteCatalog(state, action){
    const catalogs = state;
    const res = action.payload;
    const index = catalogs.indexOf(res);
    catalogs.splice(index,1);
    saveData(catalogs);
    return catalogs;
}

function saveData(state){
    store2.set(cacheKey,state);
    return state;
}

export function reducer(state: any[] = initialState, action: actions.Actions){
    switch (action.type) {
        case actions.CATALOG_ADD:
            return addCatalog(state,action);
        case actions.CATALOG_DELETE:
            return deleteCatalog(state,action);
        case actions.CATALOG_EDIT:
            return editCatalog(state,action);
        case actions.PAGE_ADD:
        case actions.PAGE_DELETE:
        case actions.PAGE_EDIT:
            return editCatalog(state,action);
        case actions.CATALOG_SAVE_TO_CACHE:
            return saveData(state);
        default: {
            return state;
        }
    }
}
