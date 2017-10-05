import { Component, OnInit } from '@angular/core';
import { OrderClassAdd } from './order-class-add';
@Component({
    selector: 'order-class',
    templateUrl: './order-class.html',
    styleUrls: ['./order-class.scss']
})
export class OrderClass implements OnInit {
    list: OrderClassItem[] = [];
    constructor() { }
    ngOnInit() { }
}

export interface OrderClassItem{
    title?: string;
    code?: string;
    id?: number;
    status?: number;
    uniacid?: number;
}
