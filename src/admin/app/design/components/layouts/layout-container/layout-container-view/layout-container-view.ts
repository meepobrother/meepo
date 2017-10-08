import { Component, OnInit, Input } from '@angular/core';
import { LayoutContainer } from '../layout-container';
@Component({
    selector: 'layout-container-view',
    templateUrl: './layout-container-view.html',
    styleUrls: ['./layout-container-view.scss']
})
export class LayoutContainerView implements OnInit {
    @Input() widget: LayoutContainer = new LayoutContainer();
    constructor() { }

    ngOnInit() { }
}