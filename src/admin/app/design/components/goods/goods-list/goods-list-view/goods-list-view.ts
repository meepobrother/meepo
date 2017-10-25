import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoGoodsListDefault } from '../../../../classes';

@Component({
    selector: 'meepo-goods-list-view',
    templateUrl: './meepo-goods-list-view.html',
    styleUrls: ['./meepo-goods-list-view.scss']
})
export class MeepoGoodsListView implements OnInit {
    @Input() widget: MeepoGoodsListDefault = new MeepoGoodsListDefault();
    constructor( ) { }

    ngOnInit() { }
}

