import {
    Component, OnInit, Input,
    OnChanges, SimpleChanges, 
    ElementRef, Renderer2,
    HostBinding
} from '@angular/core';
import { Button } from '../../../../classes';
@Component({
    selector: 'button-view',
    templateUrl: './button-view.html',
    styleUrls: ['./button-view.scss']
})
export class ButtonView implements OnInit, OnChanges {
    @Input() widget: Button = new Button();
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) { }
    ngOnInit() { }
    ngOnChanges() { }

    getElement() {
        return this.ele.nativeElement;
    }
}

