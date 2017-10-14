import { Component, OnInit } from '@angular/core';
import { ViewDefault, ScrollDefault } from '../../design';

@Component({
    selector: 'coachs-page',
    templateUrl: './coachs-page.html',
    styleUrls: ['./coachs-page.scss']
})
export class CoachsPage implements OnInit {
    widget: ViewDefault = new ViewDefault();
    scrollViewWidget: ScrollDefault = new ScrollDefault();

    constructor() {
        this.scrollViewWidget.bindscrolltolower.debounceTime(100).subscribe(res => {
            console.log('滚动到底部/右边，会触发 scrolltolower 事件');
        });
        this.scrollViewWidget.bindscrolltoupper.debounceTime(100).subscribe(res => {
            console.log('滚动到顶部/左边，会触发 scrolltoupper 事件');
        });
    }

    ngOnInit() {
        this.widget['hover-class'] = 'section_hover';
        this.scrollViewWidget['scroll-y'] = true;
    }
}
