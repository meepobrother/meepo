import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
    DataPerService, CatalogGroup
} from './data-per.service';
@Injectable()
export class CatalogService {
    showAddPageDialogStream: Subject<any> = new Subject();
    showAddGroupDialogStream: Subject<any> = new Subject();
    showAddCollectDialogStream: Subject<any> = new Subject();

    pageTempDeleteStream: Subject<any> = new Subject();
    groupTempDeleteStream: Subject<any> = new Subject();

    catalogGroupsData: any[] = [];
    constructor(
        public dataPerService: DataPerService
    ) {
        this.catalogGroupsData = this.dataPerService.cataData.data,
        this.pageTempDeleteStream.subscribe(() => {
            // 
        });
        this.groupTempDeleteStream.subscribe(() => {
            // 
        });
    }

    clickCataPage() { }

    getGroupsData() {
        return this.catalogGroupsData;
    }

    addCatalogGroup(catalogGroup: CatalogGroup) {
        this.dataPerService.addCatalogGroup(catalogGroup);
    }

    getCatalogGroup() { }

    getCurrentPageRouter() { }

    getCurrentPageCatalogData() { }

    getSelectedPageCatalogData() { }

    getPageForm() { }

    getAppId() { }

    getPageData() { }

    savePage() { }

    reorderCatalogGroup() { }

    reorderCatalogPage() { }

    addPage() { }

    copyPage() { }

    canAddPage() { }

    removePage() { }

    removeGroup() { }

    detailPage() { }

}