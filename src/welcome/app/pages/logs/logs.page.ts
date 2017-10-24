import { Component, OnInit } from '@angular/core';
import { PageBase } from '../page';

@Component({
    selector: 'logs-page',
    templateUrl: './logs.page.html',
    styleUrls: ['./logs.page.scss']
})
export class LogsPage extends PageBase implements OnInit {
    constructor() { 
        super();
    }

    ngOnInit() { }
}