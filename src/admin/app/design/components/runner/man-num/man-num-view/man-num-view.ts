import { Component, OnInit, Input } from '@angular/core';
import { ManNumDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';

@Component({
    selector: 'man-num-view',
    templateUrl: './man-num-view.html',
    styleUrls: ['./man-num-view.scss']
})
export class ManNumView implements OnInit {
    @Input() widget: ManNumDefault = new ManNumDefault();
    
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}
