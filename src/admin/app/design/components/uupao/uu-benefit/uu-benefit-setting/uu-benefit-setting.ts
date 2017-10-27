import { Component, OnInit, Input } from '@angular/core';
import { UuBenefitDefault } from '../../../../classes';

@Component({
    selector: 'uu-benefit-setting',
    templateUrl: './uu-benefit-setting.html',
    styleUrls: ['./uu-benefit-setting.scss']
})
export class UuBenefitSetting implements OnInit {
    @Input() widget: UuBenefitDefault = new UuBenefitDefault();
    
    constructor() { }

    ngOnInit() { }
}