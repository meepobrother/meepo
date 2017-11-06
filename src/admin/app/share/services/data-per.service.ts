import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as store from 'store';

import { CatalogGroup } from './model';

@Injectable()
export class DataPerService {

    static that: any;
    constructor() { 
        this.autoSaveData();
    }

    cataGroups: CatalogGroup[] = store.get('cataData.data', []);

    addCatalogGroup(catalogGroup: CatalogGroup) {
        this.cataGroups.push(catalogGroup);
        // 保存缓存
        this.saveData();
    }

    getDataPerInstance(){
        return DataPerService.that = DataPerService.that || new DataPerService();
    }

    removeCatalogGroup(group: any) {
        const index = this.cataGroups.indexOf(group);
        this.cataGroups.splice(index, 1);
        this.saveData();
    }

    saveData() {
        store.set('cataData.data', this.cataGroups);
    }

    autoSaveData() {
        setInterval(() => {
            this.saveData();
        }, 6000)
    }
}