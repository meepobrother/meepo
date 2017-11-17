import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormOrderDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';

@Component({
    selector: 'meepo-form-order-setting',
    templateUrl: './meepo-form-order-setting.html',
    styleUrls: ['./meepo-form-order-setting.scss']
})
export class MeepoFormOrderSetting implements OnInit {
    classes: any[] = [];
    @Input() widget: MeepoFormOrderDefault = new MeepoFormOrderDefault();
    constructor( ) { }
    ngOnInit() { }
}