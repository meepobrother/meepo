import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CatalogService {
    showAddPageDialogStream: Subject<any> = new Subject();
    showAddGroupDialogStream: Subject<any> = new Subject();
    showAddCollectDialogStream: Subject<any> = new Subject();

    pageTempDeleteStream: Subject<any> = new Subject();
    groupTempDeleteStream: Subject<any> = new Subject();

    constructor() {
        this.pageTempDeleteStream.subscribe(() => {
            // 
        });
        this.groupTempDeleteStream.subscribe(() => {
            // 
        });
    }

    clickCataPage() { }

    getGroupsData() { 
        return [];
    }

    getCatalogGroup() { }

    getCurrentPageRouter() { }

    getCurrentPageCatalogData() { }

    getSelectedPageCatalogData() { }

    getPageForm() { }

    getAppId() { }

    getPageData() { }

    savePage() { }

    addCatalogGroup() { }

    reorderCatalogGroup() { }

    reorderCatalogPage() { }

    addPage() { }

    copyPage() { }

    canAddPage() { }

    removePage() { }

    removeGroup() { }

    detailPage() { }

}