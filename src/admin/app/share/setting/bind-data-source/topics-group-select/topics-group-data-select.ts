import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core';
@Component({
    selector: 'topics-group-data-select',
    templateUrl: './topics-group-data-select.html',
    styleUrls: ['./topics-group-data-select.scss']
})
export class TopicsGroupDataSelect implements OnInit {
    items: any[] = [];
    constructor() { }

    ngOnInit() { }
}