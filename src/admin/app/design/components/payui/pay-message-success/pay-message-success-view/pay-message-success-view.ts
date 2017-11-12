import { Component, OnInit, Input } from '@angular/core';
import { PayMessageSuccessDefault } from '../../../../classes';
@Component({
    selector: 'pay-message-success-view',
    templateUrl: './pay-message-success-view.html',
    styleUrls: ['./pay-message-success-view.scss']
})
export class PayMessageSuccessView implements OnInit {
    @Input() widget: PayMessageSuccessDefault = new PayMessageSuccessDefault();
    constructor( ) { }
    ngOnInit() { }
}
