import { Component, OnInit, Input } from '@angular/core';
import { PayMessageSuccessDefault } from '../../../../classes';
@Component({
    selector: 'pay-message-success-setting',
    templateUrl: './pay-message-success-setting.html',
    styleUrls: ['./pay-message-success-setting.scss']
})
export class PayMessageSuccessSetting implements OnInit {
    @Input() widget: PayMessageSuccessDefault = new PayMessageSuccessDefault();
    constructor( ) { }
    ngOnInit() { }
}
