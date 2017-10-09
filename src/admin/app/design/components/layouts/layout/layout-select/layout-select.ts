import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LayoutContainer } from '../../layout-container';
import {
    headerBodyFooter, bodyFooter,
    bodyFooterMenuLeft, bodyFooterMenuRight,
    headerBodyFooterMenuLeft, headerBodyFooterMenuRight,
    body, headerBody
} from './themes';
@Component({
    selector: 'layout-select',
    templateUrl: './layout-select.html',
    styleUrls: ['./layout-select.scss']
})
export class LayoutSelect implements OnInit {
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    
    widgets: LayoutContainer[] = [
        body,
        bodyFooter,
        bodyFooterMenuRight,
        bodyFooterMenuLeft,
        headerBody,
        headerBodyFooter,
        headerBodyFooterMenuLeft,
        headerBodyFooterMenuRight,
    ];
    constructor() { }

    ngOnInit() { }

    select(item: any) {
        this.widgets.map(res => {
            res.active = false;
        });
        item.active = true;
        console.log(item);
        this.onSelect.emit(item);
    }
}