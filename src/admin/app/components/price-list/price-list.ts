import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'price-list',
    templateUrl: './price-list.html',
    styleUrls: ['./price-list.scss']
})
export class PriceList implements OnInit {
    @Input() title: string;
    constructor() { }

    ngOnInit() { }
}