import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';

@Component({
    selector: 'xinyu-list',
    templateUrl: './xinyu-list.html',
    styleUrls: ['./xinyu-list.scss']
})
export class XinyuList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}