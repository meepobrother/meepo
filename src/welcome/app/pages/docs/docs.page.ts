import { Component, OnInit } from '@angular/core';
import { PageBase } from '../page';

@Component({
    selector: 'docs-page',
    templateUrl: './docs.page.html',
    styleUrls: ['./docs.page.scss']
})
export class DocsPage extends PageBase implements OnInit {
    constructor() {
        super();
     }

    ngOnInit() { }
}
