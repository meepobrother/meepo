import { Component, OnInit, Input } from '@angular/core';
import { UuBenefitDefault } from '../../../../classes';
@Component({
    selector: 'uu-benefit-view',
    templateUrl: './uu-benefit-view.html',
    styleUrls: ['./uu-benefit-view.scss']
})
export class UuBenefitView implements OnInit {
    @Input() widget: UuBenefitDefault = new UuBenefitDefault();
    constructor() { }

    ngOnInit() { }
}