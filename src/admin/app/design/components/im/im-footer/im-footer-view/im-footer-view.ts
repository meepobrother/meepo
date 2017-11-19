import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'im-footer-view',
    templateUrl: './im-footer-view.html',
    styleUrls: ['./im-footer-view.scss']
})
export class ImFooterView implements OnInit {

    @Input() widget: any;
    focus: boolean = false;
    key: string;
    constructor() { }
    ngOnInit() { }
    _onFocus() { }
}
