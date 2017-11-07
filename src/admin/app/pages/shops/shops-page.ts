
import { Component, OnInit } from '@angular/core';
import * as store from 'store';
@Component({
    selector: 'shops-page',
    templateUrl: './shops-page.html',
    styleUrls: ['./shops-page.scss']
})
export class ShopsPage implements OnInit {
    constructor() { }

    ngOnInit() { }

    clearCache(){
        console.log('clearCache');
        store.set('isLogin',false);
        store.set('__meepo_rcode',null);
    }
}

