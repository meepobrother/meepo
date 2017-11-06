import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';

@Component({
    selector: 'tixian-list',
    templateUrl: './tixian-list.html',
    styleUrls: ['./tixian-list.scss']
})
export class TixianList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}