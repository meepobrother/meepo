import { Component, Input, OnInit } from '@angular/core';
import { mapKeys } from '../../meepo/db/mapKeys';

@Component({
    selector: 'im-message-content',
    templateUrl: './im-message-content.html',
    styleUrls: ['./im-message-content.scss']
})
export class ImMessageContentComponent implements OnInit {
    @Input() item: any = {};
    constructor() { }
    ngOnInit() { }
}

