import { Component, OnInit, Input } from '@angular/core';
import { PayScanCodeDefault } from '../../../../classes';

@Component({
    selector: 'pay-scan-code-setting',
    templateUrl: './pay-scan-code-setting.html',
    styleUrls: ['./pay-scan-code-setting.scss']
})
export class PayScanCodeSetting implements OnInit {
    @Input() widget: PayScanCodeDefault = new PayScanCodeDefault();
    
    constructor( ) { }
    ngOnInit() { }
}
