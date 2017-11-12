import { Component, OnInit } from '@angular/core';
import { OrderClassAdd } from './order-class-add';
import { MatDialog } from '@angular/material';
import { OrderClassAddService } from './order-class-add.service';
import { ApiService } from '../../../core';
@Component({
    selector: 'order-class',
    templateUrl: './order-class.html',
    styleUrls: ['./order-class.scss']
})
export class OrderClass implements OnInit {
    list: OrderClassItem[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList(1, 30);
    }

    getList(page: number, psize: number) {
        this.api.mpost('orders.getListOrderClass', { page: page, psize: psize }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    add() {
        const dialogRef = this.dialog.open(OrderClassAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('orders.addOrderClass', res).subscribe(item => {
                    this.list.unshift(item);
                });
            }
        });
    }

    edit(item: any, index: number) {
        const dialogRef = this.dialog.open(OrderClassAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            this.api.mpost('orders.updateOrderClass', res).subscribe(item => {
                this.list[index] = res;
            });
        });
    }

    updateStatus(res: any, index: number) {
        this.api.mpost('orders.updateOrderClass', res).subscribe(item => {
            res.status = res.status == 1 ? 0 : 1;
        });
    }

    delete(item: any, index: number) {

    }
}

export interface OrderClassItem {
    title?: string;
    code?: string;
    id?: number;
    status?: number;
    uniacid?: number;
}
