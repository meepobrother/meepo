import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as store from 'store';

export interface CatalogGroup{
    title: string;
    pages: any[];
};

@Injectable()
export class DataPerService {

    cataData: any = {
        data: store.get('cataData.data',[])
    };

    addCatalogGroup(catalogGroup: CatalogGroup) { 
        this.cataData.data.push(catalogGroup);
        // 保存缓存
        store.set('cataData.data',this.cataData.data);
    }
}