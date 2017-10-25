import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoGoodsListDefault } from '../../../../classes';

@Component({
    selector: 'meepo-goods-list-setting',
    templateUrl: './meepo-goods-list-setting.html',
    styleUrls: ['./meepo-goods-list-setting.scss']
})
export class MeepoGoodsListView implements OnInit {
    @Input() widget: MeepoGoodsListDefault = new MeepoGoodsListDefault();
    constructor( ) { }

    ngOnInit() { }
}

