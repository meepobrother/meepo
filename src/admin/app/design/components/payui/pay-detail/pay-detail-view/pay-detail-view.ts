import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pay-detail-view',
    templateUrl: './pay-detail-view.html',
    styleUrls: ['./pay-detail-view.scss']
})
export class PayDetailView implements OnInit {
    @Input() widget: any;
    constructor() { }
    ngOnInit() { }
}