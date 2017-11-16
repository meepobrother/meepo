import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HmHomeTopDefault } from '../../../../classes';
import * as store from 'store';
@Component({
    selector: 'hm-home-top-view',
    templateUrl: './hm-home-top-view.html',
    styleUrls: ['./hm-home-top-view.scss']
})
export class HmHomeTopView implements OnInit {
    @Input() widget: HmHomeTopDefault = new HmHomeTopDefault();
    userinfo: any;
    constructor() { }
    ngOnInit() {
        this.userinfo = store.get('__meepo_myuserinfo',{});
     }
}
