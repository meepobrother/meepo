import { Component, OnInit, Input } from '@angular/core';
import { Layout } from '../layout';
@Component({
    selector: 'layout-view',
    templateUrl: './layout-view.html',
    styleUrls: ['./layout-view.scss']
})
export class LayoutView implements OnInit {
    @Input() widget: Layout = new Layout();
    constructor() { }

    ngOnInit() { 
        console.log(this.widget);
    }
}