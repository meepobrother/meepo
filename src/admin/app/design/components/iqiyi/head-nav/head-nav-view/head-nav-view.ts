import { Component, OnInit, Input } from '@angular/core';
import { IqiyiHeadNavDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
import * as store from 'store';
@Component({
    selector: 'iqiyi-head-nav-view',
    templateUrl: './head-nav-view.html',
    styleUrls: ['./head-nav-view.scss']
})
export class IqiyiHeadNavView implements OnInit {
    @Input() widget: IqiyiHeadNavDefault = new IqiyiHeadNavDefault();
    activeItem: any;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {}
}