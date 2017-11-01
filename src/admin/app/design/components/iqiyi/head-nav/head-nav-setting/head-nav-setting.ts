import { Component, OnInit, Input } from '@angular/core';
import { IqiyiHeadNavDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
import * as store from 'store';
@Component({
    selector: 'iqiyi-head-nav-setting',
    templateUrl: './head-nav-setting.html',
    styleUrls: ['./head-nav-setting.scss']
})
export class IqiyiHeadNavSetting implements OnInit {
    @Input() widget: IqiyiHeadNavDefault = new IqiyiHeadNavDefault();
    activeItem: any;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {}
}