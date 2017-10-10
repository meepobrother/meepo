import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
    DataPerService
} from './data-per.service';
import {
    CatalogGroup
} from './model';
@Injectable()
export class CatalogService {
    showAddPageDialogStream: Subject<any> = new Subject();
    showAddGroupDialogStream: Subject<any> = new Subject();
    showAddCollectDialogStream: Subject<any> = new Subject();

    pageTempDeleteStream: Subject<any> = new Subject();
    groupTempDeleteStream: Subject<any> = new Subject();

    catalogGroupsData: CatalogGroup[] = [];
    constructor(
        public dataPerService: DataPerService
    ) {
        this.catalogGroupsData = this.dataPerService.cataGroups,
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

    addPage(page: any) { }

    copyPage() { }

    canAddPage() { }

    removePage() { }

    removeGroup(group: any) { 
        this.dataPerService.removeCatalogGroup(group);
    }

    detailPage() { }

}