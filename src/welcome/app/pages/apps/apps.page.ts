import { Component, OnInit } from '@angular/core';
import { PageBase } from '../page';

@Component({
    selector: 'apps-page',
    templateUrl: './apps.page.html',
    styleUrls: ['./apps.page.scss']
})
export class AppsPage extends PageBase implements OnInit {
    constructor() { 
        super();
    }

    ngOnInit() { }
}

