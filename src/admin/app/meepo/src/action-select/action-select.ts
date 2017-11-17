import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'action-select',
    templateUrl: './action-select.html',
    styleUrls: ['./action-select.scss']
})
export class ActionSelect implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}