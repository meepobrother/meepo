import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'people-number-view',
    templateUrl: './people-number-view.html',
    styleUrls: ['./people-number-view.scss']
})
export class PeopleNumView implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}
