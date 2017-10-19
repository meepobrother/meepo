import { Component, OnInit } from '@angular/core';
import { PageBase } from '../page';
@Component({
    selector: 'news-page',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss']
})
export class NewsPage extends PageBase implements OnInit {
    constructor() { 
        super();
    }

    ngOnInit() { }
}