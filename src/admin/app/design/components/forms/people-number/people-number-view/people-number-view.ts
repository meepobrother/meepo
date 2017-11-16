import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'people-num-view',
    templateUrl: './people-num-view.html',
    styleUrls: ['./people-num-view.scss']
})
export class PeopleNumView implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}
