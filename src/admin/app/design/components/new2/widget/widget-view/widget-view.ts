import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'widget-view',
    templateUrl: './widget-view.html',
    styleUrls: ['./widget-view.scss']
})
export class WidgetView implements OnInit {
    constructor() { }

    ngOnInit() { }

    removeWidget(evt: any){}
}