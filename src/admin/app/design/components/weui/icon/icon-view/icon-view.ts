import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Icon } from '../../../../classes';
@Component({
    selector: 'icon-view',
    templateUrl: './icon-view.html',
    styleUrls: ['./icon-view.scss']
})
export class IconView implements OnInit, OnChanges {
    @Input() widget: Icon = new Icon();
    constructor() { }
    ngOnInit() { }
    ngOnChanges() { }
}