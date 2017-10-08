import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from '../button';
@Component({
    selector: 'button-view',
    templateUrl: './button-view.html',
    styleUrls: ['./button-view.scss']
})
export class ButtonView implements OnInit, OnChanges {
    @Input() widget: Button = new Button();
    innerStyle: any;
    constructor() { }

    ngOnInit() { 
        this.innerStyle = this.widget.style;
    }

    ngOnChanges(changes: SimpleChanges){
        if('widget' in changes){
            this.innerStyle = this.widget.style;
        }
    }
}

