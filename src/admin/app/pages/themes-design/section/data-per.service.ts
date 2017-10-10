import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as store from 'store';

import { CatalogGroup } from './model';

@Injectable()
export class DataPerService {

    cataGroups: CatalogGroup[] = store.get('cataData.data',[]);

    addCatalogGroup(catalogGroup: CatalogGroup) {
        this.cataGroups.push(catalogGroup);
        // 保存缓存
        this.saveData();
    }

    removeCatalogGroup(group: any) {
        const index = this.cataGroups.indexOf(group);
        this.cataGroups.splice(index, 1);
        this.saveData();
    }

    saveData(){
        store.set('cataData.data', this.cataGroups);
    }

    autoSaveData(){

    }
}