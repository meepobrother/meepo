import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
    DataPerService
} from './data-per.service';
import {
    CatalogGroup
} from './model';
import {
    LayoutContainerModel
} from '../../design/classes';

@Injectable()
export class CatalogService {
    showAddPageDialogStream: Subject<any> = new Subject();
    showAddGroupDialogStream: Subject<any> = new Subject();
    showAddCollectDialogStream: Subject<any> = new Subject();

    pageTempDeleteStream: Subject<any> = new Subject();
    groupTempDeleteStream: Subject<any> = new Subject();

    // 分组数据
    catalogGroupsData: CatalogGroup[] = [];
    // 当前页面
    currentPage: any = new LayoutContainerModel();
    // 设置当前页面
    setCurrentPageStream: Subject<any> = new Subject();
    // 当前组
    currentGroup: any;
    constructor(
        public dataPerService: DataPerService
    ) {
        this.catalogGroupsData = this.dataPerService.cataGroups;
        this.pageTempDeleteStream.subscribe(() => {
            // 
        });
        this.groupTempDeleteStream.subscribe(() => {
            // 
        });
    }

    clickCataPage(catalogGroup: CatalogGroup, page: any) {
        this.currentPage = page;
        this.currentGroup = catalogGroup;
        this.setCurrentPageStream.next(page);
    }

    getGroupsData() {
        return this.catalogGroupsData;
    }

    addCatalogGroup(catalogGroup: CatalogGroup) {
        // 检查是否存在
        let needAdd: boolean = true;
        this.catalogGroupsData.map(res => {
            if (res.id === catalogGroup.id) {
                res = catalogGroup;
                needAdd = false;
            }
        });
        if (needAdd) {
            this.catalogGroupsData.push(catalogGroup);
        }
    }

    getCatalogGroup() {
        return this.currentGroup;
    }

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

    autoSavePage(){
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
        group.pages.splice(index, 1);
        this.dataPerService.saveData();
    }

    removeGroup(group: CatalogGroup) {
        this.dataPerService.removeCatalogGroup(group);
    }

    detailPage() { }

}