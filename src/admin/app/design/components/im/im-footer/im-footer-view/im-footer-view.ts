import { Component, OnInit, Input } from '@angular/core';
import { ImFooterDefault } from '../../../../classes';
@Component({
    selector: 'im-footer-view',
    templateUrl: './im-footer-view.html',
    styleUrls: ['./im-footer-view.scss']
})
export class ImFooterView implements OnInit {
    @Input() widget: ImFooterDefault = new ImFooterDefault();
    focus: boolean = false;
    key: string = '';

    constructor() { }
    ngOnInit() { }
    _onFocus() { }
}
