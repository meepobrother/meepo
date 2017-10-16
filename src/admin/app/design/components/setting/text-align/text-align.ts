import {
    Component, OnInit, Input,
    Output, EventEmitter, ElementRef
} from '@angular/core';
declare const jQuery;

@Component({
    selector: 'text-align',
    templateUrl: './text-align.html',
    styleUrls: ['./text-align.scss']
})
export class TextAlign implements OnInit {
    @Input() model: any;
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    constructor(
        private ele: ElementRef
    ) { }

    ngOnInit() { }

    changeEleAlign(val: string){
        switch (val) {
            case "left":
                this.model['style']['text-align'] = 'left';
                break;
            case "right": 
                this.model['style']['text-align'] = 'right';
                break;
            case "center":
                this.model['style']['text-align'] = 'center';
                break;
            case "justify":
                this.model['style']['text-align'] = 'justify';
                break;
        }
    }
}