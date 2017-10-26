import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoGoodsListDefault } from '../../../../classes';

@Component({
    selector: 'goods-list-view',
    templateUrl: './goods-list-view.html',
    styleUrls: ['./goods-list-view.scss']
})
export class MeepoGoodsListView implements OnInit {
    @Input() widget: MeepoGoodsListDefault = new MeepoGoodsListDefault();
    constructor( ) { }

    ngOnInit() { }
}

