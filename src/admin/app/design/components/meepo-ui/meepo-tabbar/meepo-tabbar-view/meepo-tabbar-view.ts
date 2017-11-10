import { Component, OnInit, Input } from '@angular/core';
import { MeepoTabbarDefault } from '../../../../classes';
@Component({
    selector: 'meepo-tabbar-view',
    templateUrl: './meepo-tabbar-view.html',
    styleUrls: ['./meepo-tabbar-view.scss']
})
export class MeepoTabbarView implements OnInit {
    @Input() widget: MeepoTabbarDefault = new MeepoTabbarDefault();
    constructor() { }

    ngOnInit() { }
}
