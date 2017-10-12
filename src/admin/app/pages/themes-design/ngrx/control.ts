export function addCatalog(state, action) {
    let catalogs = state.catalogs;
    catalogs = [...catalogs, action.paylog]
    return { ...state, catalogs: catalogs }
}


export function editCatalog(state, action) {
    const catalog = action.payload;
    const catalogs = state.catalogs;
    const currentIndex = catalogs.indexOf(catalog);
    catalogs[currentIndex] = catalog;
    return { ...state, catalogs: catalogs }
}

export function deleteCatalog(state, action) {
    const catalog = action.payload;
    const catalogs = state.catalogs;
    const currentIndex = catalogs.indexOf(catalog);
    catalogs.splice(currentIndex, 1);
    return { ...state, catalogs: catalogs }
}

export function onCatalog(state, action) {
    const currentCatalog = action.payload;
    const index = state.catalogs.indexOf(currentCatalog);
    return { ...state, currentCatalog: currentCatalog, currentCatalogIndex: index }
}


export function addPage(state, action) {
    const page = action.payload;
    const cata_id = page.cata_id;
    const catalogs = state.catalogs;
    for (let i = 0; i < catalogs.length; i++) {
        if (catalogs[i].id == cata_id) {
            catalogs[i].pages.push(page);
            state = { ...state, currentCatalog: catalogs[i], currentCatalogIndex: i }
        }
    }
    return { ...state, catalogs: catalogs }
}

export function onPage(state, action) {
    const page = action.payload;
    const cata_id = page.cata_id;
    const catalogs = state.catalogs;
    for (let i = 0; i < catalogs.length; i++) {
        if (catalogs[i].id == cata_id) {
            // catalogs[i].pages.push(page);
            state = { ...state, currentCatalog: catalogs[i], currentCatalogIndex: i }
        }
    }
    return { ...state, catalogs: catalogs }
}

export function deletePage(state, action) {
    const page = action.payload;
    const index = state.currentCatalog.pages.indexOf(page);
    state.currentCatalog.pages.splice(index, 1); // 删除页面
    state.catalogs[state.currentCatalogIndex] = state.currentCatalog;
    return { ...state }
}

export function editPage(state, action) {
    const page = action.payload;
    const cata_id = page.cata_id;
    const index = state.currentCatalog.pages.indexOf(page);
    state.currentCatalog.pages[index] = page; // 删除页面
    state.catalogs[state.currentCatalogIndex] = state.currentCatalog;
    return { ...state }
}