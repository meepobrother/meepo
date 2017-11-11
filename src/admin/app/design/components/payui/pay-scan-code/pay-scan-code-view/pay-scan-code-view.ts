import { Component, OnInit, Input } from '@angular/core';
import { PayScanCodeDefault } from '../../../../classes';
@Component({
    selector: 'pay-scan-code-view',
    templateUrl: './pay-scan-code-view.html',
    styleUrls: ['./pay-scan-code-view.scss']
})
export class PayScanCodeView implements OnInit {
    @Input() widget: PayScanCodeDefault = new PayScanCodeDefault();
    constructor( ) { }
    ngOnInit() { }
}
