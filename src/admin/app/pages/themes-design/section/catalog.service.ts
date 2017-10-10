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

    savePage(group: CatalogGroup, page: any) { 
        const index = group.pages.indexOf(page);
        group.pages[index] = page;
        this.dataPerService.saveData();
    }

    reorderCatalogGroup() { }

    reorderCatalogPage() { }

    addPage(group: CatalogGroup, page: any) { 
        group.pages.push(page);
        this.dataPerService.saveData();
    }

    copyPage() { }

    canAddPage() { }

    removePage(group: CatalogGroup, page: any) { 
        const index = group.pages.indexOf(page);
        group.pages.splice(index,1);
        this.dataPerService.saveData();
    }

    removeGroup(group: CatalogGroup) {
        this.dataPerService.removeCatalogGroup(group);
    }

    detailPage() { }

}