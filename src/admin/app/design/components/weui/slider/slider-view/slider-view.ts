import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MeepoSlider } from '../slider';
@Component({
    selector: 'slider-view',
    templateUrl: './slider-view.html',
    styleUrls: ['./slider-view.scss']
})
export class SliderView implements OnInit, OnChanges {
    @Input() widget: MeepoSlider = new MeepoSlider();
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

