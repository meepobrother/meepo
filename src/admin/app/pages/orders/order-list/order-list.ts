import { Component, OnInit } from '@angular/core';
import { OrderListAdd } from './order-list-add';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../core';

import 'rxjs/add/operator/take';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.html',
    styleUrls: ['./order-list.scss']
})
export class OrderList implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('orders.update').subscribe(r => { });
        this.api.mpost('orders.getListOrder', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    add() {
        const dialogRef = this.dialog.open(OrderListAdd);
        dialogRef.afterClosed().take(1).subscribe(res => {
            if (res) {
                this.api.mpost('orders.addOrder', res).subscribe(res => {
                    this.getList();
                });
            }else{
                this.getList();
            }
        });
    }

    edit(item: any) {
        const dialogRef = this.dialog.open(OrderListAdd, { data: item });
        dialogRef.afterClosed().take(1).subscribe(res => {
            if (res) {
                this.api.mpost('orders.addOrder', res).subscribe(res => {
                    this.getList();
                });
            }else{
                this.getList();
            }
        });
    }

    delete(item: any) {
        this.api.mpost('orders.deleteOrder', item).debounceTime(300).subscribe(res => {
            this.getList();
        });
    }
}