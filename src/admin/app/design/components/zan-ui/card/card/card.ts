import {
    Component, OnInit, Input,
    ContentChildren, QueryList, AfterContentInit
} from '@angular/core';
import { SlotDirective } from './slot';

@Component({
    selector: 'card',
    templateUrl: './card.html',
    styleUrls: ['./card.scss']
})
export class CardComponent implements OnInit, AfterContentInit {

    @Input() thumb: string;
    @Input() title: string;
    @Input() desc: string;
    @Input() num: string | number = '';
    @Input() price: string | number = '';
    @Input() centered: boolean = false;

    @ContentChildren(SlotDirective) slots: QueryList<SlotDirective>;

    constructor() { }

    ngOnInit() {
        console.log(this.titleSlot);
    }

    get titleSlot(){
        return this.slots.find((item: SlotDirective, index: number, items: SlotDirective[]):boolean => {
            return item.slot === 'title';
        });
    }

    ngAfterContentInit() {

    }
}

/**
props: {
    thumb: String,
    title: String,
    desc: String,
    num: [Number, String],
    centered: Boolean,
    price: [Number, String]
}
*/