import { Injectable } from '@angular/core';
import { ApiService } from '../../../core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class OrderClassAddService {
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
        this.api.mpost('orders.getListOrderClass', { page: page, psize: psize }).subscribe((res: OrderTagsListResult) => {
            if(this.api.isSqlError(res.msg)){
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
        this.api.mget('orders.update').subscribe(res => { })
    }

    add(item: any) {
        console.log(item);        
        this.api.mpost('orders.addOrderClass', item).subscribe((res: OrderTagsItemResult) => {
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
        this.api.mpost('orders.updateOrderClass', item).subscribe((res: OrderTagsItemResult) => {
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
        this.api.mpost('orders.deleteOrderClass', item).subscribe((res: OrderTagsItemResult) => {
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
        this.api.mpost('orders.updateStatusOrderClass', item).subscribe((res: OrderTagsItemResult) => {
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

interface OrderTagsItemResult {
    code: number;
    info: OrderTag;
    msg: string;
    message?: string;
}

interface OrderTagsListResult {
    code: number;
    info: OrderTag[];
    msg: string;
    message?: string;    
}


interface OrderTag {
    id: number;
    title: string;
    uniacid: number;
    desc: string;
}