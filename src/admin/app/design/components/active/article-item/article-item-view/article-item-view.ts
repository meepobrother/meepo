import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'article-item-view',
    templateUrl: './article-item-view.html',
    styleUrls: ['./article-item-view.scss']
})
export class ArticleItemView implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}