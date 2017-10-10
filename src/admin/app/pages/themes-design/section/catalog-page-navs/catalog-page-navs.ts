import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'catalog-page-navs',
    templateUrl: './catalog-page-navs.html',
    styleUrls: ['./catalog-page-navs.scss']
})
export class CatalogPageNavs implements OnInit {
    @Input() group: any[] = [];
    @Output() onClickCata: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() { }
}
