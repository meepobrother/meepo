import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'weui-article',
    template: `
        <ng-content></ng-content>
    `
})
export class WeuiArticle implements OnInit {
    @HostBinding('class.weui-article') _article: boolean = true;
    @HostBinding('style.display') _display: string = 'block';

    constructor() { }

    ngOnInit() { }
}
