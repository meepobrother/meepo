import { Component, OnInit } from '@angular/core';
import * as store from 'store';
@Component({
    selector: 'goods-page',
    templateUrl: './goods-page.html',
    styleUrls: ['./goods-page.scss']
})
export class GoodsPage implements OnInit {
    constructor() { }

    ngOnInit() { }

    clearCache(){
        console.log('clearCache');
        store.set('isLogin',false);
        store.set('__meepo_rcode',null);
    }
}


