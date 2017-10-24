import { Component, OnInit } from '@angular/core';
import { PageBase } from '../page';

@Component({
    selector: 'download-page',
    templateUrl: './download.page.html',
    styleUrls: ['./download.page.scss']
})
export class DownloadPage extends PageBase implements OnInit {
    constructor() { 
        super();
    }

    ngOnInit() { }
}