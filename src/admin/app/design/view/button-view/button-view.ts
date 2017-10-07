import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../classes';
@Component({
    selector: 'button-view',
    templateUrl: './button-view.html',
    styleUrls: ['./button-view.scss']
})
export class ButtonView implements OnInit {
    @Input() widget: Widget;
    innerStyle: any;
    constructor() { }

    ngOnInit() { 
        this.innerStyle = this.widget.style;
    }
}

