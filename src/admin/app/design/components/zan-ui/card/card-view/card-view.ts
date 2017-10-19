import { Component, OnInit, Input } from '@angular/core';
import { CardDefault } from '../../../../classes';

@Component({
    selector: 'card-view',
    templateUrl: './card-view.html',
    styleUrls: ['./card-view.scss']
})
export class CardView implements OnInit {
    @Input() widget: CardDefault = new CardDefault();
    constructor() { }

    ngOnInit() { }
}
