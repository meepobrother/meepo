import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'article-item-view',
    templateUrl: './article-item-view.html',
    styleUrls: ['./article-item-view.scss']
})
export class ArticleItemView implements OnInit, OnDestroy {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }

    ngOnDestroy(){
        this.widget = null;
    }
}