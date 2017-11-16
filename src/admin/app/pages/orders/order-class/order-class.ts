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

    ngOnInit() { }
}

export interface OrderClassItem {
    title?: string;
    code?: string;
    id?: number;
    status?: number;
    uniacid?: number;
}
