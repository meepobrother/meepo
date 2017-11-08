import { Component, OnInit, Input } from '@angular/core';
import { JdHomeListDefault } from '../../../../classes';

@Component({
    selector: 'jd-home-list-view',
    templateUrl: './jd-home-list-view.html',
    styleUrls: ['./jd-home-list-view.scss']
})
export class JdHomeListView implements OnInit {
    
    @Input() widget: JdHomeListDefault = new JdHomeListDefault();

    constructor() { }

    ngOnInit() { }
}
