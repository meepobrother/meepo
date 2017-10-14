import { Component, OnInit, Input } from '@angular/core';
import { MeepoAdvs } from '../meepo-advs';
@Component({
    selector: 'meepo-advs-setting',
    templateUrl: './meepo-advs-setting.html',
    styleUrls: ['./meepo-advs-setting.scss']
})
export class MeepoAdvsSetting implements OnInit {
    @Input() widget: MeepoAdvs = new MeepoAdvs();
    constructor() { }

    ngOnInit() { }

    onChange() { }

    addItem() {
        this.widget.children.push({
            title: '',
            image: `https://meepo.com.cn/addons/imeepos_runner/template/mobile/design/assets/img/p_big${this.widget.children.length % 3}.jpg`
        });
    }
}
