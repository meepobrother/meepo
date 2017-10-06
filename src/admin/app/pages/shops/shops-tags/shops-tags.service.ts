import { Injectable } from '@angular/core';
import { ApiService } from '../../../core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ShopsTagsService {
    list: Map<number, any> = new Map();

    get dates() {
        const groups: any[] = [];
        this.list.forEach((group: any) => {
            groups.push(group);
        });
        return groups;
    }

    constructor(
        public api: ApiService
    ) { }

    getList(page: number = 1, psize: number = 30) {
        this.api.mpost('shops.getListShopsTags', { page: page, psize: psize }).subscribe((res: ShopsTagsListResult) => {
            if(this.api.isSqlError(res.msg)){
                this.handelError();
            }
            if (res.code === 1) {
                res.info.map(order => {
                    this.list.set(order.id, order);
                });
            }
        }, error => {
            this.handelError();
        });
    }

    handelError() {
        this.api.mget('shops.update').subscribe(res => { })
    }

    add(item: any) {
        console.log(item);        
        this.api.mpost('shops.addShopsTags', item).subscribe((res: ShopsTagsItemResult) => {
            if(this.api.isSqlError(res.message)){
                this.handelError();
            }
            if (res.code === 1) {
                this.list.set(res.info.id, res.info);
            }
        }, error => {
            this.handelError();
        });
    }

    edit(item: any) {
        this.api.mpost('shops.updateShopsTags', item).subscribe((res: ShopsTagsItemResult) => {
            if(this.api.isSqlError(res.message)){
                this.handelError();
            }
            if (res.code === 1) {
                this.list.set(res.info.id, res.info);
            }
        }, error => {
            this.handelError();
        });
    }

    delete(item: any) {
        this.api.mpost('shops.deleteShopsTags', item).subscribe((res: ShopsTagsItemResult) => {
            if(this.api.isSqlError(res.message)){
                this.handelError();
            }
            if (res.code === 1) {
                this.list.delete(res.info.id);
            }
        }, error => {
            this.handelError();
        });
    }

    updateStatus(item: any) {
        this.api.mpost('shops.updateStatusShopsTags', item).subscribe((res: ShopsTagsItemResult) => {
            if(this.api.isSqlError(res.message)){
                this.handelError();
            }
            if (res.code === 1) {
                this.list.set(res.info.id, res.info);
            }
        }, error => {
            this.handelError();
        });
    }
}

interface ShopsTagsItemResult {
    code: number;
    info: ShopsTag;
    msg: string;
    message?: string;
}

interface ShopsTagsListResult {
    code: number;
    info: ShopsTag[];
    msg: string;
    message?: string;    
}


interface ShopsTag {
    id: number;
    title: string;
    uniacid: number;
}