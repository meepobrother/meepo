import { Component, OnInit } from '@angular/core';
import { OrderClassAdd } from './order-class-add';
import { MdDialog } from '@angular/material';
import { OrderClassAddService } from './order-class-add.service';

@Component({
    selector: 'order-class',
    templateUrl: './order-class.html',
    styleUrls: ['./order-class.scss']
})
export class OrderClass implements OnInit {
    list: OrderClassItem[] = [];
    constructor(
        public dialog: MdDialog,
        public api: OrderClassAddService
    ) { }

    ngOnInit() { 
        this.api.getList();
    }

    add() {
        const dialogRef = this.dialog.open(OrderClassAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.add(res);
            }
        });
    }

    edit(item: any) {
        const dialogRef = this.dialog.open(OrderClassAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.edit(res);
            }
        });
    }

    updateStatus(item: any){
        this.api.updateStatus(item);
    }
}

export interface OrderClassItem {
    title?: string;
    code?: string;
    id?: number;
    status?: number;
    uniacid?: number;
}
