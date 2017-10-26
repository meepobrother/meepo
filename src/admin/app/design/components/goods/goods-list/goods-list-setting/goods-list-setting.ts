import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoGoodsListDefault } from '../../../../classes';

@Component({
    selector: 'goods-list-setting',
    templateUrl: './goods-list-setting.html',
    styleUrls: ['./goods-list-setting.scss']
})
export class MeepoGoodsListSetting implements OnInit {
    @Input() widget: MeepoGoodsListDefault = new MeepoGoodsListDefault();
    constructor( ) { }

    ngOnInit() { }
}

