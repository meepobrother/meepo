import { Injectable } from '@angular/core';
import { ApiService } from '../../../core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ShopsGroupService {
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
        this.api.mpost('shops.getListShopsGroup', { page: page, psize: psize }).subscribe((res: ShopsGroupListResult) => {
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
        this.api.mpost('shops.addShopsGroup', item).subscribe((res: ShopsGroupItemResult) => {
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
        this.api.mpost('shops.updateShopsGroup', item).subscribe((res: ShopsGroupItemResult) => {
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
        this.api.mpost('shops.deleteShopsGroup', item).subscribe((res: ShopsGroupItemResult) => {
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
        this.api.mpost('shops.updateStatusShopsGroup', item).subscribe((res: ShopsGroupItemResult) => {
            
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

interface ShopsGroupItemResult {
    code: number;
    info: ShopsGroup;
    msg: string;
    message?: string;
}

interface ShopsGroupListResult {
    code: number;
    info: ShopsGroup[];
    msg: string;
    message?: string;    
}


interface ShopsGroup {
    id: number;
    title: string;
    uniacid: number;
    desc: string;
}