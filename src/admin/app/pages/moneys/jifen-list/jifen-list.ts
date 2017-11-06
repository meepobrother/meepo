import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
@Component({
    selector: 'jifen-list',
    templateUrl: './jifen-list.html',
    styleUrls: ['./jifen-list.scss']
})
export class JifenList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}
