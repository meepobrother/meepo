import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';

@Component({
    selector: 'yue-list',
    templateUrl: './yue-list.html',
    styleUrls: ['./yue-list.scss']
})
export class YueList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}