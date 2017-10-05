import { Component, OnInit } from '@angular/core';
import { OrderListAdd } from './order-list-add';
@Component({
    selector: 'order-list',
    templateUrl: './order-list.html',
    styleUrls: ['./order-list.scss']
})
export class OrderList implements OnInit {
    list: any[] = [];
    constructor() { }

    ngOnInit() { }
}