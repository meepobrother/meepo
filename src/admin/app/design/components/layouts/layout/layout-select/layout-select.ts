import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Layout } from '../layout';
import {
    _headerBodyFooterLayout, _bodyFooterLayout,
    _bodyFooterMenuLeftLayout, _bodyFooterMenuRightLayout,
    _headerBodyFooterMenuLeftLayout, _headerBodyFooterMenuRightLayout,
    _bodyLayout, _headerBodyLayout
} from './themes';
@Component({
    selector: 'layout-select',
    templateUrl: './layout-select.html',
    styleUrls: ['./layout-select.scss']
})
export class LayoutSelect implements OnInit {
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    
    widgets: Layout[] = [
        _bodyLayout,
        _headerBodyLayout,
        _bodyFooterLayout,
        _headerBodyFooterLayout,
        _bodyFooterMenuLeftLayout,
        _bodyFooterMenuRightLayout,
        _headerBodyFooterMenuLeftLayout,
        _headerBodyFooterMenuRightLayout
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