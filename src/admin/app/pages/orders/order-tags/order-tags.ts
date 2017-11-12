
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderTagsAdd } from './order-tags-add';
import { OrderTagsService } from './order-tags.service';
import { ApiService } from '../../../core';

@Component({
    selector: 'order-tags',
    templateUrl: './order-tags.html',
    styleUrls: ['./order-tags.scss']
})
export class OrderTags implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public tags: OrderTagsService,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList(1, 30);
    }

    getList(page, psize) {
        this.api.mpost('orders.getListOrderTags', { page: page, psize: psize }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    add() {
        const dialogRef = this.dialog.open(OrderTagsAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('orders.addOrderTags', res).subscribe(res => {
                    this.list.unshift(res);
                });
            }
        });
    }

    edit(item: any, index: number) {
        const dialogRef = this.dialog.open(OrderTagsAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('orders.addOrderTags', res).subscribe(res => {
                    this.list[index] = res;
                });
            }
        });
    }
}