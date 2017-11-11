import { Component, OnInit, Input } from '@angular/core';
import { ManNumDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';

@Component({
    selector: 'man-num-setting',
    templateUrl: './man-num-setting.html',
    styleUrls: ['./man-num-setting.scss']
})
export class ManNumSetting implements OnInit {
    @Input() widget: ManNumDefault = new ManNumDefault();
    
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}
