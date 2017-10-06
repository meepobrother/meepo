import { Component, OnInit } from '@angular/core';
import { ShopsListService } from './shops-list.service';

@Component({
    selector: 'shops-list',
    templateUrl: './shops-list.html',
    styleUrls: ['./shops-list.scss']
})
export class ShopsList implements OnInit {
    constructor(
        public api: ShopsListService
    ) { }

    ngOnInit() { }
}