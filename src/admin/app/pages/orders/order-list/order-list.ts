import { Component, OnInit } from '@angular/core';

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