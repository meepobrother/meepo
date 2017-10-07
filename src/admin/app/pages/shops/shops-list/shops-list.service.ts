import { Injectable } from '@angular/core';
import { ApiService } from '../../../core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ShopsListService {
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
        this.api.mpost('shops.getListShopsList', { page: page, psize: psize }).subscribe((res: ListResult) => {
            if(this.api.isSqlError(res.message)){
                this.handelError();
            }
            if (res.code === 1) {
                res.info.map(order => {
                    this.list.set(order.id, order);
                });
            }
            console.log(this.list);            
        }, error => {
            this.handelError();
        });
    }

    handelError() {
        this.api.mget('shops.update').subscribe(res => { })
    }

    add(item: any) {
        console.log(item);        
        this.api.mpost('shops.addShopsList', item).subscribe((res: ItemResult) => {
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
        this.api.mpost('shops.updateShopsList', item).subscribe((res: ItemResult) => {
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
        this.api.mpost('shops.deleteShopsList', item).subscribe((res: ItemResult) => {
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
        this.api.mpost('shops.updateStatusShopsList', item).subscribe((res: ItemResult) => {
            
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

interface ItemResult {
    code: number;
    info: Item;
    msg: string;
    message?: string;
}

interface ListResult {
    code: number;
    info: Item[];
    msg: string;
    message?: string;    
}


interface Item {
    id: number;
    title: string;
    uniacid: number;
    desc: string;
}