import { Component, OnInit, Input } from '@angular/core';
import { CardDefault } from '../../../../classes';
@Component({
    selector: 'card-setting',
    templateUrl: './card-setting.html',
    styleUrls: ['./card-setting.scss']
})
export class CardSetting implements OnInit {
    @Input() widget: CardDefault = new CardDefault();
    constructor() { }

    ngOnInit() { }
}
