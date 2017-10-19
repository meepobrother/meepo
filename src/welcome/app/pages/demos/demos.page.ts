import { Component, OnInit } from '@angular/core';
import { PageBase } from '../page';

@Component({
    selector: 'demos-page',
    templateUrl: './demos.page.html',
    styleUrls: ['./demos.page.scss']
})
export class DemosPage extends PageBase implements OnInit {
    constructor() { 
        super();
    }

    ngOnInit() { }
}

