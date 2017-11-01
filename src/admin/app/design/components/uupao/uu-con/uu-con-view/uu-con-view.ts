import { Component, OnInit, Input } from '@angular/core';
import { UuConDefault } from '../../../../classes';
@Component({
    selector: 'uu-con-view',
    templateUrl: './uu-con-view.html',
    styleUrls: ['./uu-con-view.scss']
})
export class UuConView implements OnInit {
    @Input() widget: UuConDefault = new UuConDefault();
    constructor() { }

    ngOnInit() { }
}