import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeuiPage } from '../page';
@Component({
    selector: 'page-setting',
    templateUrl: './page-setting.html',
    styleUrls: ['./page-setting.scss']
})
export class PageSetting implements OnInit, OnChanges {
    type: string = 'content';
    @Input() widget: WeuiPage = new WeuiPage();

    constructor() { }
    ngOnInit() {
        if (!this.widget) {
            console.log('ButtonSetting 没有传入配置对象');
        }
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
}